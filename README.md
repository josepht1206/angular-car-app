## Write Up Explanation 

I have built an Angular Web Application based on what I have learnt through the training materials. The app that I have built is a simple Car App which will contain a Google Search Iframe on the first page, and the users are able to access to the dashboard and look for the car details after they are authorized. I have implement firebase database to authenticate the users. As a result, the users can register an account through the app, and login with the registered account to proceed with more features. The features including navigating back to the Google Search Iframe if desired, check the profile details, change the password for login, see the available car in a list, and see the car detail in seperated page. 

## To Get Started  

There might be some conflicts for the versioning and dependencies. Therefore, here is some guide to launch the app.

1. Pull the latest code 
2. npm install --force (you might need to include --force to install the dependencies)
3. ng serve -- open (to run and open the app in the browser)

NOTE: You might need to install the later version of NVM to run the app

FOR YOUR REFERENCE (VERSIONING):

Angular CLI: 16.0.1
Node: 18.16.0
Package Manager: npm 9.6.6
OS: win32 x64

Angular: 16.0.1
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.1
@angular-devkit/build-angular   16.0.1
@angular-devkit/core            16.0.1
@angular-devkit/schematics      16.0.1
@angular/fire                   7.5.0
@schematics/angular             16.0.1
rxjs                            7.8.1
typescript                      5.0.4

# CarApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Firebase
https://console.firebase.google.com/u/1/project/car-app-c49d8/authentication/users

## Firebase reference
https://firebase.google.com/docs/reference/rest/auth/#section-change-password

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
