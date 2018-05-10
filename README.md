# AngularSample

This is a sample project to demonstrate some Angular code.

If you are not familar with Angular code its best to start with app-routing.module.ts.

This shows the routes that can be used in the app.
For example: going to http://localhost:4200/login will display the LoginComponent.

## LoginComponent
This is a basic component to demonstrate binding as well as calling a service.
You will notice two services - LoginService and LoginDevelopmentService. It is decided at runtime which of these to actually instantiate based on a flag in the ConfigService.

The development service is useful during development to mock out the requests and responses to the API. It allows rapid development of the UI without having to deploy a service and make real API calls. I've found this really useful on projects where the API takes a long time to deploy.

## Running the app
To run the app you will need download node (https://nodejs.org) and angular cli (https://cli.angular.io/)
Run 'ng serve' and this will run the app under http://localhost:4200.