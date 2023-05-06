const nameModalBackground = document.querySelector('.nameModalBackground');
const nameModal = document.querySelector('.nameModal');
const nameInput = document.querySelector('#floatingInput');
const nameForm = document.querySelector('.nameForm');
const nameInfo = document.querySelector('.nameInfo');

// In the Navbar
const userName = document.querySelector('.userName');


// Collecting the user's name, saving it to session storage and removing the modal when done
nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  userName.innerHTML = "Hi, " + nameInput.value;
  sessionStorage.setItem('username', nameInput.value);

  nameModal.setAttribute('class', 'disappear');
  nameModalBackground.setAttribute('class', 'disappear');
});


// Specifying that only the first name is to be written in the input field
nameInput.addEventListener('keyup', (e)=>{
  if(e.key == ' '){
    nameInfo.innerHTML = "Enter your first name only";
    nameInfo.style.color = 'red';
    nameInfo.style.fontWeight = '700';

    setTimeout(()=>{
      nameInfo.innerHTML = "For a better personalized experience";
      nameInfo.style.color = 'gray';
    },2000);
  }
});

// Getting the value of the session storage iteem
let retrieveName = sessionStorage.getItem('username');

// Using the item in the session storage when the page is reloaded
if(retrieveName){
  nameModal.setAttribute('class', 'disappear');
  nameModalBackground.setAttribute('class', 'disappear');
  userName.innerHTML = "Hi, " + retrieveName;
  window.onload = () => {
  }
} else {
  window.onload = () => {
  }
}