# Getting Started with Pomodoro App in React

This project is a try test on react after the first part of Udemy learning React.

The idea is to create a timer and save the time in a table.

When you click start the timer beggin, when you click stop it save the time spent in a table.

This challenge is great to practice states changes and using props to.

Have a good day ! ⏲️

----------------------------------------------------------------------
The application is composed of 3 components :

- App
- Timer
- TimersTable

The App component is the global rendering component of react with a container and the H1. It retrieves all others components (Timer, TimersTable) by using JSX

Timer manges the start/stop action with a HandleStartTimer function which changes the state with a if/else condition.
It returns a paragraph formated hh:mm:ss and a button to let the user start & stop the timer.

TimersTable is a recap of all timers done.

All Css was made in the GitHub design spirit.
