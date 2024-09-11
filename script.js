document.getElementById('changeTextButton').addEventListener('click', function() {
    
    const turnText = document.getElementById('turnText');
    var changeTextButton = document.getElementById('changeTextButton');
    var headingText = document.getElementById('headingText');
    var descriptionText = document.getElementById('descriptionText');
    
    if (turnText.innerText == "Brett's Turn!") {
        
        turnText.innerText = "Dans's Turn!";
        
    } 
    else {
        
        turnText.innerText = "Brett's Turn!";
        
        descriptionText.style.color = "red";
        
        //This class adding doesn't seem to work
        turnText.classList.add('brett-text');
        changeTextButton.classList.add('brett-button');

    }
    
});


