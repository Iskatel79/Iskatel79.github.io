var prNum, tempOut, min, max, c;
var mymin = 1;
var mymax = 100; // верхняя граница
prNum = Math.floor((Math.random() * mymax) + mymin);
console.log(prNum);
var prCount = Math.round(Math.log(mymax-mymin+1));
count.innerHTML = "Колличество попыток оставшихся попыток: "+prCount;
myspan.innerHTML = "от " + mymin + " до "  + mymax;
range.innerHTML = "Введите число от " + mymin + " до "  + mymax;
c=0;

function f2(){
    c=0;
    mymin = document.getElementById('A').value;
    mymax = document.getElementById('B').value; // верхняя граница
    if (mymin == mymax) {
     mymin = document.getElementById('A').value =1;
     mymax = document.getElementById('B').value =100;
     alert('A и В не должны быть равны');
    }
    else{
        prNum = Math.floor((Math.random() * mymax) + mymin);
        prCount = Math.round(Math.log(mymax-mymin+1));
        count.innerHTML = "Колличество попыток оставшихся попыток: "+prCount;
        myspan.innerHTML = "от " + mymin + " до "  + mymax;
        range.innerHTML = "Введите число от " + mymin + " до "  + mymax;
    }
}
function f1(){
    //f2();
    var num, out;
    prCount--;
    c++;
    if (prCount <1) {
        warning.innerHTML = 'Вы проиграли!';
        document.getElementById("res").style.display = 'block';
        document.getElementById("A").setAttribute('disabled', 'disabled');
        document.getElementById("B").setAttribute('disabled', 'disabled');
        document.getElementById("mynum").setAttribute('disabled', 'disabled');
        document.getElementById("dip").setAttribute('disabled', 'disabled');
        document.getElementById("ch").setAttribute('disabled', 'disabled');
    }
    else if (prCount > 0) {
        num = document.getElementById('mynum').value;
        out = document.getElementById('out');

        if (num == prNum) {
            win.innerHTML = 'Вы угадали число. Поздравляю! Вам потребовалось '+c+' попыток. Если хотите повторить перезагрузите страницу.';

        document.getElementById("res").style.display = 'block';
        document.getElementById("A").setAttribute('disabled', 'disabled');
        document.getElementById("B").setAttribute('disabled', 'disabled');
        document.getElementById("mynum").setAttribute('disabled', 'disabled');
        document.getElementById("dip").setAttribute('disabled', 'disabled');
        document.getElementById("ch").setAttribute('disabled', 'disabled');
        }
        else if (num > prNum){
            out.innerHTML = 'Вы ввели число больше чем нужно';
            max = num;
        }
        else {
            out.innerHTML = 'Вы ввели число меньше чем нужно';
            min = num;
        }

        document.getElementById("mynum").setAttribute('min', min);
        document.getElementById("mynum").setAttribute('max', max);
    }
    count.innerHTML = "Колличество попыток оставшихся попыток: "+prCount;
    range.innerHTML = "Введите число от " + nvl(min,mymin) + " до "  + nvl(max,mymax);

}
function nvl(value1,value2)
{
    if (value1 == null)
        return value2;
    return value1;
}
function reset(){
    location.reload();
}

function check(e) {
  // Любой ваш код, в том числе сообщение об ошибке

  if (e.value > nvl(max,mymax)) {
    e.value = '';
    alert('больше максимума! Максимум: '+nvl(min,mymin));
  }

  if (e.value > nvl(max,mymax)) {
    e.value = '';
    alert('меньше минимума! Минимум: '+nvl(min,mymin));
  }
}

function check1(e) {
  // Любой ваш код, в том числе сообщение об ошибке

  if (e.value <1) {
    e.value = '';
    alert('А не должно быть равно или меньше 0!');
  }
}

/*function Encrypt(theText) {
    output = new String;
    Temp = new Array();
    Temp2 = new Array();
    TextSize = theText.length;
    for (i = 0; i < TextSize; i++) {
        rnd = Math.round(Math.random() * 122) + 68;
        Temp[i] = theText.charCodeAt(i) + rnd;
        Temp2[i] = rnd;
    }
    for (i = 0; i < TextSize; i++) {
        output += String.fromCharCode(Temp[i], Temp2[i]);
    }
    return output;
}
function unEncrypt(theText) {
    output = new String;
    Temp = new Array();
    Temp2 = new Array();
    TextSize = theText.length;
    for (i = 0; i < TextSize; i++) {
        Temp[i] = theText.charCodeAt(i);
        Temp2[i] = theText.charCodeAt(i + 1);
    }
    for (i = 0; i < TextSize; i = i+2) {
        output += String.fromCharCode(Temp[i] - Temp2[i]);
    }
    return output;
}*/
