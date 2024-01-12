const textElement = document.querySelector('.text')

    setInterval(() => {
      textElement.style.animation = 'none'
      void textElement.offsetWidth
      textElement.textContent = textElement.textContent === 'A Web Developer' ? 'A Software Engineer' : 'A Web Developer'
      textElement.style.animation = 'typing 2s steps(20, end), cursor .4s step-end infinite alternate'
    }, 4000)
    
const changeTextElements = document.querySelectorAll('.change-text')

setInterval(() => {
  changeTextElements.forEach(element => {
    element.style.animation = 'none'
    void element.offsetWidth
    element.textContent = element.textContent === 'de Almeida' ? 'Mavroucakis' : 'de Almeida'
    element.style.animation = 'typing 2s steps(20, end), cursor .4s step-end infinite alternate'
  })
}, 4000)

const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => nav.classList.toggle("active"))

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    function hideNavList() {
        nav.classList.remove('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', hideNavList);
    });
});