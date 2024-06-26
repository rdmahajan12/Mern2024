express.Router - It is a mini express application without all the server configurations but with the ability to define routes, middleware, and even have it's own set of route handlers. It allows you to modularize your routes and middleware to keep your code organized and maintainable.

controller - Controllers are typically used to process incoming requests, interact with models, and send responses back to clients. They help organize your application by separating concerns and following the MVC design pattern.

Schema - Defines the structure of documents within a collection. It specifies the fields, their types, and additional constraints or validations.

Model - Acts as a higher level abstraction that interacts with the database based on the defined schema. It represents the collection provides an interface for querying, creating, updating, and deleting documents in that collection. Models are created from schemas and enable you to work with mongodb data in a more structured manner in your application.

JWT - It is used for authentication and authorization in web applications. It not stored in the database along with other user details. Instead, they are issued by the server during the authentication process and stored on the client-side for later use.
a. Authentication - Verifying the identity of a user or client.
b. Authorization - Determining what actions a user or client is allowed to perform.

<BrowserRouter> - It stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

CORS - (Cross Origin Resource Sharing) It is a security feature implemented by browser's to restrict webpages from making requests to a different domain than the one that served the webpage. In the context of MERN stack application, you might encounter cors issue when the FE and BE are hosted on different domains.

Context hook - It allows you to shares state data between components without explicitly passing the data through each level of the component tree. It's a way to manage global state or share the data between component that are not directly connected.

req Object - It represents the HTTP requests and has properties for the request query string, parameters, body and HTTP headers.
