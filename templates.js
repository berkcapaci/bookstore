function getBookTemplate (book, index){
    console.log(index);
    return `
        <div class="book-card">
            <img src="assets/images/purple-book.svg" alt="Generic Book Photo">
            <h2>${book.name}</h2>
            <div class="book-details">
                <p>Author: ${book.author}</p>
                <p>Price: ${book.price.toFixed(2)} €</p>
                <p>Genre: ${book.genre}</p>
                <p>Published: ${book.publishedYear}</p>
            </div>
            <div class="like-section">
                <p>
                   <span onclick="toggleLike(${index})" >${book.liked ? "❤️" : "🤍"} ${book.likes}</span>
                </p>
            </div>
            <div class="comments-section">
                ${getCommentsTemplate(book.comments)}
            </div>
            <div class="comments-form">
                <input id="nameInput${index}" type="text" placeholder="Your Name">
                <input id="commentInput${index}" type="text" placeholder="Your Comment">
                <button onclick="addComment(${index})"> Add Comment </button>
            </div>
        </div>
        `; 
}

function getCommentsTemplate(comments){
    let commentsHtml = "";
    for (let index = 0; index < comments.length; index++) {
        commentsHtml += `
            <div class="comment">
                <strong>${comments[index].name}</strong>
                <p><i>${comments[index].comment}</i></p>
            </div>
        `
    }
    return commentsHtml;
}