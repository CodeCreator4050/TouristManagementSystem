Tourist Management System
Overview
The Tourist Management System is a web-based application designed to manage tourist attractions, visitors, and reviews. It provides features to handle CRUD operations for attractions, visitors, and reviews while maintaining robust business logic and validations to ensure data integrity.

Features
1. Attractions Management
Add Attractions: Create new tourist attractions by providing details such as name, location, and entry fee.
Retrieve Attractions: Fetch all available attractions or view the top-rated attractions.
Validation Rules:
Entry fee must be a non-negative number.
Ratings are calculated automatically and must stay between 0 and 5.
2. Visitors Management
Register Visitors: Add new visitors by entering their name, email, and visited attractions.
Visitor Activity: Fetch a list of visitors along with the count of attractions they have reviewed.
Validation Rules:
Email must be unique and in a valid format.
Visitors can only review attractions they have visited.
3. Reviews Management
Post Reviews: Visitors can post reviews for attractions, including a score and an optional comment.
Update Ratings: When a new review is added, the average score is recalculated and updated for the related attraction.
Validation Rules:
Score must be between 1 and 5.
A visitor cannot review the same attraction more than once.
4. Custom Endpoints
Top Rated Attractions: /api/attractions/toprated
Returns the top 5 attractions with the highest average ratings.
Visitor Activity: /api/visitors/activity
Lists visitors and the count of attractions they have reviewed.
API Endpoints
The application exposes RESTful APIs to interact with the backend services. Below are the key endpoints:

Attractions
GET /api/attractions: Retrieve all attractions.
POST /api/attractions: Add a new attraction.
GET /api/attractions/toprated: Fetch the top 5 rated attractions.
Visitors
POST /api/visitors: Register a new visitor.
GET /api/visitors/activity: Retrieve visitors and their activity.
Reviews
POST /api/reviews: Add a review for an attraction.
Technology Stack
Backend: Node.js with Express.js
Database: MongoDB with Mongoose ORM
Frontend: HTML, CSS, and JavaScript
Validation: Business logic and validation using Mongoose schemas and indexes.
Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/your-repo/tourist-management.git
cd tourist-management
Install Dependencies:

bash
Copy code
npm install
Start MongoDB: Make sure MongoDB is running locally or provide a valid connection string for a remote database.

Run the Server:

bash
Copy code
npm start
Access the Application:

Open http://localhost:3000 in your browser to access the frontend.
Use Postman or similar tools to test API endpoints.
Validations
Unique constraints for email and visitor-attraction reviews.
Ratings and scores are strictly within valid ranges.
Proper format validation for emails.
Enhancements
Modular codebase with separate files for models, routes, and controllers.
Reusable business logic with clear error handling.
Frontend integration with the backend using RESTful APIs.