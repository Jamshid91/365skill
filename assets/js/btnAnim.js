const btn_anim = document.querySelectorAll('.heart-btn');

btn_anim.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('clickHeart')
    })
});


const viewSmall = document.querySelector('.view-small');
const viewAll = document.querySelector('.view-all');
const products = document.querySelectorAll('.product');

viewSmall.addEventListener('click', () => {
    products.forEach(product => {
        product.parentElement.classList.add('viewProducts');
        viewSmall.classList.add('active')
        viewAll.classList.remove('active')
    });
});

viewAll.addEventListener('click', () => {
    products.forEach(product => {
        product.parentElement.classList.remove('viewProducts')
        viewAll.classList.add('active')
        viewSmall.classList.remove('active')
    });
});