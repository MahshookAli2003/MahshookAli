// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contactForm');
//     const formStatus = document.getElementById('form-status');

//     form.addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevents the default form submission and page redirect

//         const data = new FormData(e.target);

//         // Display a "sending" message
//         formStatus.textContent = 'Sending...';

//         fetch(e.target.action, {
//             method: 'POST',
//             body: data,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         }).then(response => {
//             if (response.ok) {
//                 formStatus.textContent = 'Thanks for your message!';
//                 form.reset(); // Clears the form fields
//             } else {
//                 response.json().then(data => {
//                     if (Object.hasOwn(data, 'errors')) {
//                         formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
//                     } else {
//                         formStatus.textContent = 'Oops! There was a problem submitting your form.';
//                     }
//                 })
//             }
//         }).catch(error => {
//             formStatus.textContent = 'Oops! There was a problem submitting your form.';
//         });
//     });
// });

// function sendMail(){
//     var params={
//         name:document.getElementById("names").value ,
//         email:document.getElementById("emails").value,
//          message:document.getElementById("message").value
//     }
//     const serviceID="";
// const templeteID=""

// emailjs.send(serviceID,templeteID,params)
// .then(
//     res=>{
//         document.getElementById("names").value="";
//         document.getElementById("emails").value="";
//         document.getElementById("message").value="";
//         console.log(res);
//         alert("message sent successfully")
//     }
// )
// .catch((err)=>console.log(err));
// }

function sendEmail(event) {
    event.preventDefault(); 
    let params = {
        name: document.getElementById('names').value,
        email: document.getElementById('emails').value,
        message: document.getElementById('message').value,
        phone: document.getElementById('phone').value
    };
    const serviceID = "service_i2agdpl";
const templateID = "template_v4ar0zt";
    emailjs.send(serviceID, templateID,params)
        .then(
            res => {
                document.getElementById('names').value = '';
                document.getElementById('emails').value = '';
                document.getElementById('message').value = '';
                document.getElementById('phone').value = '';
                console.log(res);
                alert("Your message has been sent successfully!");
            }
        )
        .catch(err => console.log(err));
}

