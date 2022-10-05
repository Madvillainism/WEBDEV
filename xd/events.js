const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

console.log(randColor());

let col = randColor();

document.body.style.backgroundColor = col;


document.querySelector("html").addEventListener('click', () =>{
    document.body.style.backgroundColor = randColor();
    console.log(randColor());
})

