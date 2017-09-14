/**
 * es6 modules and imports
 */

import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const getMovies = require('./getMovies.js');
const modalForms = require('./modal.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
      $("#main").empty();
      let table = "<h2 id='title'>Movies </h2><span class='glyphicon glyphicon-plus'></span><table><tr><th>ID</th><th>Title</th><th>Rating</th></tr>";

      movies.forEach(({id, title, rating}) => {
          table += `
          <tr>
            <td>${id}</td>
            <td>${title}</td>
            <td>${rating}</td>
          </tr>`;
    console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
        table += `</table>`;
    $("#main").append(table);
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