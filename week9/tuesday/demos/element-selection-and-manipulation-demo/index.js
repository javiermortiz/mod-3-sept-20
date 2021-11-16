window.onload = () => {
    document.getElementById("click-me").addEventListener("click", ev => {
        // const ball = document.getElementById("ball");
        // console.log(ball);
        // ball.classList.add("red-ball");
        
        // const instructor = document.querySelector(".instructor");
        // console.log(instructor);
        // instructor.style.color = "red";

        // const instructors = document.querySelectorAll(".instructor");
        // console.log(instructors);
        // instructors.forEach(instructor => {
        //     instructor.style.color = "red";
        // });

        // using innerHTML
        const playground = document.getElementById("playground");
        playground.innerHTML += `
            <h2 class='red'>Hope you enjoyed the demo!</h2>
            <img 
                src='https://p4.wallpaperbetter.com/wallpaper/70/625/78/animal-baby-cute-dog-wallpaper-preview.jpg'
            >
        `;
    
        // using elements and nodes
        // const h2 = document.createElement('h2');
        // // <h2></h2>
        // const title = document.createTextNode('Hope you enjoyed the demo!!!!!')
        // // Hope you enjoyed the demo
        // h2.appendChild(title);
        // // <h2>Hope you enjoyed the demo</h2>
        // h2.classList.add('red');
        // // <h2 class="red">Hope you enjoyed the demo</h2>
        // const img = document.createElement('img');
        // // <img>
        // img.src = 'https://p4.wallpaperbetter.com/wallpaper/70/625/78/animal-baby-cute-dog-wallpaper-preview.jpg';
        // // <img src="https://p4.wallpaperbetter.com/wallpaper/70/625/78/animal-baby-cute-dog-wallpaper-preview.jpg">
        // playground.prepend(img);
        // // <div id="playground"><h2 class="red">Hope you enjoyed the demo</h2><img src="https://p4.wallpaperbetter.com/wallpaper/70/625/78/animal-baby-cute-dog-wallpaper-preview.jpg"></div>
        // playground.appendChild(h2);
    });


}
