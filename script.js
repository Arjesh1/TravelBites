// registration details
let form = document.getElementById("regForm")

regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fName = "fName:"+document.getElementById("fName").value
    const lName = "lName:"+document.getElementById("lName").value
    const phone = "phone:"+document.getElementById("phone").value
    const email = "email:"+document.getElementById("email").value
    const password = "password:"+document.getElementById("password").value
console.log(fName);
console.log(lName);
console.log(phone);
console.log(email);
console.log(password);



})

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
