d1.onmouseenter = function () {
    s1.innerText = "d1"
    console.log("d1/onmouseover")
}

d1.onmouseover = function(){
    s2.innerText = "d1"
    console.log("d1.onmouseover")
}
    d2.onmouseenter = function(){
    s1.innerText = "d2"
    console.log("d2.onmouseenter")
}
d2.onmouseover = function(){
    s2.innerText = "d2"
    console.log("d2.onmouseover")
}