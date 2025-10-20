// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
function renderImages(imageArray) {
    const container = document.getElementById("imageContainer")
    let imgHTML = ""
    for (let i = 0; i < imageArray.length; i++) {
        imgHTML += `<img src="${imageArray[i]}" alt="Hipster Image ${i + 1}">`
    }
    container.innerHTML = imgHTML
}
renderImages(imgs)