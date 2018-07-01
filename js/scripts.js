function changeBackground() {
    if (document.body.style.backgroundImage == "url('background.jpg')" ) {
        document.body.style.backgroundImage = "none";
    } else {
        document.body.style.backgroundImage = "url('background.jpg')";
    }
}