document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }
    
    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return;
    }
    
    alert("Message Sent!");
});

async function loadPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    let posts = await response.json();
    let postsHTML = "";
    posts.forEach(post => {
        postsHTML += `<div class="p-4 bg-gray-200 rounded shadow">
            <h3 class="text-xl font-bold">${post.title}</h3>
            <p>${post.body}</p>
        </div>`;
    });
    document.getElementById("posts").innerHTML = postsHTML;
}
loadPosts();