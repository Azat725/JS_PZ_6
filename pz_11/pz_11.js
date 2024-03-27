window.d1.onmousedown = function(e) {
    let bgColor;
    switch( e.which ) {
    case 1:
        bgColor = "lime" ;
        break ;
    case 2:
        bgColor = "aqua" ;
        break ;
    case 3:
        bgColor = "tomato" ;
        break ;
    }
    window.d1.style.backgroundColor = bgColor ;
}