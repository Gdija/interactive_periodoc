let chem = document.querySelector("#chem");
function animateCharacters(element) {
    let spanElements = element.querySelectorAll("span");
    for (let i = 0; i < spanElements.length; i++) {
        let spanElement = spanElements[i];
        let randomDuration = .2 + Math.random() * 1;

        spanElement.style.setProperty("--duration", randomDuration + "s");
    }
    setInitialRandomColor(spanElements);
    chem.addEventListener("animationiteration", changeColor, true);
}
animateCharacters(chem);

function setInitialRandomColor(elements) {
    for (let i = 0; i < elements.length; i++) {
        let spanElement = elements[i];
        spanElement.style.setProperty("--colorA", finalColor);
        spanElement.style.setProperty("--colorB", finalColor);

    }
}


