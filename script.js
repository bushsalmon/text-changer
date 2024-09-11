document.getElementById('changeTextButton').addEventListener('click', function() {
    const turnText = document.getElementById('turnText');
    if (turnText.innerText == "Brett's Turn!") {
        turnText.innerText = "Dans's Turn!";
    } else {
    turnText.innerText = "Brett's Turn!";
    }
});


