bookIds.forEach(id => {
    let url = `https://www.googleapis.com/books/v1/volumes/${id}`;

    $.getJSON(url, function (book) {
        let title = book.volumeInfo.title;
        let img = book.volumeInfo.imageLinks?.thumbnail || "";

        $("#bookshelf").append(`
            <div>
                <img src="${img}" />
                <a href="details.html?id=${id}">${title}</a>
            </div>
        `);
    });
});