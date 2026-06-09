function getBookTemplate (book, index){
    return `
        <div class="book-card" id="book${index}">
            <img src="assets/images/purple-book.svg" alt="Generic Book Photo">
            <h2>${book.name}</h2>
            <div class="book-details">
                <p>Author: ${book.author}</p>
                <p>Price: ${book.price.toFixed(2)} €</p>
                <p>Genre: ${book.genre}</p>
                <p>Published: ${book.publishedYear}</p>
            </div>
            <div class="like-section" id="likeSection${index}">
                ${getLikeTemplate(book, index)}
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

function getLikeTemplate(book, index){
    return `
        <p>
            <span onclick="toggleLike(${index})" >
            ${book.liked ? "❤️" : "🤍"} ${book.likes}
            </span>
        </p>
    `
}

function getCommentsTemplate(comments){
    if (comments.length === 0){
    return `
        <div class="comment">
            <p>No comments yet.</p>
        </div>
    `;
    }
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