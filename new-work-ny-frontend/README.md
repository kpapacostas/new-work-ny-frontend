NEW WORK NY
An application used by dancers and choreographers to network and new works based on project dates, genres, pay scale, etc. Built with React, Redux, JS, Ant Design and CSS.

Status
This project is currently in development. Users can currently create posts and filter by profession.
Functionality in progress:
Stricter authentication
Sort by additional paramters
Ability for users to create profile pages

Installation and Setup Instructions

Clone down backed repository:

https://github.com/kpapacostas/new_work_ny_backend

To start the database server:

rails s

Clone down this repository

- You will need node and yarn installed globally on your machine.

Installation:

macOS:

brew install yarn

For other operating systems, use the following guide by selecting your OS from the dropdown:
https://classic.yarnpkg.com/en/docs/install/#mac-stable

To Start Server:

yarn start

- You will be asked if you want to run on another port since localhost:3000 will be taken by our backend server, type `y`

To Visit App:

localhost:3001

Reflection
This was a passion project built to create a platform for burgening dancers and choreophraphers to create new works easily. In NYC it is incredibly difficult to overcome the hurdles of time, money, competition and anonymity amongst the masses in order to make new work. That lack of organizational and communicative ease leads to very few new pieces ever coming to fruition. This platform is an attempt to bridge that gap and bring eager artists to one communal space.

I have set out to build an app that allows you to both search for current projects and post projects you're looking to staff, and sort according to a variety of parameters that are most relevant to artists in NYC.

I also set out to style a React app implementing a good amount of custom CSS, and CSS Grid. I'd used Semantic and Bootstrap in the past, and felt hindered by their limitations and my own lack of understanding more advanced CSS properties.

Using React Hooks was another big part of wanting to build this app using create-react-app, and find a way to integrate Redux and Hooks as seemlessly as possible as Redux becomes less frequently utilized.
