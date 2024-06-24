function handleContact(event) {
    event.preventDefault()

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);

    const successContainer = document.getElementById("success-container")
    console.log(successContainer);
    
    const nameParagraph = document.createElement("p")
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


    // console.log(event.target.name.value);
    // console.log(event.target.email.value);

    //  console.log("contact");
    //  console.log(event.target.message.value);
    //  console.log(event.target);
    //  console.log(event.target.name);
    //  console.log(event.target.email);
    //  console.log(event.target.message);
}


// array of object
const imageArray = [
    {
        url: "./images/projects/image 3.jpg"
    },
    {
        url: "./images/projects/image 5.jpg"
    },
    {
        url: "./images/projects/image 6.jpg"
    },
    {
        url: "./images/projects/image 7.jpg"
    },
]

function handleShowMoreProjects() {
    const projectContainer = document.getElementById("projects");

    for (const item of imageArray) {
        // console.log(item);
        const projectDivImage = document.createElement('div');
        projectDivImage.innerHTML = `
            <img src="${item.url}" alt="">
        `
        projectContainer.appendChild(projectDivImage)

        console.log(projectDivImage);
    }
}










// const firstUrlObject = imageArray[0];
// const secondUrlObject = imageArray[1];

// console.log(imageArray);
// console.log(firstUrlObject);
// console.log(firstUrlObject.url);
// console.log(secondUrlObject);

// for (const items of imageArray){
//     console.log(items);
// }

// const imagesLength = imageArray.length;
// console.log(imagesLength);       

// const firstUrl = imageArray[0];
// console.log(firstUrl);   

// for (let index = 0; index < imagesLength; index++){
//     console.log(index);

//     console.log(imageArray[index]);
// }


