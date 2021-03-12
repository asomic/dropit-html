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
    
        let closeModalEditar = document.querySelector('#closeModalEditar');
        let closeModalChat = document.querySelector('#closeModalChat');
        let buttonEditOrder = document.querySelector('#buttonEditOrder');
        let buttonOpenChat = document.querySelector('#buttonOpenChat');
        
        let pageModal = document.querySelector('#pageModal');
        let modalEditar = document.querySelector('#modalEditar');
        let modalChat = document.querySelector('#modalChat');
        
        // Modal Editar
        buttonEditOrder.onclick = () => {
            pageModal.classList.remove('invisible');
            pageModal.classList.add('visible');
            modalEditar.classList.remove('invisible');
            modalEditar.classList.add('visible');
        }

        closeModalEditar.onclick = () => {
            pageModal.classList.remove('visible');
            pageModal.classList.add('invisible');
            modalEditar.classList.remove('visible');
            modalEditar.classList.add('invisible');
        }
        
        // Modal Chat
        buttonOpenChat.onclick = () => {
            pageModal.classList.remove('invisible');
            pageModal.classList.add('visible');
            modalChat.classList.remove('invisible');
            modalChat.classList.add('visible');
        }

        closeModalChat.onclick = () => {
            pageModal.classList.remove('visible');
            pageModal.classList.add('invisible');
            modalChat.classList.remove('visible');
            modalChat.classList.add('invisible');
        }

    };

}());