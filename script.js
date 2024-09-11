document.getElementById('changeTextButton').addEventListener('click', function() {
    
    const turnText = document.getElementById('turnText');
    
    var changeTextButton = document.getElementById('changeTextButton');

    if (turnText.innerText == "Brett's Turn!") {
        
        turnText.innerText = "Dans's Turn!";
        
    } 
    else {
        
        turnText.innerText = "Brett's Turn!";
        turnText.classList.add('brett-button');
        changeTextButton.classList.add('brett-button');
    }
    
});


