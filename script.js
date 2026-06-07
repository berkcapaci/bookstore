const bookContainer = document.getElementById("bookContainer");

function renderBooks(){
    bookContainer.innerHTML = "";
    for (let index = 0 ; index < books.length ; index++){
        bookContainer.innerHTML += getBookTemplate(books[index], index);
    }
}
renderBooks();

function toggleLike(index){
    if (books[index].liked){
        books[index].likes--;
    } else {
        books[index].likes++;
    }
    books[index].liked = !books[index].liked;
    console.log(books[index].liked);
    renderBooks();
}

function addComment(index){
    const nameInput = document.getElementById(`nameInput${index}`);
    const commentInput = document.getElementById(`commentInput${index}`);
    if (
        nameInput.value.trim() ==="" ||
        commentInput.value.trim() ===""
        ){ return }
    const newComment = {
        name : nameInput.value,
        comment : commentInput.value
    };
    books[index].comments.push(newComment);
    renderBooks();
}