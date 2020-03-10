var prNum, tempOut, min, max, minx, maxx,c;
var mymin = 1;
var mymax = 100; // верхняя граница
document.getElementById("mynum").setAttribute('min', mymin);
document.getElementById("mynum").setAttribute('max', mymax);
prNum = Math.floor((Math.random() * (mymax - mymin)+mymin));
var prCount = Math.ceil(Math.log2(mymax-mymin+1));
count.innerHTML = "Колличество попыток оставшихся попыток: "+prCount;
myspan.innerHTML = "от " + mymin + " до "  + mymax;
range.innerHTML = "Введите число от " + mymin + " до "  + mymax;
c=0;


function reset(){
    location.reload();
}

function f1(){
    //f2();out.innerHTML = "";
    var num, out;
    num = Number(document.getElementById('mynum').value);

    var Minnum = Number(Number(document.getElementById('mynum').getAttribute('min')));

    var Maxnum = Number(Number(document.getElementById('mynum').getAttribute('max')));
    max=Maxnum;
    min=Minnum;

        out = document.getElementById('out');


    if ((num<=Maxnum)&&(num>=Minnum) ) {
         //prCount--;
        c++;
        prCount = Number(prCount)-1;
        num = document.getElementById('mynum').value;
        if (prCount < 1 && num != prNum) {
            document.getElementById("ch").setAttribute("disabled", "disabled");
            document.getElementById("mynum").setAttribute("disabled", "disabled");
            count.innerHTML = "Колличество попыток оставшихся попыток: "+prCount;
            warning.innerHTML = "Вы проиграли! Загаданное число "+prNum+"!";
            if (num > prNum){
                out.innerHTML = 'Вы ввели число больше чем нужно';
            }
            else{out.innerHTML = 'Вы ввели число меньше чем нужно';}
        }
        else{
            if (num == prNum) {
                out.innerHTML = 'Вы угадали число. Поздравляю! Вам потребовалось '+c+' попыток. Если хотите повторить перезагрузите страницу. Ответ '+prNum;

            	document.getElementById("ch").setAttribute("disabled", "disabled");
            	document.getElementById("mynum").setAttribute("disabled", "disabled");
        		count.innerHTML = "Колличество попыток оставшихся попыток: "+prCount;
            }
            else if (num > prNum){
                out.innerHTML = 'Вы ввели число больше чем нужно';
                max = num;
                maxx=max;
        		if (max != null) {maxx = Number(maxx)-1;}
                range.innerHTML = "Введите число от " + nvl(minx,mymin) + " до "  + nvl(maxx,mymax);
                count.innerHTML = "Колличество попыток оставшихся попыток: "+prCount;
            }
            else if(num<prNum){
                out.innerHTML = 'Вы ввели число меньше чем нужно';
                min = num;
                minx=min;

        		if (minx != null) {minx = Number(minx)+1;}
                range.innerHTML = "Введите число от " + nvl(minx,mymin) + " до "  + nvl(maxx,mymax);
                count.innerHTML = "Колличество попыток оставшихся попыток: "+prCount;
            }

            document.getElementById("mynum").setAttribute('min', nvl(minx,min));
            document.getElementById("mynum").setAttribute('max', nvl(maxx,max));
            document.getElementById("mynum").value="";
        }

    }
	else{
        out.innerHTML ='число должно находиться в диапазоне от '+nvl(minx,mymin)+ ' до '+nvl(maxx,mymax);

	}
}
(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
 if (e.keyCode === 13) {
 // можете делать все что угодно со значением текстового поля
    f1();
 }
  });
})();
function f3(e) {
	// body...
	e=e||window.event;
	var key = e.which||e.keyCode;
	if (key===13) {tryRoQuessNumber();}

}
function nvl(value1,value2)
{
    if (value1 == null)
        return value2;
    return value1;
}
