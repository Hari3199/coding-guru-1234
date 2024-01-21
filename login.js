const form = document.querySelector("form");

const email = document.getElementById("email");
const password = document.getElementById("password");
const submit_btn = document.getElementById("submit-btn");
const url = "https://mock-api-template-j6kc.onrender.com/register";
const baseurl = `https://mock-api-template-j6kc.onrender.com/`;
submit_btn.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});
async function handleSubmit(e) {
  try {
    //preventing from form submitting

    // let obj = {
    //   email:email.value.trim(),
    //   password:password.trim(),
    // };

    let res = await fetch(`${url}`);
    let data = await res.json();
    console.log(data);
    let f = data.filter((ele) => {
      if (ele.email == email.value && ele.password == password) {
        return ele;
      }
    });
    if (f.length > 0) {
      window.location.href = "registaion2.html";
    } else {
      window.location.href = "signup.html";
    }
  } catch (err) {
    console.log(err);
  }
}
