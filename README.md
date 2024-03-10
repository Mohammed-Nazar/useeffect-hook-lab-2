In this activity we will use GitHub Users API to fetch the user’s public information with their username.

This is the API link we will use:
https://api.github.com/users/${username}

You are suppose to update one page and two components:

"page" page: Responsible for fetch operation and state changes in the application.
"Form" component: A search bar to get the user input for GitHub username.
"UserCard" component: A reusable component to display the GitHub user information.

Instructions:
1- In the "page.js" page, we should have two state variables, one for input from the user and second response from the REST API. We need to fetch the user data, every time there is an update to the username. To achieve this, you are going to use useEffect.

2- Develop a function that gets a response from GitHub users API.

3- In the Form.jsx create a state variable and connect it to the input.

4- The UserCard.jsx should receive the user data from the response and just displays it in any chosen format.
