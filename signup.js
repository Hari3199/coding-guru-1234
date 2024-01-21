// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");
const url = "https://mock-api-template-j6kc.onrender.com/register";
const baseurl = `https://mock-api-template-j6kc.onrender.com/`;
// Function to display error messages
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};
form.addEventListener("submit", handleFormData);
// Function to handle form submission
async function handleFormData(e) {
  try {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const genderInput = document.getElementById("gender");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const gender = genderInput.value.trim();
    const phone = phoneInput.value.trim();
    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document
      .querySelectorAll(".form-group .error")
      .forEach((field) => field.classList.remove("error"));
    document
      .querySelectorAll(".error-text")
      .forEach((errorText) => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
      showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
      showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
      showError(passwordInput, "Enter your password");
    }

    if (gender === "") {
      showError(genderInput, "Select your gender");
    }
    if (phone === "") {
      showError(genderInput, "enter your phone");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;
    getUser(email);
    // Submitting the form
    // form.submit();
    let obj = {
      email,
      password,
      phone,
      gender,
      fullname,
      password,
    };
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();
    console.log(data, "post");
    alert("successfully");
  } catch (err) {
    console.log(err);
  }
}

// Toggling password visibility
passToggleBtn.addEventListener("click", () => {
  passToggleBtn.className =
    passwordInput.type === "password"
      ? "fa-solid fa-eye-slash"
      : "fa-solid fa-eye";
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

async function getUser(email) {
  try {
    let res = await fetch(`${url}`);
    let data = await res.json();
    console.log(data, "get function");
    let f = data.filter((ele) => {
      if (ele.email == email) {
        return ele;
      }
    });
    if (f.length > 0) {
      postInLogin(f);
      window.location.href = "login.html";
    }
    if (f.length > 0) {
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
// Handling form submission event

async function postInLogin(obj) {
  try {
    let res = await fetch(`${baseurl}login/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();
    console.log(data, "post login");
  } catch (err) {
    console.log(err);
  }
}
