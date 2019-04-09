function clickWaves(e) {
    let d = document.createElement("div");
    d.className = "clickWaves";
    d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener('animationend', function() { d.parentElement.removeChild(d); }.bind(this));
}

document.addEventListener('click', clickWaves);