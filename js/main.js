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

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
    const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return `${MONTHS[date.getMonth()]}, ${date.getDate()}, ${date.getFullYear()}.`;
}

setInterval(() => {
    const now = new Date();

    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
}, 200);


// JQ click close menu
$(document).ready(function () {

    setTimeout(function () {
        $(".loader_bg").fadeToggle();
    }, 2500);

    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    })


    $('.navbar-nav').on('click', 'a', function () {
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    });

})