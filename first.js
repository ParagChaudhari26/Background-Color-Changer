// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');
// const body = document.body;
// document.querySelector('body');

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// })





// MORE OPTIMISED CODE THAN ABOVE CODE
// const buttons = document.querySelectorAll('button');    //returns nodelist containing all buttons
// const body = document.body;
// // console.log(buttons);

// buttons.forEach((button)=>{
   
//     button.addEventListener('click', ()=>{
//         body.style.backgroundColor = button.id;
//     })

// })






//MOST OPTIMISED CODE FOR THIS PROJECT USING CONCEPT OF EVENT DELIGATION AND EVENT BUBBLING 
const root = document.getElementById('root');


root.addEventListener('click',(event)=>{
    // console.log(event.target.tagName)
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
})


