(function () {

    let burger = document.querySelector('.burger');
    let aside = document.querySelector('aside');

    burger && (
        burger.onclick = () => {
            console.log('click en burger!');
            aside.classList.toggle('h-20');
        }
    )

    let closeModal = document.querySelector('#closeModal');
    let editOrder = document.querySelector('#editOrder');
    let pageModal = document.querySelector('#pageModal');
    let modal = document.querySelector('#modal');
    let buttonEditOrder = document.querySelector('#buttonEditOrder');

    closeModal.onclick = () => {
        pageModal.classList.toggle('invisible');
        modal.classList.toggle('invisible');
    }

    buttonEditOrder.onclick = () => {
        pageModal.classList.toggle('invisible');
        pageModal.classList.toggle('visible');
        modal.classList.toggle('invisible');
        modal.classList.toggle('visible');
    }

}());