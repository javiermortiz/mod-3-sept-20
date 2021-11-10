window.addEventListener("DOMContentLoaded", ev => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        darkMode();
    }
    const modes = document.querySelector("#modes");
    modes.addEventListener("click", ev => {
        const selection = ev.target.id;
        if (selection === "light") {
            lightMode();
        } else if (selection === "dark") {
            darkMode();
        }
        localStorage.setItem("mode", selection);
    });
    // !!START
    const res = fetch("/products")
    console.log(res);

    fetch("/products")
        .then(res => res.text())
        .then(txt => console.log(1, txt));

    (async function() {
        const res = await fetch("/products");
        const txt = await res.text();
        console.log(2, txt);
    })();

    fetch("/products", {
        method: "POST",
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(res => {
        console.log({
            status: res.status,
            location: res.headers.get('location'),
            redirected: res.redirected,
            url: res.url
        });
    })

    setTimeout(() => console.log("10 seconds passed"), 10*1000);
    function wait(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
    wait(10*1000).then(() => console.log("10 seconds passed"));
    // !!END
});

function lightMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "";
    h1.className = "";
    a.forEach(tag => tag.className = "");
    ul.className = "";
    button.className = "";
    li.forEach(tag => tag.className = "");
}

function darkMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "dark";
    h1.className = "dark";
    a.forEach(tag => tag.className = "dark");
    ul.className = "dark";
    button.className = "dark";
    li.forEach(tag => tag.className = "dark");
}