$("#searchBtn").click(function () {
    let query = $("#searchInput").val();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`;

    $.getJSON(url, function (data) {
        displayResults(data.items);
    });
});

function displayResults(books) {
    $("#results").empty();

    books.forEach(book => {
        let title = book.volumeInfo.title;
        let img = book.volumeInfo.imageLinks?.thumbnail || "";
        let id = book.id;

        $("#results").append(`
            <div>
                <img src="${img}" />
                <a href="details.html?id=${id}">${title}</a>
            </div>
        `);
    });
}