const menu_btn = document.querySelectorAll('.menu_btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const list_li = document.querySelectorAll('.list_li span');
const back_btn = document.querySelectorAll('.back-btn');
const title_btn = document.querySelectorAll('.title_btn');
const menu_list_div = document.querySelectorAll('.menu-list_div');
const btn_scrollTop = document.querySelector('.btn-scrollTop');

menu_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        menu.classList.toggle('showMenu');
        btn.classList.toggle('clickedMenu')
        body.classList.toggle('bodyStopScroll')
    });
})

// window.addEventListener('click', (e) => {
//     if(e.target == menu) {
//         menu.classList.toggle('showMenu');
//         btn.classList.toggle('clickedMenu')
//         body.classList.toggle('bodyStopScroll')
//   }
// });

list_li.forEach(list => {
    list.addEventListener('click', () => {
        list_li.forEach(li => {
            li.parentElement.classList.add('d-none')
        })
        list.parentElement.classList.remove('d-none')
        list.parentElement.parentElement.parentElement.classList.add('showList')
    })
})

back_btn.forEach(back => {
    back.addEventListener('click', () => {
        list_li.forEach(li => {
            li.parentElement.classList.remove('d-none')
        })
        back.parentElement.parentElement.parentElement.parentElement.classList.remove('showList')
    })
});

menu_list_div.forEach(div => {
    div.addEventListener('click', () => {
        div.nextElementSibling.classList.remove('d-none')
    })
})
title_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.add('d-none')
    })
});

btn_scrollTop.addEventListener('click', () => {
    // alert()
    window.scrollTo(0,0)
})