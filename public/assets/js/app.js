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

        // Buttons
        let detailProd = document.querySelectorAll('.openDetailProd');
        let buttonEditOrder = document.querySelector('#buttonEditOrder');
        let buttonOpenChat = document.querySelector('#buttonOpenChat');
        let buttonOpenChatN = document.querySelectorAll('.buttonOpenChat');
        let buttonOpenEditClient = document.querySelector('#buttonOpenEditClient');
        let buttonModalInfoOrder = document.querySelector('#buttonModalInfoOrder');
        let openModalEditAttribute = document.querySelectorAll('.openModalEditAttribute');
        let buttonAddNewCategory = document.querySelector('#buttonAddNewCategory');
        let openModalAddAttribute = document.querySelector('#openModalAddAttribute');
        let buttonAddCart = document.querySelectorAll('.buttonAddCart');
        let addProductToOrder = document.querySelector('#addProductToOrder');
        let processProducts = document.querySelector('#processProducts');
        let goToResume = document.querySelector('#goToResume');
        let backToAssign = document.querySelector('#backToAssign');
        let openAddNewClient = document.querySelector('#openAddNewClient');
        
        let closeModalEditar = document.querySelector('#closeModalEditar');
        let closeModalChat = document.querySelector('#closeModalChat');
        let closeModalClient = document.querySelector('#closeModalClient');
        let closeModalProductDetail = document.querySelector('#closeModalProductDetail');
        let closeModalInfoOrder = document.querySelector('#closeModalInfoOrder');
        let closeModalAddCategory = document.querySelector('#closeModalAddCategory');
        let closeModalAddAttribute = document.querySelector('#closeModalAddAttribute');
        let closeModalOrderProductDetail = document.querySelector('#closeModalOrderProductDetail');
        let backToCart = document.querySelector('#backToCart');
        let closeNewClientModal = document.querySelectorAll('.closeNewClientModal');
        let closeAlertCatalog = document.querySelector('#closeAlertCatalog');
        
        // Modals & Containers
        let pageModal = document.querySelector('#pageModal');
        let modalProductDetail = document.querySelector('#modalProductDetail');
        let modalEditar = document.querySelector('#modalEditar');
        let modalChat = document.querySelector('#modalChat');
        let modalChatN = document.querySelector('#modalChatN');
        let modalClient = document.querySelector('#modalClient');
        let modalInfoOrder = document.querySelector('#modalInfoOrder');
        let modalEditAttribute = document.querySelector('#modalEditAttribute');
        let modalAddAttribute = document.querySelector('#modalAddAttribute');
        let modalAddCategory = document.querySelector('#modalAddCategory');
        let alertDialog = document.querySelector('#alertDialog');
        // Order Modals
        let sidebarCart = document.querySelector('#sidebarCart');
        let modalOrderProductDetail = document.querySelector('#modalOrderProductDetail');
        let modalOrderAsignClient = document.querySelector('#modalOrderAsignClient');
        let addNewClientModal = document.querySelector('#addNewClientModal');
        let modalOrderDataClient = document.querySelector('#modalOrderDataClient');
        let modalOrderResume = document.querySelector('#modalOrderResume');
        
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

        if (modalInfoOrder) {

            buttonModalInfoOrder.onclick = () => {
                body.style.overflow = 'hidden';
                pageModal.classList.remove('invisible');
                pageModal.classList.add('visible');
                modalInfoOrder.classList.remove('invisible');
                modalInfoOrder.classList.add('visible');
            }

            closeModalInfoOrder.onclick = () => {
                body.style.overflow = 'auto';
                pageModal.classList.remove('visible');
                pageModal.classList.add('invisible');
                modalInfoOrder.classList.remove('visible');
                modalInfoOrder.classList.add('invisible');
            }

        }

        if (modalChatN) {
            for (let i = 0; i < buttonOpenChatN.length; i++) {

                buttonOpenChatN[i].onclick = () => {
                    console.log('clicke');
                    body.style.overflow = 'hidden';
                    pageModal.classList.remove('invisible');
                    pageModal.classList.add('visible');
                    modalChatN.classList.remove('invisible');
                    modalChatN.classList.add('visible');
                }
                
            }

            closeModalChat.onclick = () => {
                body.style.overflow = 'auto';
                pageModal.classList.remove('visible');
                pageModal.classList.add('invisible');
                modalChatN.classList.remove('visible');
                modalChatN.classList.add('invisible');
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
                body.style.overflow = 'auto';
                pageModal.classList.remove('visible');
                pageModal.classList.add('invisible');
                modalProductDetail.classList.remove('visible');
                modalProductDetail.classList.add('invisible');
            }
        }

        if (modalEditAttribute) {
            for (let step = 0; step < openModalEditAttribute.length; step++) {

                openModalEditAttribute[step].onclick = () => {
                    // console.log('funca');
                    body.style.overflow = 'hidden';
                    pageModal.classList.remove('invisible');
                    pageModal.classList.add('visible');
                    modalEditAttribute.classList.remove('invisible');
                    modalEditAttribute.classList.add('visible');
                }

            }

            closeModalInfoOrder.onclick = () => {
                body.style.overflow = 'auto';
                pageModal.classList.remove('visible');
                pageModal.classList.add('invisible');
                modalEditAttribute.classList.remove('visible');
                modalEditAttribute.classList.add('invisible');
            }

        }

        if (modalAddCategory) {

            buttonAddNewCategory.onclick = () => {
                body.style.overflow = 'hidden';
                pageModal.classList.remove('invisible');
                pageModal.classList.add('visible');
                modalAddCategory.classList.remove('invisible');
                modalAddCategory.classList.add('visible');
            }

            closeModalAddCategory.onclick = () => {
                body.style.overflow = 'auto';
                pageModal.classList.remove('visible');
                pageModal.classList.add('invisible');
                modalAddCategory.classList.remove('visible');
                modalAddCategory.classList.add('invisible');
            }

        }

        if (modalAddAttribute) {

            openModalAddAttribute.onclick = () => {
                body.style.overflow = 'hidden';
                pageModal.classList.remove('invisible');
                pageModal.classList.add('visible');
                modalAddAttribute.classList.remove('invisible');
                modalAddAttribute.classList.add('visible');
            }

            closeModalAddAttribute.onclick = () => {
                body.style.overflow = 'auto';
                pageModal.classList.remove('visible');
                pageModal.classList.add('invisible');
                modalAddAttribute.classList.remove('visible');
                modalAddAttribute.classList.add('invisible');
            }

        }

        // Order Modals actions
        if (modalOrderProductDetail) {
            for (let step = 0; step < buttonAddCart.length; step++) {

                buttonAddCart[step].onclick = () => {
                    modalOrderProductDetail.classList.remove('invisible');
                }

            }

            closeModalOrderProductDetail.onclick = () => {
                modalOrderProductDetail.classList.add('invisible');
            }

            addProductToOrder.onclick = () => {
                modalOrderProductDetail.classList.add('invisible');
            }
        }

        if (modalOrderAsignClient) {
            processProducts.onclick = () => {
                modalOrderAsignClient.classList.remove('invisible');
            }
            
            backToCart.onclick = () => {
                modalOrderAsignClient.classList.add('invisible');
            }

            goToResume.onclick = () => {
                // modalOrderDataClient.classList.remove('invisible');
                modalOrderResume.classList.remove('invisible');
            }

            openAddNewClient.onclick = () => {
                addNewClientModal.classList.remove('invisible');
            }
        }

        if (modalOrderResume) {
            backToAssign.onclick = () => {
                modalOrderResume.classList.add('invisible');
            }
        }

        if (addNewClientModal) {
            for (let step = 0; step < closeNewClientModal.length; step++) {
                closeNewClientModal[step].onclick = () => {
                    addNewClientModal.classList.add('invisible');
                }
            }
        }

        if (alertDialog) {
            closeAlertCatalog.onclick = () => {
                alertDialog.classList.add('hidden');
            }
        }

    };

}());