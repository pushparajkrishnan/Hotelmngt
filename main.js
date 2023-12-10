function add(){
    console.log("add");
    var num1=document.getElementById('num1').value;
    console.log(num1);

}

function submit(){
    const name='Pushparaj';
    const age= 29 ;
    const course= 'Full stack developement' ;

    document.getElementById('demo').innerHTML='Name is ' + name + ' and age is ' + age + ' and pursuing ' + course;
}

function food_name(){

    var food_name=document.getElementById('food_name').value;
    var quantity=document.getElementById('quantity').value;

    if (food_name=="chicken_rice"|| "egg_rice") 
    document.getElementById('total').innerHTML= (quantity*180);
else 

}

function total{
    const roomtype=document.getElementById(room).value;
    const checkin=document.getElementById(room).value;
    const checkout=document.getElementById(room).value;




}


function validateForm(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get form values
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    // Regular expressions for validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Clear previous error messages
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email address';
    }

    // Validate phone number
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerHTML = 'Invalid phone number (10 digits)';
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters long, contain at least one digit, one lowercase and one uppercase letter';
    }

    // If all validations pass, you can submit the form
    if (emailRegex.test(email) && phoneRegex.test(phone) && passwordRegex.test(password)) {
        document.getElementById('myForm').submit();
        
    }
}

// main.js
