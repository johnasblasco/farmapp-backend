API Documentation

This documentation describes the core modules in the API and their routes: Auth, Farmer, Client, and Delivery.

Core Middleware

The API uses the following middleware:

CORS: Configured to allow requests from the specified origin (env.CORS_ORIGIN).

JSON Body Parsing: Allows the parsing of JSON payloads.

URL Encoding: Allows the handling of URL-encoded data.

Error Handlers: Includes notFoundHandler for 404 responses and errorHandler for general error handling.

Routes

The following routes are used to manage auth, farmer, client, and delivery modules. Each module has its own set of endpoints, organized under specific routes.

Authentication Routes

All authentication-related routes are prefixed with /api/auth.

Method	Route	Description
POST	/login	Login a user and generate JWT token.
POST	/register	Register a new user.
POST	/refresh-token	Refresh an expired JWT token.
Farmer Routes

All routes related to farmers are prefixed with /api/farmer.

Method	Route	Description
GET	/orders	Fetch all orders assigned to the authenticated farmer.
PATCH	/orders/:id/ready	Mark the order as "Ready".
PATCH	/orders/:id/picked-up	Mark the order as "Picked Up".
PATCH	/orders/:id/cancel	Cancel the order.
DELETE	/orders/:id	Delete the order.
GET	/profile	Get the authenticated farmer’s profile.
PATCH	/profile	Update the authenticated farmer’s profile.
Client Routes

All routes related to clients are prefixed with /api/client.

Method	Route	Description
GET	/orders	Fetch all orders for the authenticated client.
PATCH	/orders/:id/ready	Mark the order as "Ready".
PATCH	/orders/:id/picked-up	Mark the order as "Picked Up".
PATCH	/orders/:id/cancel	Cancel the order.
DELETE	/orders/:id	Delete the order.
GET	/profile	Get the authenticated client's profile.
PATCH	/profile	Update the authenticated client's profile.
Delivery Routes

All routes related to deliveries are prefixed with /api/delivery.

Method	Route	Description
GET	/deliveries	Fetch all deliveries assigned to the authenticated rider.
PATCH	/deliveries/:id/assign-rider	Assign a rider to a delivery.
PATCH	/deliveries/:id/status	Update the delivery status (e.g., "In Progress", "Completed").
DELETE	/deliveries/:id	Delete the delivery.
Module Details
Auth Module

The Auth module handles user authentication, including login, registration, and token refreshing.

Auth Controller

Manages the login, registration, and token refreshing logic.

Auth Repository

Handles database operations related to user authentication (e.g., user validation, token storage).

Auth Routes

Defines the routes for login, registration, and token refreshing.

Auth Service

Abstracts the business logic for user authentication.

Farmer Module

The Farmer module handles the management of farmer-related data and actions such as fetching orders, updating order statuses, and managing the farmer's profile.

Farmer Controller

Handles the requests for farmer-related actions like fetching orders, marking orders as ready, or updating the farmer's profile.

Farmer Repository

Contains the database logic for fetching and updating orders and profiles for farmers.

Farmer Routes

Defines the routes for managing orders and farmer profiles.

Farmer Service

Abstracts the business logic and interacts with the repository to manage orders and profiles.

Client Module

The Client module handles the management of client-related data and actions such as fetching orders, updating order statuses, and managing the client's profile.

Client Controller

Handles the requests for client-relaAPI Documentation
==================

This documentation describes the core modules in the API and their routes: **Auth**, **Farmer**, **Client**, and **Delivery**.

Core Middleware
---------------

The API uses the following middleware:

*   **CORS**: Configured to allow requests from the specified origin (`env.CORS_ORIGIN`).
*   **JSON Body Parsing**: Allows the parsing of JSON payloads.
*   **URL Encoding**: Allows the handling of URL-encoded data.
*   **Error Handlers**: Includes `notFoundHandler` for 404 responses and `errorHandler` for general error handling.

Routes
------

The following routes are used to manage auth, farmer, client, and delivery modules. Each module has its own set of endpoints, organized under specific routes.

### Authentication Routes

All authentication-related routes are prefixed with `/api/auth`.

| Method | Route             | Description                          |
|--------|-------------------|--------------------------------------|
| POST   | `/login`          | Login a user and generate JWT token. |
| POST   | `/register`       | Register a new user.                 |
| POST   | `/refresh-token`  | Refresh an expired JWT token.        |

### Farmer Routes

All routes related to farmers are prefixed with `/api/farmer`.

| Method | Route                    | Description                                     |
|--------|--------------------------|-------------------------------------------------|
| GET    | `/orders`                | Fetch all orders assigned to the authenticated farmer. |
| PATCH  | `/orders/:id/ready`      | Mark the order as "Ready".                      |
| PATCH  | `/orders/:id/picked-up`  | Mark the order as "Picked Up".                  |
| PATCH  | `/orders/:id/cancel`     | Cancel the order.                               |
| DELETE | `/orders/:id`            | Delete the order.                               |
| GET    | `/profile`               | Get the authenticated farmer’s profile.         |
| PATCH  | `/profile`               | Update the authenticated farmer’s profile.      |

### Client Routes

All routes related to clients are prefixed with `/api/client`.

| Method | Route                    | Description                                     |
|--------|--------------------------|-------------------------------------------------|
| GET    | `/orders`                | Fetch all orders for the authenticated client.  |
| PATCH  | `/orders/:id/ready`      | Mark the order as "Ready".                      |
| PATCH  | `/orders/:id/picked-up`  | Mark the order as "Picked Up".                  |
| PATCH  | `/orders/:id/cancel`     | Cancel the order.                               |
| DELETE | `/orders/:id`            | Delete the order.                               |
| GET    | `/profile`               | Get the authenticated client's profile.         |
| PATCH  | `/profile`               | Update the authenticated client's profile.      |

### Delivery Routes

All routes related to deliveries are prefixed with `/api/delivery`.

| Method | Route                         | Description                                            |
|--------|-------------------------------|--------------------------------------------------------|
| GET    | `/deliveries`                 | Fetch all deliveries assigned to the authenticated rider. |
| PATCH  | `/deliveries/:id/assign-rider`| Assign a rider to a delivery.                          |
| PATCH  | `/deliveries/:id/status`      | Update the delivery status (e.g., "In Progress", "Completed"). |
| DELETE | `/deliveries/:id`             | Delete the delivery.                                   |

Module Details
--------------

### Auth Module

The Auth module handles user authentication, including login, registration, and token refreshing.

*   **Auth Controller**: Manages the login, registration, and token refreshing logic.
*   **Auth Repository**: Handles database operations related to user authentication (e.g., user validation, token storage).
*   **Auth Routes**: Defines the routes for login, registration, and token refreshing.
*   **Auth Service**: Abstracts the business logic for user authentication.

### Farmer Module

The Farmer module handles the management of farmer-related data and actions such as fetching orders, updating order statuses, and managing the farmer's profile.

*   **Farmer Controller**: Handles the requests for farmer-related actions like fetching orders, marking orders as ready, or updating the farmer's profile.
*   **Farmer Repository**: Contains the database logic for fetching and updating orders and profiles for farmers.
*   **Farmer Routes**: Defines the routes for managing orders and farmer profiles.
*   **Farmer Service**: Abstracts the business logic and interacts with the repository to manage orders and profiles.

### Client Module

The Client module handles the management of client-related data and actions such as fetching orders, updating order statuses, and managing the client's profile.

*   **Client Controller**: Handles the requests for client-related actions, including managing orders and profiles.
*   **Client Repository**: Contains the database logic for fetching and updating orders and profiles for clients.
*   **Client Routes**: Defines the routes for managing client orders and profiles.
*   **Client Service**: Abstracts the business logic for managing client orders and profiles.

### Delivery Module

The Delivery module handles the management of deliveries, including assigning riders to deliveries and updating the status of deliveries.

*   **Delivery Controller**: Handles requests for delivery-related actions, such as assigning riders and updating delivery statuses.
*   **Delivery Repository**: Contains the database logic for managing deliveries and updating statuses.
*   **Delivery Routes**: Defines the routes for managing deliveries, including assigning riders and updating statuses.
*   **Delivery Service**: Abstracts the business logic for managing deliveries.ted actions, including managing orders and profiles.

Client Repository

Contains the database logic for fetching and updating orders and profiles for clients.

Client Routes

Defines the routes for managing client orders and profiles.

Client Service

Abstracts the business logic for managing client orders and profiles.

Delivery Module

The Delivery module handles the management of deliveries, including assigning riders to deliveries and updating the status of deliveries.

Delivery Controller

Handles requests for delivery-related actions, such as assigning riders and updating delivery statuses.

Delivery Repository

Contains the database logic for managing deliveries and updating statuses.

Delivery Routes

Defines the routes for managing deliveries, including assigning riders and updating statuses.

Delivery Service

Abstracts the business logic for managing deliveries.