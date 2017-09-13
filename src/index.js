/**
 * es6 modules and imports
 */

import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */

const getMovies = require('./getMovies.js');
getMovies().then((movies) => {
  console.log('Here are all the movies:');
      $("#main").empty();
  movies.forEach(({id, title, rating}) => {
      $("#main").append(`
        <table>
          <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Rating</th>
          </tr>
          <tr>
            <td>${id}</td>
            <td>${title}</td>
            <td>${rating}</td>
          </tr>
        </table>
    `);
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

fetch('https://api.github.com/users').then((response) => {
    const users = response.json().then((users) => {
        users.forEach((user) => {
            // do something with each user object...
        });
    });
});