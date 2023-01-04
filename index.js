const submitButton = document.getElementById('submitButton');
const errorMsg = document.getElementById('errorMessage');
const inputBox = document.getElementById('emailId');
const validEmailFormat = /^[A-Za-z0-9][\w+]*@[A-Za-z0-9]{3,}\.[A-Za-z]{2,}$/i;

function validateEmailAddress() {
    const submittedEmailAddress = inputBox.value;    
    const isValidEmailAddress = validEmailFormat.test(submittedEmailAddress);

    if ((submittedEmailAddress.length === 0) || (!isValidEmailAddress)) {
           inputBox.style.border = '1px solid var(--Light-Red)';
           errorMsg.style.display = 'block';
        // return false;    
    } else {
        inputBox.style.border = '1px solid var(--Pale-Blue)';
        errorMsg.style.display = 'none';
        // return true;
    }
}

submitButton.onclick = () => {
validateEmailAddress();
}