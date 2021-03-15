(function () {

    window.onload = function(){

        let burger = document.querySelector('.burger');
        let aside = document.querySelector('aside');
    
        burger && (
            burger.onclick = () => {
                console.log('click en burger!');
                aside.classList.toggle('h-20');
            }
        )
    
        let body = document.querySelector('body');
        let closeModalEditar = document.querySelector('#closeModalEditar');
        let closeModalChat = document.querySelector('#closeModalChat');
        let closeModalClient = document.querySelector('#closeModalClient');

        let buttonEditOrder = document.querySelector('#buttonEditOrder');
        let buttonOpenChat = document.querySelector('#buttonOpenChat');
        let buttonOpenEditClient = document.querySelector('#buttonOpenEditClient');
        
        let pageModal = document.querySelector('#pageModal');
        let modalEditar = document.querySelector('#modalEditar');
        let modalChat = document.querySelector('#modalChat');
        let modalClient = document.querySelector('#modalClient');
        
        // Modal Editar
        buttonEditOrder.onclick = () => {
            body.style.overflow = 'hidden';
            pageModal.classList.remove('invisible');
            pageModal.classList.add('visible');
            modalEditar.classList.remove('invisible');
            modalEditar.classList.add('visible');
        }
        
        closeModalEditar.onclick = () => {
            body.style.overflow = 'auto';
            pageModal.classList.remove('visible');
            pageModal.classList.add('invisible');
            modalEditar.classList.remove('visible');
            modalEditar.classList.add('invisible');
        }
        
        // Modal Chat
        buttonOpenChat.onclick = () => {
            body.style.overflow = 'hidden';
            pageModal.classList.remove('invisible');
            pageModal.classList.add('visible');
            modalChat.classList.remove('invisible');
            modalChat.classList.add('visible');
        }
        
        closeModalChat.onclick = () => {
            body.style.overflow = 'auto';
            pageModal.classList.remove('visible');
            pageModal.classList.add('invisible');
            modalChat.classList.remove('visible');
            modalChat.classList.add('invisible');
        }
        
        // Modal Edit Client
        buttonOpenEditClient.onclick = () => {
            console.log('opened');
            // body.style.overflow = 'hidden';
            // pageModal.classList.remove('invisible');
            // pageModal.classList.add('visible');
            // modalClient.classList.remove('invisible');
            // modalClient.classList.add('visible');
        }
        
        closeModalClient.onclick = () => {
            console.log('closed');
            // body.style.overflow = 'auto';
            // pageModal.classList.remove('visible');
            // pageModal.classList.add('invisible');
            // modalClient.classList.remove('visible');
            // modalClient.classList.add('invisible');
        }

    };

}());