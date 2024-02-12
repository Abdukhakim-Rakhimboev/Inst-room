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




let burgersBtns = document.querySelectorAll('.shop')
    count = document.querySelector('.icoon__count')
    shopped = document.querySelector('.shopped')
    icoon = document.querySelector('.icoon')
    list = document.querySelector('.shopping__list')
    closee = document.querySelector('.list__top-close')
    
   
    
shopped.addEventListener('click', () => list.classList.add('active'))  
closee.addEventListener('click', () => list.classList.remove('active'))
    
    
    
    
burgersBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        plus(this)
    })
})


function plus(btn) {
    let parent = btn.closest('.item')
    let parentId = parent.getAttribute('id')
    product[parentId].amount++
    console.log(parentId);
    
    basket()
}

function basket() {
    for(let key in product) {
        let allCount  = totalCount()
        if(allCount > 0) {
            count.classList.add('active')
        }else {
            count.classList.remove('active')
        }
        count.innerHTML = allCount
    }
}


function totalCount() {
    let total = 0;
    for(let key in product) {
        total += product[key].amount
    }
    return total
}