let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header Menu a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
           navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header Menu a[href*=' + id + ']').classList.add
            ('active');
           });  
        };
    });
};
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "lawanijeremiah23@gmail.com",
        Password : "*****",
        To : 'lawani_jeremiah@yahoo.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
