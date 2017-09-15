const $ = require("jquery");

let createList = (movies) => {
    $("#main").empty();
    let table = "<h2 id='chart-title'>Movies </h2><span class='glyphicon glyphicon-plus' id='show-add-form' data-target='#add-movie-form' data-toggle='modal'></span>" +

        "<table id='movieTable' class='table table-hover'><thead><tr><th class='text-center'>ID</th><th>Title</th><th class='text-center'>Rating</th><th></th><th></th></tr></thead>";

    movies.forEach(({id, title, rating}) => {
        table += `
        <tbody>
          <tr>
            <td class="id">${id}</td>
            <td class="title text-left">${title}</td>
            <td class="rating">${rating}</td>
            <td><span class="glyphicon glyphicon-edit" data-id="${id}" data-target="#edit-movie" data-toggle="modal"></span></td>
            <td><span class="glyphicon glyphicon-minus" data-id="${id}" data-target="#delete-movie" data-toggle="modal"></span></td>
          </tr>
        </tbody>
        `;
        console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
    table += `</table>`;
    $("#main").append(table);

};


module.exports = createList;