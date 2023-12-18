# React Router Project

This project is a simple React application utilizing the `react-router-dom` library to implement client-side routing. The application consists of multiple components, including pages for the Home, About, Contact, and dynamic routing for User profiles. Additionally, there's a GitHub component that fetches and displays GitHub user information.

## Project Structure

The project is organized with the following components:

- **App.jsx**: The main entry point for the React application.
- **Layout.jsx**: The layout component that includes the Header, Footer, and dynamic content using the React Router Outlet.
- **components**:
  - **Home.jsx**: Home page component.
  - **About.jsx**: About page component.
  - **Contact.jsx**: Contact page component.
  - **User.jsx**: User page component with dynamic routing.
  - **Github.jsx**: GitHub component for displaying GitHub user information.
  - **Header.jsx**: Header component.
  - **Footer.jsx**: Footer component.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/sarthakbhardwaj27/reactRouter.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## React Router Configuration

The project uses the `createBrowserRouter` function from `react-router-dom` to define routes. The routes are created in a declarative manner, making it easy to understand the application's navigation structure.

Dynamic routing is implemented for the `User` component, allowing navigation to user profiles with specific IDs.

The GitHub component (`Github.jsx`) fetches and displays information from the GitHub API.

## Components

- **Header**: The top navigation bar.
- **Footer**: The bottom footer section.
- **Layout**: The overall layout component that includes the Header, Footer, and dynamic content using the React Router Outlet.
- **Home, About, Contact, User, Github**: Page components that are dynamically rendered based on the current route.
