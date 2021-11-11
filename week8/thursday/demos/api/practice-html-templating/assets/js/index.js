document.addEventListener('DOMContentLoaded', e => {
    console.log('here');
    const likeButtons = document.querySelectorAll('button');
    likeButtons.forEach(button => {
        button.addEventListener('click', async e => {
            const dogId = e.target.id.split('-')[1]
            const res = await fetch(`/dogs/${dogId}/like`, {
                            method: 'POST'
                        });
            if (res.ok) {
                e.target.disabled = true;
                e.target.innerText = 'Liked';
                const li = document.querySelector(`li#${e.target.id}`);
                const body = await res.json();
                li.innerHTML += body;
            }
        });
    });
});