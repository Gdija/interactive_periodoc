function getRandomColor() {
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colorParts = [];

    for (let i = 0; i < 6; i++) {
        colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
    }
    let finalColor = `#${colorParts.join("")}`;
    return finalColor;
}

function changeColor() {
    let spanElement = document.getElementById("chem");
    let randomColor = getRandomColor();
    spanElement.style.color = randomColor;
}

setInterval(changeColor, 3000);