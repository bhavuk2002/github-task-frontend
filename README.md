# Frontend

This is the frontend for the web application, built with **React**, **Vite**, **Tailwind CSS**, **React Hooks** and **React Router**. The app is designed to provide a smooth and efficient user experience for interacting with the backend API, displaying user information, repositories, followers, and more.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern build tool that provides a fast and optimized development experience.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.
- **Axios**: A promise-based HTTP client for making requests to the backend API.

## Features

- **Search Users**: Search for GitHub users and display basic information.
- **User Details**: View detailed information about a specific user.
- **Repo Details**: View details about a repository, including issues and pull requests.
- **Followers**: View a list of users who are following a specific user.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhavuk2002/github-task-frontend.git
   cd frontend
   ```
2. **Install dependencies**: Make sure you have Node.js installed. Then, run the following command to install the necessary dependencies:

```bash
npm install
```

## Development

Make sure to run backend system locally, first.
To start the development server and view the application locally, run:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default browser at http://localhost:5173.

## Build

To build the application for production, run:

```bash
npm run build
```

This will generate the optimized files in the dist folder.

## Preview

After building the project, you can preview it by running:

```bash
npm run preview
```

This will serve the built project on http://localhost:4173.

## Routing Overview

### Pages and Routes

The application uses React Router to handle routing. Here are the available routes:

- Home (`/`): Displays a search bar for searching users.
- User Details (`/user/:username`): Displays detailed information about a specific user.
- Repo Details (`/repo/:repoFullName`): Displays detailed information about a repository.
- Followers (`/followers/:username`): Displays the list of followers for a specific user.

### Would love your review and feedback. Happy Coding.
