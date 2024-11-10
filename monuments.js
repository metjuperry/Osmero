let greyGalleryPageSelected = 1;
let selectedMonumentIndex = null;
let selectedColor = null;

// Handle selecting a monument from the gallery
function selectMonument(index) {
    // get monument-color-selector
    const monumentColorSelector = document.getElementById('monument-color-selector');

    if (monumentColorSelector.classList.contains('visible')) {
        monumentColorSelector.classList.remove('visible');

        const monuments = document.getElementsByClassName('monument-gallery');
        for (let i = 0; i < monuments.length; i++) {
            monuments[i].classList.add('hidden');
            monuments[i].classList.remove('visible');
        }

        selectedMonumentIndex = null;
        return;
    }

    if (index === 0) {
        return;
    }

    monumentColorSelector.classList.add('visible');
    selectedMonumentIndex = index;
}

function fillMonument(index) {
    if (selectedMonumentIndex === null) {
        return;
    }

    const monumentImageElement = document.getElementById(`monument-image-${index}`);

    if (monumentImageElement) {

        if (monumentImageElement.classList.contains('used')) {
            return;
        }

        monumentImageElement.classList.add('used');
    }


    const monument = document.getElementById(`monument${selectedMonumentIndex}`);

    // Create an image element if it doesn't already exist
    let img = monument.querySelector('img');
    if (!img) {
        img = document.createElement('img');
        monument.appendChild(img)
        //monument.insertBefore(img, monument.querySelector('.result-number-container'))

    }
    monument.classList.add('filled');

    img.src = `monuments/${index}.png`;

    document.querySelector('.monument-color-selector').classList.remove('visible');
    const monuments = document.getElementsByClassName('monument-gallery');
    for (let i = 0; i < monuments.length; i++) {
        monuments[i].classList.add('hidden');
        monuments[i].classList.remove('visible');
    }

    const monumentInput = document.getElementById(`monument-input-${selectedMonumentIndex}`);
    monumentInput.value = index;

    selectedMonumentIndex = null;
    selectedColor = null;
}

function fillInDebugMonuments(cardNumbers) {
    const inputs = document.querySelectorAll('.monument-input');

    for (let index = 0; index < cardNumbers.length; index++) {
        const element = inputs[index];
        element.value = cardNumbers[index];
        selectedMonumentIndex = index + 1;
        fillMonument(cardNumbers[index]);
    }
}

function changeMonumentPickedColor(color) {
    //Get all "monument-gallery" by class and set them to display none
    const monuments = document.getElementsByClassName('monument-gallery');

    for (let i = 0; i < monuments.length; i++) {
        monuments[i].classList.add('hidden');
        monuments[i].classList.remove('visible');
    }

    if (selectedColor === color) {
        selectedColor = null;
        return;
    }

    selectedColor = color;

    if (color === 'grey') {
        handleGreyMonumentGallery();
        return;
    }


    document.getElementById('previous-page-button').style.display = 'none';
    document.getElementById('next-page-button').style.display = 'none';

    // Get the monument gallery by id "{color}-monument-gallery" and set it to display block
    const monument = document.getElementById(`${color}-monument-gallery`);
    monument.classList.add('visible');
    monument.classList.remove('hidden');

}

function handleGreyMonumentGallery() {
    // Get the monument gallery by id "grey-monument-gallery"
    const monument = document.getElementById('grey-monument-gallery');
    monument.classList.add('visible');

    // Get the monument gallery by id "grey-monument-gallery" and set them to display none, except id = gray-monument-gallery-row-{greyGalleryPageSelected}
    const monuments = monument.getElementsByClassName('monument-gallery-row');
    for (let i = 0; i < monuments.length; i++) {
        if (i === greyGalleryPageSelected - 1) {
            monuments[i].style.display = 'block';
        } else {
            monuments[i].style.display = 'none';
        }
    }

    // If pagenumber === 1, hide the previous button
    if (greyGalleryPageSelected === 1) {
        document.getElementById('previous-page-button').style.display = 'none';
    } else {
        document.getElementById('previous-page-button').style.display = 'block';
    }

    // If pagenumber === 5, hide the next button
    if (greyGalleryPageSelected === 5) {
        document.getElementById('next-page-button').style.display = 'none';
    } else {
        document.getElementById('next-page-button').style.display = 'block';
    }
}

function greyGalleryPreviousPage() {
    if (greyGalleryPageSelected === 1) {
        return;
    }

    greyGalleryPageSelected--;

    handleGreyMonumentGallery();
}

function greyGalleryNextPage() {
    if (greyGalleryPageSelected === 5) {
        return;
    }

    greyGalleryPageSelected++;

    handleGreyMonumentGallery();
}
