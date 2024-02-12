let product = {
    color: {
        name: 'Color',
        price: 500,
        amount: 0,
        img: './images/color.pnge',
        get totalSum() {
            return this.price * this.amount
        }
    },
    objekt: {
        name: 'Color',
        price: 560,
        amount: 0,
        img: './images/objekt.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
}


// let images = document.querySelectorAll('.shop');


// images.forEach((img) => {
//     if (img.src.includes('shop')) {
//         img.addEventListener('click', function() {
//             img.src = './images/done.png';
//             img.classList.remove('shop')
//             img.classList.add('shopp')
//         });
//     }
// });






let images = document.querySelectorAll('img');


images.forEach((img) => {
    if (img.src.includes('shop')) {
        img.addEventListener('click', function() {
            if (img.src.includes('shop')) {
                img.src = './images/done.png';
                img.classList.remove('shop')
                img.classList.add('shopp')
            } else {
                img.src = './images/shop.png';
                img.classList.remove('shopp')
                img.classList.add('shop')
            }
        });
    }
});



// let imagess = document.querySelectorAll('.shopp');


// imagess.forEach((img) => {
//     if (img.src.includes('done')) {
//         img.addEventListener('click', function() {
//             img.src = './images/shop.png';
//             img.classList.remove('shopp')
//             img.classList.add('shop')
//         });
//     }
// });



