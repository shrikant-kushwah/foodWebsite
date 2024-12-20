# Food Website
Welcome to our Food Website Project, where we aim to create a user-friendly and feature-rich platform for discovering and exploring restaurants. Our project is built with modern tools and technologies like React, Redux Toolkit, and Parcel to deliver a seamless experience. Here's an overview of our journey and the key components of our application:


# Key Features of the Application

## Header:
Includes a logo and navigation items for easy site exploration.

## Body:
Search: A powerful search bar to find your favorite restaurants quickly.
Restaurant Container: Displays a list of restaurant cards with the following details:
- Restaurant Image
- Name, Star Rating, Cuisine
- Delivery Time

## Footer:
Contains important information like copyright, links, address, and contact details.


# Routing
We leverage Client-Side Routing with React Router to provide smooth navigation and faster load times, ensuring an optimal user experience.


# State Management with Redux Toolkit
To maintain scalability and performance, we use Redux Toolkit for state management:
- Store: Centralized state management for the entire app.
- Slices: Modular structure with features like cartSlice for cart management.
- Actions & Selectors: Simplify data flow and state access.



# Testing & Quality Assurance
Our development approach includes robust testing to ensure high-quality code:
- Unit Testing: Testing individual components and functions.
- Integration Testing: Ensuring modules work together as expected.
- End-to-End (e2e) Testing: Validating the entire user flow for reliability.

We have set up testing tools including:
- React Testing Library and Jest for unit and integration tests.
- Babel Configuration to handle JSX in test cases.
- Parcel Configuration to optimize the build process.


/**
 * Header
 *  - Logo
 *   -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    - RestaurantCard
 *       - Img
 *       - Name of Res,Star Rating, Cuisine,Delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */



# Setting up  Testing in Our app
- Install React Testing library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation.
- Jest Configuration
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react => to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
