// const box = document.getElementById('father');
// console.log(box);
// box.addEventListener('mouseover', () => {
//     box.style.visibility = 'hidden';
//     setTimeout(() => {box.style.visibility = 'visible';}, 1000);
// });

let display_window = document.getElementsByClassName('display-window')[0];
let text_display = document.getElementById('text-display');
let rec_content = ['konosuba.html', 'interstellar.html', 'eminence_in_shadow.html', 'deathnote.html'];
async function createRecommendations()
{
    for(let i = 0; i < rec_content.length; i++)
    {
        let parent_div = document.createElement('div');
        let child_a = document.createElement('a');
        parent_div.setAttribute('class', 'recommendation');
        child_a.setAttribute('href', rec_content[i]);
        child_a.appendChild(document.createTextNode(rec_content[i]));
        parent_div.appendChild(child_a);
        await setTimeout(() => {display_window.appendChild(parent_div)}, i * 2000);
    }
}

display_window.addEventListener('mouseover', () => {
    let recom_children = display_window.childNodes;
});

// createRecommendations();

setTimeout(() => {
    let mov_elem = document.getElementsByClassName('animation_adapt_test')[0];
    // mov_elem.style.animation = 'ani-style-test2 5s ease-in-out';
    mov_elem.style.animationPlayState = 'paused';
    mov_elem.style.animationDirection = 'reverse';
    mov_elem.style.animationPlayState = 'running';
}, 2000);

