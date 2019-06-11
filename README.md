# State-Parks-Challenge
```
Coding challenge for a potential position at Ridecell
```

### Summary

```
This application displays the state and national parks in Hawaii as Markers.
The application is made using React.js, Express, and MySQL.
The map is created by utilizing the google maps api.
The database is made from a schema, where pertinent information was found by myself.
Clicking on a marker will show you this information for the specific park.
You can also search the parks by name or by activities in the park.
The filtered parks will be the only remaining markers on the page.
```

### Requirements

Node 10.15.0
Nodemon
Webpack
MySQL 5.7

### Usage

```
1. Fork and clone the repository
2. In the terminal and within the project directory run 'npm install'
3. Follow the directions in config.example.js, in order to set-up your database config file.
4. If you have a MySQL password, in the terminal, run 'mysql -u root -p < schema.sql' and enter your password
otherwise run 'mysql -u root < schema.sql'
5. In a separate terminal run 'npm run react-dev'
6. In a separate terminal run 'npm start'
7. Go to http://localhost:8888
```