function handleContact(event) {
    event.preventDefault()

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);

    // console.log(event.target.name.value);
    // console.log(event.target.email.value);

    //  console.log("contact");
    //  console.log(event.target.message.value);
    //  console.log(event.target);
    //  console.log(event.target.name);
    //  console.log(event.target.email);
    //  console.log(event.target.message);

    const successContainer = document.getElementById("success-container")
    console.log(successContainer);

    const nameParagraph =document.createElement("p")
    nameParagraph.innerText = `Your name : ${name}`;
    const emailParagraph = document.createElement("p")
    emailParagraph.innerText = `Your email : ${email}`
    const messageParagraph = document.createElement("p")
    messageParagraph.innerText = `Your massage : ${message}`

    console.log(emailParagraph);
    console.log(nameParagraph);
    console.log(messageParagraph);

    successContainer.appendChild(nameParagraph);
    successContainer.appendChild(emailParagraph);
    successContainer.appendChild(messageParagraph)    
}