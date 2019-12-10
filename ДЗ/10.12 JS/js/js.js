
var y = 54;
while(y = 1){
var  salary;
salary = prompt('Cколько вы получаете за час работы?', '');
if (isNaN(salary)) {
  alert('Вы ввели не корректные данные.');
} else{
  alert('Ваша зарплата за месяц: ' + salary * 8 * 20);
}
}
