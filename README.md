# Getting Started with Pomodoro App in React

This project is a try test on react after the first part of Udemy learning React.

The idea is to create a timer, pushing tasks and descriptions in a table when saving.

When you click start the timer beggin, when you click stop it save the time spent in a table with the task's name and description.

You can also search in the saved tasks one of them by name the form.

This challenge is great to practice states changes and using props to.

Have a good day ! ⏲️

----------------------------------------------------------------------
The application is composed of independant components.

The App component is the global rendering component of react with a container and the H1. It retrieves all others components (Timer, TimersTable) by using JSX

Timer manages the start/stop action with a HandleStartTimer function which changes the state with a if/else condition.
It returns a paragraph formated hh:mm:ss and a button to let the user start & stop the timer.

TimersTable is a recap of all timers done.

All Css was made in the GitHub design spirit grean colored.

Next step : Trying to make a colour theme selector to switch between 3 color themes (green is state 0, adding orange and purple colors)

----------------------------------------------------------------------
Oh ! One more thing ... 😅.

You wanna try it ? Here are the steps :

1-Clone the repository

2-In root project folder launch in your terminal : ```npm install``` (This will install all libraries React and necessary dependencies)

3-Once install finished, launch the command line ```npm start``` in your terminal.

4-In your web browser call the url : ```http://localhost:3000```

You should access to the project. 🚀

Enjoy !
