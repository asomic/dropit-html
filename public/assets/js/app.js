// (function () {

    window.onload = function(){

        let burger = document.querySelector('.burger');
        let aside = document.querySelector('aside');
    
        burger && (
            burger.onclick = () => {
                console.log('click en burger!');
                aside.classList.toggle('h-20');
            }
        )
    
        // Modal Editar
        let closeModalEditar = document.querySelector('#closeModalEditar');
        let closeModalChat = document.querySelector('#closeModalChat');
        let buttonEditOrder = document.querySelector('#buttonEditOrder');
        let buttonOpenChat = document.querySelector('#buttonOpenChat');
    
        // let editOrder = document.querySelector('#editOrder');
        let pageModal = document.querySelector('#pageModal');
        let modalEditar = document.querySelector('#modalEditar');
        let modalChat = document.querySelector('#modalChat');
    
        closeModalEditar.onclick = () => {
            pageModal.classList.add('invisible');
            pageModal.classList.remove('visible');
            modalChat.classList.toggle('invisible');
        }
    
        closeModalChat.onclick = () => {
            pageModal.classList.add('invisible');
            modalEditar.classList.toggle('invisible');
        }
    
        buttonEditOrder.onclick = () => {
            pageModal.classList.toggle('invisible');
            pageModal.classList.toggle('visible');
            modalEditar.classList.toggle('invisible');
            modalEditar.classList.toggle('visible');
        }
        
        buttonOpenChat.onclick = () => {
            pageModal.classList.toggle('invisible');
            pageModal.classList.toggle('visible');
            modalChat.classList.toggle('invisible');
            modalChat.classList.toggle('visible');
        }

    };

    // closeModalEditar.addEventListener('click', function(e) {
    //     pageModal.classList.toggle('invisible');
    //     modalEditar.classList.toggle('invisible');
    // })

    // buttonEditOrder.addEventListener('click', function(e) {
    //     pageModal.classList.toggle('invisible');
    //     pageModal.classList.toggle('visible');
    //     modalEditar.classList.toggle('invisible');
    //     modalEditar.classList.toggle('visible');
    // })

    // buttonOpenChat.addEventListener('click', function(e) {
    //     pageModal.classList.toggle('invisible');
    //     pageModal.classList.toggle('visible');
    //     modalChat.classList.toggle('invisible');
    //     modalChat.classList.toggle('visible');
    // })

// }());