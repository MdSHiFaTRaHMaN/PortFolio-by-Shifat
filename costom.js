 window.addEventListener("scroll",()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollY > 100)
 })


 const questions = document.querySelectorAll('.question');

 questions.forEach(question =>{
   question.addEventListener('click', ()=>{
      question.classList.toggle('open')

      const icon = question.querySelector('.plus-icon i');
      if(icon.className === "fa-solid fa-angles-right") {
         icon.className = "fa-solid fa-xmark";
      }else {
         icon.className = "fa-solid fa-angles-right";
      }
 })
})



const menuBtn = document.querySelector(".open-menu-btn")
const navList = document.querySelector("#menu")
const closeBtn = document.querySelector(".close-menu-btn");

menuBtn.addEventListener("click", () =>{

   navList.style.display = "flex";
   menuBtn.style.display = "none"
   closeBtn.style.display = "inline-block"

})
closeBtn.addEventListener("click" , ()=>{
   navList.style.display= "none"
   closeBtn.style.display = "none"
   menuBtn.style.display = "inline-block"
})

// send email massage

// function sendEmail(){
//    Email.send({
//       Host : "smtp.gmail",
//       Username : "mdshifathossain685@gmail.com",
//       Password : "5E7977F9CCD1484A76676F28EE948D0AB093",
//       To : 'copyremc4@gmail.com',
//       From : "mdshifathossain685@gmail.com",
//       Subject : "New Contact Massage",
//       Body : "And this is the body"
//   }).then(
//     message => alert(message)
//   );
// }