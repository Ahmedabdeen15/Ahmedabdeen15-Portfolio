/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navclose = document.getElementById('nav-close')


/*=============== validate if constant exists ===============*/
if (navToggle){
    navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
    })
}


/*=============== validate if constant exists ===============*/
if (navclose){
    navclose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
    })
}   

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' ,linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header') 
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader) 

/*=============== EMAIL JS ===============*/
const content_Form = document.getElementById('contact-form'),
    content_message = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.sendForm('service_f84gpb7', 'template_rj83rbs', '#contact-form','5LOaCugdX_NzN06Xi')
                    .then(function() {
                        content_message.textContent = 'Message sent successfully ✔'

                        setTimeout(()=>{
                            content_message.textContent = ''
                        },5000)
                        content_Form.reset()
                    }, function(error) {
                        content_message.textContent = 'Message sent failed ❌'
                    });
}

content_Form.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
 const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll'):
    scrollUp.classList.remove('show-scroll')
 }
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section=document.querySelectorAll('section[id]')

const scrollActive=()=>{
    const scrollY = window.scrollY

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollY > sectionTop && scrollY<= sectionTop +sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
