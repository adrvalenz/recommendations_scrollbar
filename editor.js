// const box = document.getElementById('father');
// console.log(box);
// box.addEventListener('mouseover', () => {
//     box.style.visibility = 'hidden';
//     setTimeout(() => {box.style.visibility = 'visible';}, 1000);
// });

let display_window = document.getElementsByClassName('display-window')[0];
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

createRecommendations();