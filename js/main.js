const jacket = document.querySelector('#jacket')
const mustard = document.querySelector('#mustard')


document.querySelector('#pants').addEventListener('click', makeAppear);
document.querySelector('#dress').addEventListener('click', makeAppear2);


function makeAppear(){
    jacket.classList.toggle('hidden')
    mustard.classList.add('hidden')
}

function makeAppear2() {
    jacket.classList.add('hidden')
    mustard.classList.toggle('hidden')
}