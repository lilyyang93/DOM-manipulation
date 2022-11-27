function replaceImages() {

    let photos = document.body.getElementsByTagName("img")
    
    for (let i = photos.length-1; i >= 0; i--) {
        let photo = photos[i]
        if (photo.alt) {
            let text = document.createTextNode(photo.alt)
            photo.parentNode.replaceChild(text, photo)
        }
    }
}

const btn = document.querySelector('button')

btn.addEventListener('click', replaceImages)
