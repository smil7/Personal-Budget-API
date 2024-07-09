# Personal Budget API

## Project Overview
The Personal Budget API is an api that allows the client (user) to manage their personal finances which is based on a popular principle called envelope budgeting. The API follows a well-known software architeture
style called REST. This architeture based on CRUD which uses HTTP requests to access or use the data.

## Getting started 🚀

### Pre-requisites
You need to have the following libraries downloaded on your local machine:
- Node.js
- npm (Node Package Manager)

### How to begin
1 - Choose HTTPs or SSH to clone the repo to your local machine.
2 - Copy the url and clone the repo to your local machine: `git clone [paste the url]`.
3 - Navigate to the directory you just cloned.
4 - To run the server: `node server.js`

### Testing or Usage
Once the server starts running, you can test the API using a tool called postman. The following requests are implemented in the API:
- To retrieve all data: `GET /api/envelopes`
- To retrieve a single category: `GET /api/envelopes/:categoryId`
- To add a new category: `POST /api/envelopes`
- To pay using one of the envelope's budget (the amount you paid will get subtracted from the budget): `POST /api/envelopes/:categoryId`
- To transfer money from one envelope to the other: `POST /api/envelopes/transfer/:from/:to`
- To update a single envelope's budget: `PUT /api/envelopes/:categoryId`
- To delete a single envelope: `DELETE /api/envelopes/:categoryId`

### Contributions
Please feel free to contribute on this project by pulling a request.

### Future improvements
- Create a frontend that displays envelopes and balances, and allows users to update each envelop balance. You can implement this either as a web app or a mobile app.
- Add an API endpoint allowing user to add a single balance that’s distributed to multiple envelopes.
