document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("flex-container");
    var max = Math.floor(Math.random() * 1000) + 1;

    for (var i = 0; i < max; i++) {
        var color = generateColor();
        var contrast = contrastColor(color);

        var col = document.createElement("div");
        col.classList.add("flex-item");
        col.style.backgroundColor = color;
        col.style.color = contrast;
        col.innerText = color;
        el.appendChild(col);
    }
});

function generateColor() {
    return '#' + Math.random().toString(16).slice(-6).padStart(6, '0').toUpperCase();
}

function contrastColor(color) {
    var r = parseInt(color.substr(1, 2), 16);
    var g = parseInt(color.substr(3, 2), 16);
    var b = parseInt(color.substr(5, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}