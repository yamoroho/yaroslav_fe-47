
var y = 0 ;
do{
var  salary;
salary = prompt('Cколько вы получаете за час работы?', '');
if (isNaN(salary)) {
  alert('Вы ввели некорректные данные.');
} else{
  alert('Ваша зарплата за месяц: ' + salary * 8 * 20); 
}

y = prompt('Если хотите выйти введите 1', '');
if (isNaN(y)) {
  alert('Вы ввели некорректные данные.');
} 

}
while (y != 1)
