// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('.parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';

// h1.classList.add('rojo');
// h1.classList.remove('verde');

// input.value = "456"
// const img = document.createElement('img');

// img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
// console.log(img);
// pid.innerHTML = "";
// pid.appendChild(img);


// Suma dinamica con HTML

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btginCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  // console.log({event});
//   event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}