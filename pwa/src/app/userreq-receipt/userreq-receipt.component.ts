import { Component, NgModule } from '@angular/core';


// Bread - 2.50
// Milk - 1.99
// Eggs - 1.50
// Cheese - 3.75
// request - store 3 days
// condition - must be sealed during loan period

@Component({
  selector: 'app-userreq-receipt',
  templateUrl: './userreq-receipt.component.html',
  styleUrls: ['./userreq-receipt.component.scss']
})
export class UserreqReceiptComponent {
  userRequests: string = '';
  receipt: any;

  generateReceipt() {
     // Parse user input into an array of items
  let conditions = [
    { name: 'Loan period (3 days)' },
    { name: 'Sealed condition fee' }
  ];


  // Generate receipt object
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();


    // Parse user input into an array of items
    const items = this.userRequests.split('\n').map(item => {
      let parts: string[] = [];
      if(item.includes("-"))
      {
        console.log(item)
        parts = item.split('-')
        return { name: parts[0].trim(), price: parseFloat(parts[1].trim()) };
      
      }
      return ""

    });

    const conditionsrule   = this.userRequests.split('\n').map(item => {
      let parts: string[] = [];
      if(item.includes(":"))
      {
        console.log(item)
        parts = item.split(':')
        return { name: parts[0].trim(), condition: parts[1].trim() };
      
      }
      return {}
     

    });
    // Calculate total price
    const total = items.reduce((acc, item) => {
      if (item && item.price) {
        return acc + item.price;
      } else {
        return acc;
      }
    }, 0);

    // Generate receipt object
    this.receipt = {    borrower: 'John Doe',
    user: 'Jane Smith',
    venue: '123 Main Street',
    date: date,
    time: time,
    items: items,
    conditions: conditionsrule,
    total: total };
  }
}
