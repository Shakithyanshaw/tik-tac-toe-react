# 🎮 Tic Tac Toe Game – React

A simple and interactive Tic Tac Toe game built using React.  
This project demonstrates core React concepts like components, props, state management, and conditional rendering.

---

## 🚀 Project Overview

This is a two-player Tic Tac Toe game where players take turns marking X and O on a 3x3 grid.  
The game automatically detects the winner or declares a draw when all squares are filled.

---

## 🛠 Tech Stack

- React 18
- Create React App
- JavaScript (ES6+)
- HTML5
- CSS3

---

## ✨ Features

- 🎲 Two-player mode (Player X vs Player O)
- 🔄 Turn indicator (Shows current player)
- 🏆 Automatic winner detection
- 🤝 Draw detection
- 🔁 Restart / Reset game option
- ⚡ Fast and responsive UI
- 🧠 Clean state management using React hooks

---

## 🧠 Game Logic

- The board consists of 9 squares.
- Each square updates based on the current player.
- The app checks for 8 possible winning combinations:
  - 3 rows
  - 3 columns
  - 2 diagonals
- When a winner is found, the game stops.
- If all squares are filled without a winner → it's a draw.

---

## 📸 How It Works

1. Player X starts first.
2. Players alternate turns.
3. The game highlights the winner (if implemented).
4. Users can reset the game anytime.

---

## 🎯 Learning Objectives

This project helped practice:

- Functional components
- useState hook
- Conditional rendering
- Event handling in React
- Component reusability
- Basic game logic implementation

---

## 🌍 Future Improvements

- Add score tracking system
- Add AI (Single Player mode)
- Add sound effects
- Add animations
- Improve UI design
- Add dark mode

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
