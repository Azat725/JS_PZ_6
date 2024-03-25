const relativeBlock = document.getElementById("block");


document.onmousemove = function (event) {
    if (event.buttons === 1) {
        relativeBlock.style.width = `${event.clientX}px`;
        relativeBlock.style.height = `${event.clientY}px`;
    }
};

document.onmousedown = function (event) {
    if (event.button === 0) {
        relativeBlock.style.left = '0';
        relativeBlock.style.top = '0';
        relativeBlock.style.width = '0';
        relativeBlock.style.height = '0';
    };
};