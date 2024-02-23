const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const phoneNumberPattern = /^(?:1\s?)?(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
checkBtn.addEventListener("click", () => {
  let phoneNumber = userInput.value;
  if (phoneNumber === "") {
    window.alert("Please provide a phone number");
  } else if (validatePhoneNumber(phoneNumber)) {
    resultsDiv.innerHTML = "Valid US number: " + phoneNumber;
  } else {
    resultsDiv.innerHTML = "Invalid US number: " + phoneNumber;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
});

const validatePhoneNumber = (phoneNumber) => {
  return phoneNumberPattern.test(phoneNumber);
};
