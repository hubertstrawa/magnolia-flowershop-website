// Get modal element
let modal_Fl_Sl = document.getElementById('modal_Fl_Sl');
let modal_Fl_Ok = document.getElementById('modal_Fl_Ok');
let modal_Fl_Po = document.getElementById('modal_Fl_Po');

// Get open modal button
let modalBtn_Fl_Sl = document.getElementById('modalBtn_Fl_Sl');
let modalBtn_Fl_Ok = document.getElementById('modalBtn_Fl_Ok');
let modalBtn_Fl_Po = document.getElementById('modalBtn_Fl_Po');

// Get close button
let closeBtn_Fl_Sl = document.getElementsByClassName('closeBtn_Fl_Sl')[0];
let closeBtn_Fl_Ok = document.getElementsByClassName('closeBtn_Fl_Ok')[0];
let closeBtn_Fl_Po = document.getElementsByClassName('closeBtn_Fl_Po')[0];


// Listen for open click
modalBtn_Fl_Sl.addEventListener('click', openModal_Fl_Sl);
modalBtn_Fl_Ok.addEventListener('click', openModal_Fl_Ok);
modalBtn_Fl_Po.addEventListener('click', openModal_Fl_Po);


// Listen for close click
closeBtn_Fl_Sl.addEventListener('click', closeModal_Fl_Sl);
closeBtn_Fl_Ok.addEventListener('click', closeModal_Fl_Ok);
closeBtn_Fl_Po.addEventListener('click', closeModal_Fl_Po);


// Listen for outside click
window.addEventListener('click', clickOutside_Fl_Sl);
window.addEventListener('click', clickOutside_Fl_Ok);
window.addEventListener('click', clickOutside_Fl_Po);


// Function to open modal

function openModal_Fl_Sl() {
    modal_Fl_Sl.style.display = 'block';
}

function openModal_Fl_Ok() {
    modal_Fl_Ok.style.display = 'block';
}

function openModal_Fl_Po() {
    modal_Fl_Po.style.display = 'block';
}

// Function to close modal

function closeModal_Fl_Sl() {
    modal_Fl_Sl.style.display = 'none';
}

function closeModal_Fl_Ok() {
    modal_Fl_Ok.style.display = 'none';
}

function closeModal_Fl_Po() {
    modal_Fl_Po.style.display = 'none';
}

// Function to close modal if outside click

function clickOutside_Fl_Sl(i) {
    if(i.target == modal_Fl_Sl){
        modal_Fl_Sl.style.display = 'none';
    }

}

function clickOutside_Fl_Ok(i) {
    if(i.target == modal_Fl_Ok){
        modal_Fl_Ok.style.display = 'none';
    }

}

function clickOutside_Fl_Po(i) {
    if(i.target == modal_Fl_Po){
        modal_Fl_Po.style.display = 'none';
    }

}