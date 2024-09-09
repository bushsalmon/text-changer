document.getElementById('change-turn').addEventListener('click', function() {
    var h1 = document.getElementById('turn-text');
    var container = document.getElementById('container');
    
    if (h1.textContent === "Dan's turn") {
        h1.textContent = "Brett's Turn!";
        container.style.backgroundImage = "url('brett.jpeg')"; // Replace with your image path
    } else {
        h1.textContent = "Dan's turn";
        container.style.backgroundImage = "none";
    }
});

