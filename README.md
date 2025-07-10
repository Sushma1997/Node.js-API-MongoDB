# Node.js-API-MongoDB
Technical Challenge from CENTIVO

I separated the code into database.js, user.js and server.js to clearly organize database logic, data models and API routing, promoting maintainability. 

The database connection logic resides in its own module for reusability, while the user.js file defines the schema and exports the model independently. 

Finally the express server in server.js imports both modules and handles routing with proper error checks and age filtering, keeping the app modular and scalable.
