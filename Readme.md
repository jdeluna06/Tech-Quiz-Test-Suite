# Tech Quiz Test Suite

## Introduction

The Tech Quiz Test Suite project focuses on ensuring the reliability and robustness of the Tech Quiz application through comprehensive testing using Cypress. This application, built with the MERN stack (MongoDB, Express.js, React, Node.js), allows users to take a quiz of ten random tech-related questions and view their final score. By enhancing this codebase with Cypress, we add both component and end-to-end testing to validate user interactions and app performance.


## Table of Contents

- [Tech Quiz Test Suite](#tech-quiz-test-suite)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [User Story](#user-story)
  - [Installation](#installation)
  - [Walkthrough Video:\*\*](#walkthrough-video)
  - [Usage](#usage)
  - [Testing](#testing)
    - [Component Testing:](#component-testing)
  - [Credits](#credits)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
- [](#)

## Features

- **Tech Quiz Functionality:**

- Start a tech quiz with 10 random questions.
- Answer multiple-choice questions and receive immediate feedback.
- View final score at the end of the quiz.
- Option to retake the quiz after completion.
  
- **Component Testing:**
- Validates individual React components, ensuring each component functions correctly in isolation.
- Includes tests for the Quiz Component, verifying correct display of questions, answers, and score calculation.

- **End-to-End Testing:**
- Simulates user interactions with the app from start to finish.
- Tests the quiz flow from starting the quiz, answering questions, to viewing and resetting the score.
- Verifies that users can take the quiz smoothly without errors or disruptions.
  
- **User-Friendly Design:**
- Intuitive layout for easy navigation through the quiz.
- Clear display of questions and options with accessible design considerations.

- **Detailed Reporting with Cypress:**
- Test outcomes and performance metrics are displayed in a user-friendly Cypress interface.
- Detailed reports help identify and address potential issues quickly.

- **Easy Setup and Configuration:**
- Quick setup for testing with Cypress as a development dependency.
- Customizable configurations to suit different development environments and testing needs.
  
## User Story

AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills

## Installation

1. **Clone the Repository:**
   https://github.com/jdeluna06/Tech-Quiz-Test-Suite

2. **Navigate to the project directory:**
cd Tech-Quiz-Test-Suite

3. **Install Dependencies:**
npm install

4. **Install Cypress: Add Cypress as a development dependency::**
npm install cypress --save-dev

5. **Configure Cypress:**
Set up Cypress for both component and end-to-end testing according to your project requirements.
Define the test structure and specify the testing environment in cypress.json or within individual Cypress test files as needed.

6. **Start the development server:**
npm start

## Walkthrough Video:**
   For a detailed walkthrough of how the application works, please refer to the video linked below:
   https://drive.google.com/file/d/10dKJWzIkSE3dFn7m613EL9dAtr9RUYYf/view?usp=sharing
   
## Usage
After installation, you can use Cypress to run the tests:

1. **Open Cypress Test Runner:**
npx cypress open - This will open the Cypress dashboard, where you can select and run your tests interactively.

2. **Run All Tests in CLI:**
npx cypress run -Use this command to run all tests in a headless browser from the command line.

## Testing
This project uses Cypress for two types of testing:

### Component Testing:

A component test verifies that individual parts of the app work as expected.
In this case, a component test is created specifically for the Quiz Component to ensure that it displays and functions correctly in isolation.
End-to-End (E2E) Testing:

E2E tests simulate real user interactions to verify the app’s overall flow and behavior.
The Quiz Component has a comprehensive E2E test that starts the quiz, processes user answers, ends the quiz, and displays the score.

## Credits
- **Joel De Luna** - Developer

## Technologies Used
MongoDB - Database for storing quiz questions and user data.
Express.js - Backend server and API.
React - Frontend library for building the user interface.
Node.js - JavaScript runtime environment.
Cypress - Testing framework for component and end-to-end testing.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.
# 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
