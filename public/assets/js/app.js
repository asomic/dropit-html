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

        let detailProd = document.querySelectorAll('.openDetailProd');
        let buttonEditOrder = document.querySelector('#buttonEditOrder');
        let buttonOpenChat = document.querySelector('#buttonOpenChat');
        let buttonOpenEditClient = document.querySelector('#buttonOpenEditClient');

        let closeModalEditar = document.querySelector('#closeModalEditar');
        let closeModalChat = document.querySelector('#closeModalChat');
        let closeModalClient = document.querySelector('#closeModalClient');
        let closeModalProductDetail = document.querySelector('#closeModalProductDetail');
        
        let pageModal = document.querySelector('#pageModal');
        let modalProductDetail = document.querySelector('#modalProductDetail');
        let modalEditar = document.querySelector('#modalEditar');
        let modalChat = document.querySelector('#modalChat');
        let modalClient = document.querySelector('#modalClient');
        
        // Modal Edit Client
        if (modalClient) {
            buttonOpenEditClient.onclick = () => {
                body.style.overflow = 'hidden';
                pageModal.classList.remove('invisible');
                pageModal.classList.add('visible');
                modalClient.classList.remove('invisible');
                modalClient.classList.add('visible');
            }
            
            closeModalClient.onclick = () => {
                body.style.overflow = 'auto';
                pageModal.classList.remove('visible');
                pageModal.classList.add('invisible');
                modalClient.classList.remove('visible');
                modalClient.classList.add('invisible');
            }
        }
        
        // Modal Editar
        if (modalEditar) {
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
        }

        // Modal Chat
        if (modalChat) {
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
        }

        // Modal Detalle Producto
        if (modalProductDetail) {
            for (let step = 0; step < detailProd.length; step++) {

                detailProd[step].onclick = () => {
                    body.style.overflow = 'hidden';
                    pageModal.classList.remove('invisible');
                    pageModal.classList.add('visible');
                    modalProductDetail.classList.remove('invisible');
                    modalProductDetail.classList.add('visible');
                }

            }

            closeModalProductDetail.onclick = () => {
                body.style.overflow = 'hidden';
                pageModal.classList.remove('visible');
                pageModal.classList.add('invisible');
                modalProductDetail.classList.remove('visible');
                modalProductDetail.classList.add('invisible');
            }
        }
        

    };

}());