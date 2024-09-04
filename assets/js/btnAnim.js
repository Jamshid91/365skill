const btn_anim = document.querySelectorAll('.heart-btn');

btn_anim.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('clickHeart')
    })
})