const $ = require("jquery");

let createList = (movies) => {
    $("#main").empty();
    let table = "<h2 id='chart-title'>Movies </h2><span class='glyphicon glyphicon-plus' id='show-add-form' data-target='#add-movie-form' data-toggle='modal'></span>" +

        "<table id='movieTable'><tr><th class='text-center'>ID</th><th class='text-center'>Title</th><th class='text-center'>Rating</th> <th></th></tr>";

    movies.forEach(({id, title, rating}) => {
        table += `
          <tr>
            <td>${id}</td>
            <td>${title}</td>
            <td>${rating}</td>
            <td><span class="glyphicon glyphicon-edit"></span><span class="glyphicon glyphicon-minus" data-id="${id}" data-target="#delete-movie" data-toggle="modal"></span></td>
          </tr>`;
        console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
    table += `</table>`;
    $("#main").append(table);

};


module.exports = createList;