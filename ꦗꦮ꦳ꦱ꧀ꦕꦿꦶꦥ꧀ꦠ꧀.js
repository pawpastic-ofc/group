function ꦩꦲꦫꦺꦥ꧀() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
function ꦲꦠꦸꦫꦤ꧀() {
    const OwO = document.getElementById('rule');
    if (OwO) {
        const UwU = OwO.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: UwU,
            behavior: "smooth",
        });
    }
}
function ꦒꦩ꧀ꦧꦂ() {
    const QwQ = document.getElementById('glr')
    if (QwQ) {
        const TwT = QwQ.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: TwT,
            behavior: "smooth",
        });
    }
}
function ꦕꦺꦴꦥꦱ꧀() {
    navigator.clipboard.writeText("https://chat.whatsapp.com/KscMAK1oWI1Jnut2xLMIQ0");
    var tooltip = document.querySelector('.notif');
    tooltip.classList.add('muncul');
    setTimeout(function() {
        tooltip.classList.remove('muncul');
    }, 2000);
}
function ᬧᬶᬮᬶᬳᬦ᭄ᬩᬳᬲ() {
    var basa = document.querySelector('.cls');
    basa.classList.add('on');
}
function menu(){
    var a = document.querySelector('.side-menu');
    var b = document.querySelector('.bkg');
    a.classList.toggle('aktif');
    b.classList.toggle('aktf');
}
function mn(){
    var a = document.querySelector('.side-menu');
    var b = document.querySelector('.bkg');
    a.classList.remove('aktif');
    b.classList.add('pasif');
    setTimeout(function(){
        b.classList.remove('pasif');
        b.classList.remove('aktf');
    }, 550);
}
function ᬓᬾᬮᬸᬯᬃ() {
    var keluar = document.querySelector('.cls');
    keluar.classList.add('off');
    setTimeout(function() {
        keluar.classList.remove('on');
        keluar.classList.remove('off');
    }, 600);
}
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    function showSlide(index) {
        if (slides.length === 0) return;
        slides.forEach(slide => {
            slide.classList.remove('aktif');
        });
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('aktif');
    }
    showSlide(currentSlide);
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    let autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    slideshowContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000);
    });
});