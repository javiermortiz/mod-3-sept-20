// Making buttons interactive

// Add dog button
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        // URL of new dog image
        const url = data.message;

        console.log(url);
        // Get breed (Hint: Parse from URL)
        /*
        https://images.dog.ceo/breeds/spaniel-cocker/bella1.jpeg
        [https:, '', images.dog.ceo, breeds, spaniel-cocker, bella1.jpeg]
        */
        const breed = url.split('/')[4];

        const ul = document.getElementsByTagName("ul")[0];
        ul.innerHTML += `
            <li>
                <figure>
                    <img src="${url}">
                    <figcaption>${breed}</figcation>
                </figure>
            </li>
        `
        // // Create element to inject 
        // const newDog = document.createElement("li");
        // // <li></li>
        // const newFigure = document.createElement("figure");
        // // <figure></figure>
        // const newImg = document.createElement("img");
        // // <img>
        // newImg.src = url;
        // // <img src='https://images.dog.ceo/breeds/spaniel-cocker/bella1.jpeg'>
        // const newCaption = document.createElement("figcaption");
        // // <figcaption></figcaption>
        // newCaption.innerText = breed;
        // // <figcaption>spaniel-cocker</figcaption>
        // newFigure.appendChild(newImg);
        // // <figure><img src='https://images.dog.ceo/breeds/spaniel-cocker/bella1.jpeg'></figure>
        // newFigure.appendChild(newCaption);
        // // <figure><img src='https://images.dog.ceo/breeds/spaniel-cocker/bella1.jpeg'><figcaption>spaniel-cocker</figcaption></figure>
        // newDog.appendChild(newFigure);
        // /*
        // <li>
        //     <figure>
        //         <img src='https://images.dog.ceo/breeds/spaniel-cocker/bella1.jpeg'>
        //         <figcaption>spaniel-cocker</figcaption>
        //     </figure>
        // </li>
        // */
        // // Inject element into correct location
        // const ul = document.getElementsByTagName("ul")[0];
        // ul.appendChild(newDog);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

// Remove first dog button
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    // Select first dog
    const firstDog = document.querySelector("li");

    // Remove
    if (firstDog) {
        firstDog.remove();
    } else {
        console.log("No dogs left!! :(")
    }
});

// Remove last dog button
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    // Select last dog
    const allDogs = document.querySelectorAll("li");
    let lastDog;
    if(allDogs.length > 0) {
        lastDog = allDogs[allDogs.length - 1];
    }

    // Remove
    if (lastDog) {
        lastDog.remove();
    } else {
        console.log("No dogs left!! :(")
    }
});
