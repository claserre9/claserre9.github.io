function sendEmail() { 
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        swal("Good job!", "You clicked the button!", "success")
    );
} 

$( "#contactForm" ).submit(function( e ) {
    swal("Good job!", "You clicked the button!", "success")
    e.preventDefault();
  });