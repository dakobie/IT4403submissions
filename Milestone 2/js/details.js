$.getJSON(url, function (book) {
    let info = book.volumeInfo;

    $("#details").html(`
        <h2>${info.title}</h2>
        <p><strong>Authors:</strong> ${info.authors?.join(", ")}</p>
        <p><strong>Publisher:</strong> ${info.publisher}</p>
        <p>${info.description}</p>
        <img src="${info.imageLinks?.thumbnail}" />
    `);
});