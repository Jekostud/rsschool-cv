const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function moveToSlide(index) {
    // Бесконечный цикл при желании
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    currentIndex = index;
    const amountToMove = -currentIndex * 100;
    track.style.transform = `translateX(${amountToMove}%)`;
}

prevButton.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
});


/* SCROLLING AND POSITION ZERO AFTER RELOAD PAGE ANCHORS */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
    // Мгновенно скроллим в самый верх страницы
    window.scrollTo(0, 0);

    // Удаляем якорь из адресной строки
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname + window.location.search);
    }
});