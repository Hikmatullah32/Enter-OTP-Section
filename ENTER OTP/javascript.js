const inputs = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index)=> {
    input.dataset.index = index;
    input.addEventListener("paste", handleOnPasteOtp);
    input.addEventListener("paste", handleOnPasteOtp);

});