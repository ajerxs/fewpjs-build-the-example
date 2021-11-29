// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let postHearts = document.querySelectorAll(".like-glyph")

function likePost(e) {
  let heart = e.target;
  mimicServerCall()
  .then(function(serverMessage) {
    alert("Server notified!");
    alert(serverMessage);
    heart.innerText = FULL_HEART;
    heart.classList.add("activated-heart");
  })
  .catch(error => {
    let modal = document.getElementById("modal")
    document.getElementById("modal-message").innerText = "Something messed up."
    modal.classList.remove('hidden'); 
    setTimeout(() => {
      modal.classList.add('hidden')
    }, 3000)
  })
}

for (let glyph of postHearts) {
  glyph.addEventListener("click", likePost);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
