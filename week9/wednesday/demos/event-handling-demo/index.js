document.addEventListener("DOMContentLoaded", e => {
    console.log(e);
    // phase 1
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    document.getElementById("click-me").addEventListener("click", e => {
        console.log(e.type);
        modal.style.display = "flex";
        modalContent.style.display = "flex";
        modalContent.innerHTML = `
            <h2>Subscribe to our newsletter</h2>
            <form id="my-form" action="/users" method="POST">
                <div id="message"></div>
                <div id="inputs-container">
                    <label for="email">Email</label>
                    <input type="text" name="email">
                    <label for="name">Name</label>
                    <input type="text" name="name">
                </div>
                <button>Submit</button>
            </form>
        `;

        // phase 4
        const submitCb = e => {
            const inputVal = document.querySelector("input").value;
            if (!inputVal.includes('@') || !inputVal.includes('.com')) {
                e.preventDefault();
                alert('Invalid email');
            }
        }

        const form = document.getElementById("my-form");
        form.addEventListener("submit", submitCb);

        const container = document.getElementById("inputs-container");
        const messageContainer = document.getElementById("message");
        container.addEventListener("input", e => {
            if (e.target.value.length === 0) {
                const message = document.createTextNode(`Please fill up the ${e.target.name} field`);
                const p = document.createElement('p');
                p.appendChild(message);
                messageContainer.appendChild(p);
            }
        })

        
    });

    // phase 2
    modal.addEventListener("click", e => {
        console.log(e.target);
        console.log(e.currentTarget);
        modal.style.display = "none";
    });

    // phase 3
    modalContent.addEventListener("click", e => {
        e.stopPropagation();
    });


});
