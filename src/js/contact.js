var config = {
    apiKey: "AIzaSyC5_FqfS77M5S_F_wKk5HIvECF4f-LXXGw",
    authDomain: "personal-portfolio-5e9f9.firebaseapp.com",
    databaseURL: "https://personal-portfolio-5e9f9-default-rtdb.firebaseio.com/",
    projectId: "personal-portfolio-5e9f9",
    storageBucket: "personal-portfolio-5e9f9.appspot.com",
    messagingSenderId: "308828604116"
};
firebase.initializeApp(config);
  
var messagesRef = firebase.database().ref('messages');
  
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
  
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    saveMessage(name, company, email, phone, message);
  
    document.querySelector('.alert').style.display = 'block';
  
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
  
    document.getElementById('contactForm').reset();
}
  
function getInputVal(id){
    return document.getElementById(id).value;
}
  
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
  