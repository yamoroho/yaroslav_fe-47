function even() {
  number = 1;

  document.getElementById('even').innerHTML = " ";

  while (number < 100) {

  document.getElementById('even').innerHTML += number + " ";

  number+=2;   

  }
  
}