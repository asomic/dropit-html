(function () {

    console.log('funca alooo!!!');

    let burger = document.querySelector('.burger');

    burger && (
        burger.onclick = () => {
            console.log('funca!');
        }
    )

}());