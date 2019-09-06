# Contact Management

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. Make sure you build using the correct CLI version if you were using the global `ng` & reference the right [API version](https://v7.angular.io/api).

## Setup

Clone the repo or fork it into your own account. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Requirements

- Create a login page to authenticate the user for further actions.
  - There should be a simulated authentication service to grant/deny the access. Hardcoded username/password is fine.
  - There's no need to retain the session, e.g. refreshing the page will redirect the user back to the login page.
- Once the users log in, they should be able to see the list of users, which could either be presented within a paged/pageless grid/list.
  - Simulation data has been provided, `CmContactService` will provide it.
  - Add more endpoints to `CmContactService` as needed.
- Users should be able to edit, revert & save an existing contact, and add a new contact.
  - Persistence is not required, the simulation data will not be written, any changes will be reverted on page refresh.
  - Form fields could simply use `<input>`, `<select>` etc. from standard HTML5 tags.
- Users should be able to logout & be redirected to login.

## Bonus

- Create valid test cases on the created components. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Apply some simple styles to the application, could consider using [bootstrap](https://www.npmjs.com/package/bootstrap).
- Add Session management to allow the authenticated user to stay even on page refresh.
- Add different form components for different types of data, e.g date picker for birthday, dropdown with typeahead support for friends etc. when adding/editing a contact.
- Persist data on save.

## Completion

Once completed, you can either send the link of the git repo or simply zip the project & send via email. A fully functioning app is ideal and a review session will be held to review the code.

A maximum of 3 days is allowed to finish the project upon receiving the initial code.
