# Contact Management

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. Make sure you build using the correct CLI version if you were using the global `ng` & reference the right [API version](https://v7.angular.io/api).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Requirements

- Create a login page to authenticate the user for further actions.
  - There should be a simulated authentication service to grant/deny the access. Hardcoded username/password is fine.
  - There's no need to retain the session, e.g refresh the page will redirect the user back to the login page.
- Once the users log in, they should be able to see the list of users, which could either be presented within a paged/pageless grid/list.
  - Simulation data has been provided, `CmContactService` will provide it.
  - Add more endpoint to `CmContactService` as needed.
- Users should be able to edit, revert & save an existing contact, or add a new contact.
  - Persistence is not required, the simulation data will not be written, any changes may be reverted on page refresh.
  - Form fields could simply use `<input>`, `<select>` etc. from standard HTML5 tags.
- Users should be able to logout & be redirected to login.

## Bonus

- To create valid test cases on those created components. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Apply some simple styles to the application, could consider using [bootstrap](https://www.npmjs.com/package/bootstrap).
- Session management to allow the authenticated user to stay even on page refresh.
- Different form components, e.g date picker for birthday, dropdown with typeahead support for friends etc. when adding/editing a contact.
- Persistence of the data on save of the contact so it stays even on page refresh.

