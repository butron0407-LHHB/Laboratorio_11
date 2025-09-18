//función que detecta clicks
document.addEventListener('DOMContentLoaded', () => {
  const clickH5 = document.querySelectorAll('h5.clickable');
  
  //se activa al hacer click en h5
  clickH5.forEach(h5 => {
    h5.addEventListener('click', () => {
        //Se define color
      h5.style.color = randomColor();
    });
  });
});

//función de color aleatorio
function randomColor() {
  const colores = ['green', 'blue', 'red'];
  //Se define color de forma aleatoria 
  const random = Math.floor(Math.random() * colores.length);
  return colores[random];
}