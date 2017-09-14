const $ = require("jquery");

function modalForms () {
    $('#show-add-form').click(function () {
        console.log("Plus");
        showModal("add-movie-form");
    });
}

function showModal(modalName) {
    let modal = $("#" + modalName);
    modal.show();
}

module.exports = {modalForms, showModal};


