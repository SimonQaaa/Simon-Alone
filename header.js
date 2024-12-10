//导航栏模块文字效果
const header_texts = document.querySelectorAll('.header_text');
console.log(header_texts);
header_texts.forEach(function(header_text) {
    // header_text.addEventListener('click', function() {
    //     // header_texts.forEach(function(header_text_tmp) {
    //     //     header_text_tmp.classList.remove('black')
    //     // })
    //     // this.style.color = 'white';
    //     this.classList.add('black')
    //     console.log(header_text);
    // })
    header_text.addEventListener('mouseenter', function() {
        this.classList.add('black')
    })
    header_text.addEventListener('mouseleave', function() {
        this.classList.remove('black')
    })
})

//logo点击跳转首页效果
const moon = document.querySelector('.logo');
moon.addEventListener('click', function() {
    header_texts.forEach(function(header_text) {
        header_text.classList.remove('black');
    })
})

//icon图标效果
const icons = document.querySelectorAll('.top_icon');
icons.forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
        icon.classList.add('hover')
    })
    icon.addEventListener('mouseleave', function() {
        icon.classList.remove('hover')
    })
})