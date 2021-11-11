document.addEventListener('DOMContentLoaded', e => {
    const likeButtons = document.getElementsByTagName('button');
    Array.from(likeButtons).forEach(button => {
        button.addEventListener('click', async e => {
            console.log('here', e.target.innerText);
            const dogId = e.target.id.split('-')[1];
            if (e.target.innerText === 'Unlike') {
                console.log('inside');
                const res = await fetch(`/api/dogs/${dogId}/like`, {
                    method: 'DELETE'
                });
                if (res.ok) {
                    e.target.innerText = 'Like';
                    const li = document.querySelector(`li#${e.target.id}`);
                    const body = await res.json();
                    const span = document.querySelector(`.heart-${e.target.id}`);
                    span.remove();
                }
                return;
            }
            
            const res = await fetch(`/api/dogs/${dogId}/like`, {
                            method: 'POST'
                        });
            if (res.ok) {
                e.target.innerText = 'Unlike';
                const li = document.querySelector(`li#${e.target.id}`);
                const body = await res.json();
                const newSpan = document.createElement('span')
                const newInnerText = document.createTextNode(body);
                newSpan.appendChild(newInnerText);
                newSpan.classList.add(`heart-${e.target.id}`)
                li.appendChild(newSpan);
            }
            return;
        });
    });
});