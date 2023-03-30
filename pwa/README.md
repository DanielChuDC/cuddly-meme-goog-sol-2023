 ### step-by-step tutorial for generating a Progressive Web App (PWA) for an Angular application:

1. First, make sure that the latest version of Angular CLI installed. Install it using the following command:

```
npm install -g @angular/cli
```


### Create a new Angular application using the CLI:
```
ng new pwa
```

### Navigate to the root directory of application:

### Generate a service worker using the Angular CLI:

ng add @angular/pwa

This command will install the @angular/service-worker and @angular/pwa packages, and generate a service worker configuration file (ngsw-config.json) and a manifest.json file.

Configure the app's icons by editing the manifest.json file. Add the following icons in the "icons" array:

### Build the app for production with service worker:
```bash
$ ng build --service-worker  true


✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.
✔ Service worker generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.f7d889a75fa15166.js      | main          | 209.55 kB |                56.96 kB
polyfills.4472481a9975e337.js | polyfills     |  33.08 kB |                10.67 kB
runtime.c36cc7e9113b3eeb.js   | runtime       | 884 bytes |               508 bytes
styles.ef46db3751d8e999.css   | styles        |   0 bytes |                       -

                              | Initial Total | 243.49 kB |                68.12 kB

Build at: 2023-03-30T07:21:29.810Z - Hash: d50f5de6999c6825 - Time: 18895ms
```

### Serve the app using a local HTTP server:

```
npm install -g http-server
http-server -p 8080 -c-1 dist/pwa

```

This command will serve the app on port 8080 using the dist/pwa directory as the root directory.

Open a web browser and navigate to http://localhost:8080. The Angular app running as a PWA.

Test the PWA features by opening the app in a mobile browser and adding it to the home screen. 


---

# Pwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. Can use `ng generate directive|pipe|service|class|guard|interface|enum|module` too .

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
