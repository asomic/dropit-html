(function () {

    let burger = document.querySelector('.burger');
    let aside = document.querySelector('aside');

    burger && (
        burger.onclick = () => {
            console.log('click en burger!');
            aside.classList.toggle('h-20');
        }
    )

}());