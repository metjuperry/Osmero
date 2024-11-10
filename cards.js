let cardNumbers = [];

function handleInput(index) {
    const input = document.getElementById(`input${index}`);
    let value = input.value;

    // Check if the input value is a valid number and has 1-2 digits
    if (value.match(/^[0-9]{1,2}$/)) {

        // If number starts with 0, remove the 0
        if (value.startsWith('0')) {
            value = value.slice(1);
        }

        if (value > 68 || value < 1) {
            showToast("Please enter a valid number between 1-68.");
            flashRed(index); // Flash the invalid box red
            input.value = ''; // Clear the input
            return;
        }

        // Check if the number is unique
        if (isDuplicate(value, index)) {
            showToast("This number is already entered. Please enter a unique number.");
            flashRed(index);  // Flash the duplicate box red
            input.value = ''; // Clear the input
            return;
        }

        removeFlashRed(index); // Remove red flash if it was there
        input.classList.add('filled');
        showImage(index, value);

        cardNumbers.push(value);

        if (cardNumbers.length > 1 && cardNumbers[cardNumbers.length - 2] < value) {
            revealNextMonumentSlot();
        }


        enableNextInput(index);
        checkAllInputsFilled();

    } else {
        showToast("Please enter a valid number between 1-68.");
        flashRed(index); // Flash the invalid box red
        input.value = ''; // Clear the input
    }
}

function showImage(index, number) {
    const box = document.getElementById(`box${index}`);
    const input = document.getElementById(`input${index}`);

    // Hide the input field
    input.style.display = 'none';

    // Create an image element if it doesn't already exist
    let img = box.querySelector('img');
    if (!img) {
        img = document.createElement('img');
        img.classList.add('number-image'); // Adding a class for possible styling
        // box.appendChild(img);
        box.insertBefore(img, box.querySelector('.close-btn'))

    }

    // Set the source of the image to correspond with the input number
    img.src = `cards/${number}.png`; // Assuming the image is named as the number, e.g., 1.png, 2.png, etc.

    // Show the image
    img.style.display = 'block';

    // Show the close button
    const closeBtn = box.querySelector('.close-btn');
    closeBtn.style.display = 'block';

    // Optional animation for the image
    box.style.transform = 'scale(1.05)';
    setTimeout(() => box.style.transform = 'scale(1)', 200);
}

// Check if the number already exists in any other input
function isDuplicate(value, currentIndex) {
    let isDuplicate = false;
    const inputs = document.querySelectorAll('.number-input');

    inputs.forEach((input, index) => {
        if (index !== currentIndex - 1 && input.value === value) {
            isDuplicate = true;
        }
    });

    return isDuplicate;
}

// Show the toast notification at the bottom
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.style.display = 'block';
    toast.style.opacity = '1';

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => { toast.style.display = 'none'; }, 500); // Wait for fade-out transition
    }, 3000);
}

// Flash the input box red
function flashRed(index) {
    const box = document.getElementById(`box${index}`);
    box.classList.add('flash-red');

    setTimeout(() => {
        removeFlashRed(index)
    }, 500);
}

function fillInDebugNumbers(cardNumbers) {
    const inputs = document.querySelectorAll('.number-input');
    inputs.forEach((input, index) => {
        input.value = cardNumbers[index];
        handleInput(index + 1)
    });
}

function revealNextMonumentSlot() {
    // Get monument-card class elements, which are not active
    const monuments = [...document.getElementsByClassName('monument-card')].filter(monument => !monument.classList.contains('visible'));

    monuments[0].classList.add('visible');
}

// Remove the red flash effect
function removeFlashRed(index) {
    const box = document.getElementById(`box${index}`);
    box.classList.remove('flash-red');
}

function resetInput(index) {
    const box = document.getElementById(`box${index}`);
    const input = document.getElementById(`input${index}`);
    const img = box.querySelector('img');
    const closeBtn = box.querySelector('.close-btn');

    input.value = '';
    input.classList.remove('filled');
    if (img) box.removeChild(img);
    closeBtn.style.display = 'none';

    input.style.display = 'block';

    removeFlashRed(index); // Ensure the flash is removed when reset
    checkAllInputsFilled();
}

function enableNextInput(index) {
    const nextInput = document.getElementById(`input${index + 1}`);
    if (nextInput && nextInput.disabled) {
        nextInput.disabled = false;
        // Add the flip animation class
        nextInput.classList.add('flip-animation');

        // Remove the animation class after the animation ends to reset it for the future
        nextInput.addEventListener('animationend', () => {
            nextInput.classList.remove('flip-animation');
        });
    }
}

function checkAllInputsFilled() {
    // Select all the inputs
    const inputs = document.querySelectorAll('.number-input');
    let allFilled = true;

    // Check if each input has a value
    inputs.forEach(input => {
        if (!input.value.match(/^[0-9]{1,2}$/)) {
            allFilled = false;
        }
    });

    // Enable or disable the calculate button
    const calculateBtn = document.querySelector('.calculate-btn');
    calculateBtn.disabled = !allFilled;
}