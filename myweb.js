const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
//const myContact = document.getElementsByClassName('btn-warning');

//myContact.addEventListener("click", function(){
        
       // var socialMedia = ['Messenger ', 'Instgram' , 'Whatsaap']
       // for ( var i=0; i<=socialMedia.length -1; i= i+1) {
          //  print(socialMedia[i])
            
      //  }
//})
//function print(name){
   // var newList = document.createElement('li');
    //newList.innerHTML = name;
    //result.appendChild(newList)
//}



myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {

        msg.classList.add('error');
        msg.innerHTML = ('plaese enter all fields');

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`$
        {nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}