function sendEmail(expeditor, message) { 
    Email.send({
        Host : "smtp.gmail.com",
        Username : "claserre9",
        Password : "jctqkgzfpkzvewgs",
        To : 'talmag9@gmail.com',
        From : expeditor,
        Subject : "Message from github.io",
        Body : message
    }).then(
        swal("Good job!", "You clicked the button!", "success")
    );
} 

$( "#contactForm" ).submit(function(e) {
    const data = $( this ).serializeArray()
    const expeditor = `${data[0].value} (Email : ${data[1].value} - Phone : ${data[2].value})`
    const message = `${data[3].value}`
    sendEmail(expeditor, message)
    swal("Thanks!", "Your message has been sent", "success")
    $(this).reset();
    e.preventDefault();
  });