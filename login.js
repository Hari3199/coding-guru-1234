const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit_btn = document.getElementById("submit-btn");
const url = "https://mock-api-template-j6kc.onrender.com/register";
const baseurl = `https://mock-api-template-j6kc.onrender.com/`;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});
async function handleSubmit(){
  try {
    let res = await fetch(`${url}`);
    let data = await res.json();
    console.log(data);
    let f = data.filter((ele) => {
      if (ele.email == email.value.trim() && ele.password == password.value.trim()) {
        return ele;
      }
    });
    if (f.length > 0) {
      localStorage.setItem("user",JSON.stringify(f));
      console.log(f[0].id)
      window.location.href = "registation2.html";
    } else {
      window.location.href = "signup.html";
      alert("your are doing somthing wrong")
    }
  } catch (err) {
    console.log(err);
  }
}