let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const form = document.getElementById('contactForm');

form.addEventListener( "submit" , async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phonenumber').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };
    const jsonText = JSON.stringify(formData);

    console.log("transform Data to JSON", jsonText);

    try{
        const response = await fetch('https://formspree.io/f/xvzykrdp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonText
        });
        if(response.ok){
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Failed to send the message. Server error.');
        }
        }
        catch(error){
            console.error('Error during fetch:', error);
            alert('Could not connect to the server.');
        }
    
})