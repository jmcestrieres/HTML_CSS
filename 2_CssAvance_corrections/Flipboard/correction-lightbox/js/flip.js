function lightbox(el){
    console.log("J'ai cliqué sur un article", el);
    console.log(el.querySelector('img').src);
    // On récupère l'adresse de l'image de l'article cliqué
    let imgSrc = el.querySelector('img').src;
    // récupérer la lightbox et changer la source de son image
    let light = document.querySelector('#lightbox');
    console.log(light);
    let lightImg = light.querySelector('img');
    lightImg.src = imgSrc;
    // Appliquer un changement de classe à la lightbox pour la faire apparaître
    light.classList.toggle('visible');
}