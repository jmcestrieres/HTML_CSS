function lightbox(img) {
    let pola = document.querySelector('#image');
    let image = document.querySelector('#image img');
    image.setAttribute('src', img);
    pola.classList.toggle('visible');
}