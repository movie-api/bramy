const $ = require("jquery");

let createList = (movies) => {
    $("#main").empty();
    let table = "<h2 id='chart-title'>Movies </h2><span class='glyphicon glyphicon-plus myModal entrance' id='show-add-form' data-target='#add-movie-form' data-toggle='modal'></span>" +

        "<table id='movieTable' class='table table-hover'>" +
        "<thead>" +
            "<tr>" +
                // "<th class='text-center'>ID</th>" +
                "<th>Title</th>" +
                "<th class='text-center'>Rating</th>" +
                "<th>Genre</th>" +
                "<th></th>" +
                "<th></th>" +
            "</tr>" +
        "</thead>";

    movies.forEach(({id, title, rating, genre}) => {
        table += `
        <tbody>
          <tr>
            <!--// <td class="id">${id}</td>-->
            <td class="title text-left">${title}</td>
            <td class="rating">${rating}</td>
            <td class="genre">${genre}</td>
            <td><span class="glyphicon glyphicon-edit myModal entrance" data-id="${id}" data-target="#edit-movie" data-toggle="modal"></span></td>
            <td><span class="glyphicon glyphicon-minus myModal entrance" data-id="${id}" data-target="#delete-movie" data-toggle="modal"></span></td>
          </tr>
        </tbody>
        `;
        console.log(`id#${id} - ${title} - rating: ${rating} - genre: ${genre}`);
    });
    table += `</table>`;
    $("#main").append(table);

};


module.exports = createList;