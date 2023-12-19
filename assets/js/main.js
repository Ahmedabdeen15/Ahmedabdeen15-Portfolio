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

const
navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-nenu')
    navMenu.classlist.remove('show-nenu')
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


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
