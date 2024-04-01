## Book Review Project
### Table of Contents

-   [Introduction](#introduction)
-   [Frontend](#frontend-setup)
-   [Backend](#backend-setup)
-   [License](#license)


## Introduction

Create web application that allows users to Browse, search and Review Books. The application should have a user-friendly interface and a backend API to handle data storage and retrieval.


### Instructions

##### Iam used my own/local database for this book review project.

##### If you Want my data please don't hesitate to reach out to me.
 

## Frontend-setup
#### Create React Application:

Create React Application:

- Open your terminal or command prompt.
- Navigate to the directory where you want to create your React application.

1. Run the following command to create a new React app:

```bash
npx create-react-app frontend
```

- Navigate into the frontend directory:

```bash
cd frontend
```
2. Install Bootstrap to style your components:

```bash
npm install bootstrap
```

3. Create Navbar Component:
- Create a new file named Navbar.js in the src/components directory.
- Implement your Navbar component using Bootstrap for styling.
4. Create Book List Component:
- Create a new file named BookList.js in the src/components directory.
- Implement your Book List component to display a list of books.
- Use Bootstrap to style the book list.
5. Fetch Data from Backend:
- Use Fetch API to make HTTP GET requests to your backend API endpoint that provides book data.
- Update the Booklist component to fetch the data when it mounts.
- Set the fetched data in the component state.
6. Display Book Information:
- Use the data fetched from the backend to display book information such as title, author, description, and user reviews in the Booklist component.
- You can use mapping to iterate over the array of books and render each book's information.
- Implement the Book Details component to display complete information about a selected book, including its title, author, description, and user reviews.

7. Styling with CSS:
- Create a CSS file named styles.css in the src directory.
- Write CSS rules to style your components as desired.
- Import the CSS file into your components where necessary.
8. Integrate Components into App.js:
- Open the App.js file in the src directory.
- Import the Navbar and Booklist components.
- Replace the default content with the Navbar component at the top and the Booklist component below it.
9. Run the Application:
- Start the development server to see your changes:

```bash
npm start
```
10. View the Application:
- Open a web browser and navigate to http://localhost:3000 to view your React application.
- You should see the Navbar at the top and the Book List below it, displaying the books' information fetched from the backend.
11. Refine and Test:
- Refine the styling and functionality of your components as needed.
- Test the application thoroughly to ensure all features work as expected.

12. Searching Functionalities
- Modify the Booklist component to include a search input field.
- Implement a function to handle changes in the search input field.
- Filter the list of books based on the search query entered by the user.
- Update the component state with the filtered list of books.
- Display the filtered list of books on the page.

## Backend-setup

1. Set Up MongoDB:

- Install MongoDB on your system or use a cloud-based MongoDB service like MongoDB Atlas.
- Create a new MongoDB database for your application.

```bash
use Book-app
```

2. Initialize Node.js Server:
- Create a new directory for your project.
- Run npm init to initialize a new Node.js project.
- Install necessary dependencies like Express.js, Mongoose, and any other required packages.
- Set up a basic Express.js server to handle HTTP requests.
3. Create Models:
- Define Mongoose models for books and user reviews.
- Book Title, Book Auther, Book Description, Username, user rating, user comment
- Set up relationships between book and review models (e.g., one-to-many).

```bash
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    BookTitle: {
        type: String,
        required: true
    },
    BookAuthor: {
        type: String,
        required: true
    },
    BookDesc: {
        type: String,
        required: true
    },
    BookCover: {
        type: String,
        required: true
    },
    Bookreviews: [{
        user: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }]
});
```

4. Implement API Endpoints:
- Create API endpoints to handle CRUD operations for books and reviews (e.g., GET /books, POST /books, POST /books/:id/reviews, etc.).
- Implement logic to interact with the MongoDB database using Mongoose.
5. Handle Authentication (Optional):
- Implement user authentication if you want to restrict certain endpoints or allow users to submit reviews only when logged in.
6. Test API Endpoints:
- Use tools like Postman or curl to test your API endpoints and ensure they work as expected.
7. Run the Backend Server:
- Start your Node.js server using npm start or node server.js.
- Ensure that your backend server is running and accessible.

# Running the Full Application
1. Start Backend Server:
- Ensure your MongoDB server is running.
- Start your Node.js backend server.
- Start Frontend Development Server:
2. Navigate to your React app directory.
- Start your React development server.
3. Access the Application:
- Open your web browser and go to the URL where your frontend app is running.
- You should now be able to browse, search, and review books using the web application.


## License

This project is licensed under the MIT License.
