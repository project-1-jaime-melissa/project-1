const app = {};

//global variables
app.imageCounter = 0;
app.imageCounter2 = 0;
app.imageArray = [
    '<img src="./assets/gallery-image-1.jpg" alt="Small yacht in the horizon below slightly cloudy sky.">',
    '<img src="./assets/gallery-image-2.jpg" alt="Right side of a yacht from perspecitve of inside the boat looking out over the ocean.">',
    '<img src="./assets/gallery-image-3.jpg" alt="Back left side of a yacht from perspective of inside the boat looking out to the ocean">'
];

//initialize
app.init = () => {
    //add event listeners for modals
    app.addListener('.programs-container');
    app.addListener('.locations-container');
    app.addListener('.vacation-days');
    app.addListener('.contest');

    //loop through modal close buttons, add event listeners
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    
    for (modalCloseBtn of modalCloseBtns) {
        modalCloseBtn.addEventListener('click', (event) => {
            const modal = event.target.parentNode.parentNode;
            modal.style.display = 'none';
        });
    }
    
    //add initial gallery images
    app.pageImage();

    //add event listeners for image gallery
    const rightArrow = document.querySelector('.fa-chevron-circle-right');
    const leftArrow = document.querySelector('.fa-chevron-circle-left');
    
    rightArrow.addEventListener('click', () => {
        app.pageImage('right');
    });
    
    leftArrow.addEventListener('click', () => {
        app.pageImage('left');
    });
};

//function to create modal event listeners
app.addListener = (className) => {
    const container = document.querySelector(className + ' .button');
    container.addEventListener('click', () => {
        app.showModal(className);
    });
};

//show modal with messaging
app.showModal = (containerClass) => {
    const modal = document.querySelector(containerClass + ' .modal')
    modal.style.display = 'unset'; 
};

//function to page through images
app.pageImage = (direction) => {

    //increment/decrement counter
    if (direction === 'right') {
        app.imageCounter++
    } else if (direction === 'left') {
        app.imageCounter--
    } else {
        app.imageCounter = 0;
    }
    console.log('first', app.imageCounter, app.imageCounter2)

    //reset counter if at end
    if (app.imageCounter === app.imageArray.length) {
        console.log('equal to length')
        app.imageCounter = 0;
    } else if (app.imageCounter < 0) {
        console.log('less than 0')
        app.imageCounter = app.imageArray.length - 1;
    }

    //set counter for 2nd image
    app.imageCounter2 = app.imageCounter + 1;
    if (app.imageCounter2 === app.imageArray.length) {
        app.imageCounter2 = 0;
    }

    //set image items to display
    const imageItem1 = app.imageArray[app.imageCounter];
    const imageItem2 = app.imageArray[app.imageCounter2];
    const imageUL = document.querySelector('ul.image-container');

    imageUL.querySelector('li:nth-of-type(1n)').innerHTML = imageItem1;
    imageUL.querySelector('li:nth-of-type(2n)').innerHTML = imageItem2;
}

//DOM ready
document.addEventListener('DOMContentLoaded', (event) => {
    //initialize
    app.init()
});


