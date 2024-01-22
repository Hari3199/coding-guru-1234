const form = document.querySelector("form");
const url = "https://mock-api-template-j6kc.onrender.com/register";
const url2 = `https://mock-api-template-j6kc.onrender.com/students`;
const user = JSON.parse(localStorage.getItem("user"))||[];
const first_name = document.getElementById("f-name");
const last_name = document.getElementById("l-name");
const dateOfbirth = document.getElementById("dob");
const adharNumber = document.getElementById("s-adhar");
const gender = document.getElementById("gender");
const class_name = document.getElementById("class-name");
const admission_year = document.getElementById("admission-year");
const address = document.getElementById("address");
const nationality = document.getElementById("nationality");
const state = document.getElementById("state");
const district = document.getElementById("district");
const block_number = document.getElementById("block-number");
const word_number = document.getElementById("word-number");
const father_name = document.getElementById("father-name");
const mother_name = document.getElementById("mother-name");
const parents_email = document.getElementById("p-email");
const parents_phone = document.getElementById("p-phone");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  handleSubmit()
})
async function handleSubmit(){
    try{
        // let parents =user[0].id?user[0].id:"";
        if(user.length<1){
            alert("please login !")
             window.location.href="login.html";
             return;
        }else{
        let obj ={
         parentsId:user[0].id||"",
         father_name:father_name.value.trim(),
         mother_name:mother_name.value.trim(),
         first_name:first_name.value.trim(),
         last_name:last_name.value.trim(),
         dateOfbirth:dateOfbirth.value.trim(),
         adharNumber:adharNumber.value.trim(),
         gender:gender.value.trim(),
         class_name:class_name.value.trim(),
         admission_year:admission_year.value.trim(),
         address:address.value.trim(),
         nationality:nationality.value.trim(),
         state:state.value.trim(),
         district:district.value.trim(),
         block_number:block_number.value.trim(),
         word_number:word_number.value.trim(),
         parents_email:parents_email.value.trim(),
         parents_phone:parents_phone.value.trim()
        }
    }
        fetchStudents(adharNumber);
     let  res = await fetch(`${url2}`,{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(obj)
     });
     let data = await  res.json();
     console.log(data)
     alert("your admission form accepted");
      window.location.href="home.html";
    }catch(err){
console.log(err)
    }
}
        // nextBtn = form.querySelector(".nextBtn"),
       
        // allInput = form.querySelectorAll(".first input");
   
     async function fetchStudents(adharNumber){
        try{
        let res = await fetch(url2);
        let data  = await res.json();
        let f= data.filter((ele)=>{
            if(ele.adharNumber.trim()==adharNumber.value.trim()){
                return ele;
            }
        })
        if(f>0){
            alert("your are already applyed");
            return
        }
        console.log(data)
        }catch(err){
            console.log(err)
        }
     }  
   
// form.addEventListener("click", ()=> {
//     allInput.forEach(input => {
//         if(input.value != ""){
//             form.classList.add('secActive');
//         }else{
//             form.classList.remove('secActive');
//         }
//     })
// })

// backBtn.addEventListener("click", () => form.classList.remove('secActive'));
