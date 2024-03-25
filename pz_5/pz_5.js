colorBlock.addEventListener('click', function(){
    colorBlock.style.backgroundColor = 
        "rgb(" + 
        Math.round(255*Math.random()) + 
        "," + 
        Math.round(255*Math.random()) + 
        "," +
        Math.round(255*Math.random()) +
        ")";
})