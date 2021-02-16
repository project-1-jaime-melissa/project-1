const app = {};

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
};

//function to create event listeners
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

//DOM ready
document.addEventListener('DOMContentLoaded', (event) => {
    //initialize
    app.init()
});


