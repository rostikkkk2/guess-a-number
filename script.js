var rand_num = Math.floor(Math.random() * 100);
console.log(rand_num);

var ask;

var flag = false;
var number_of_attempts = 1;
while (flag == false){
  ask = +prompt("введите число от 1 до 100");
  if(ask > rand_num){
    alert("вы ввели больше число чем загаданное");
    number_of_attempts++;
  }else if (ask < rand_num){
      alert("вы ввели меньше число чем загаданное");
      number_of_attempts++;
  }else if (isNaN(ask)){
    alert("вы ввели буквы");
  }else if (ask == rand_num){
    alert("вы отгадали заданное число c " + number_of_attempts + " раза");
    number_of_attempts++;
    flag = true;
  }
}
