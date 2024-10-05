
document.getElementById("btn").addEventListener('click',function () {
    console.log('clecked');
    var boy = document.getElementById("boy").value;
    console.log(boy);
    var girl = document.getElementById("girl").value;
    var count = boy.length + girl.length;
    console.log(count);
    var y = count % 100;
    var z = Math.floor(Math.random()*10);
    document.getElementById("div").innerText = y+z+"%";
});