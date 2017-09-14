

function modalForms () => { `<div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title">Add Movie</h4>
    </div>
    <div class="modal-body">
        <form method='POST' action='http://localhost:1313/">
            <div>
                <label for="title">Title</label>
                <input id="title" name="title" type="text" placeholder="Insert movie title here">
            </div>
            <div>
                <label for="rating">Rating</label>
                <select id="rating" name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </div>
    </div>
    </div>
    </div>`
}


    module.exports = modalForms;
};

