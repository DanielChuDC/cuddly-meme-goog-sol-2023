provider "google" {
  project = "your-project-id"
  region  = "us-central1"
}

resource "google_compute_instance" "instance" {
  name         = "smart-contract-instance"
  machine_type = "n1-standard-1"
  zone         = "us-central1-a"

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2004-lts"
    }
  }

  network_interface {
    network = "default"

    access_config {
      // Ephemeral IP
    }
  }

  metadata_startup_script = <<EOF
#!/bin/bash
apt-get update
apt-get install -y ansible
EOF

  metadata = {
    ansible_inventory = "${self.network_interface.0.access_config.0.nat_ip} ansible_user=ubuntu"
  }

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("~/.ssh/id_rsa")
    host        = self.network_interface.0.access_config.0.nat_ip
  }
}

resource "null_resource" "deploy" {
  depends_on = [google_compute_instance.instance]

  provisioner "local-exec" {
    command = "ansible-playbook deploy.yml -i '${google_compute_instance.instance.network_interface.0.access_config.0.nat_ip},' -u ubuntu --private-key ~/.ssh/id_rsa"
  }

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("~/.ssh/id_rsa")
    host        = google_compute_instance.instance.network_interface.0.access_config.0.nat_ip
  }
}
