// Time 
let countDownDate = new Date("March 10, 2023 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }
}, 1000);

let btn = document.querySelector('.play_video');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('#video');
btn.onclick = function () {
    btn.classList.add('active');
    clip.classList.add('active');
    video.play();
}
close.onclick = function () {
    btn.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
}

// document.querySelector('.video').addEventListener('click', () => {
//     document.querySelector('video').pause();
// });

let btn_close = document.querySelector('.btn-close ');
let video1 = document.querySelector('.video');
btn_close.onclick = function () {
    video1.pause();
}


let nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 100) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow')
    }
})




// JQ click close menu
$(document).ready(function () {
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    })


    $('.navbar-nav').on('click', 'a', function () {
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#click').on('click', function () {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Just Show ',
            showConfirmButton: false,
            timer: 1500
        })

    })
})