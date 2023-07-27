setInterval(() => {
    x = new Date().getHours();
    y = new Date().getMinutes();
    z = new Date().getSeconds();
    a = ((x / 24 + y / 1440 + z / 86200) * 720);
    b = ((y / 60 + z / 3600) * 360);
    c = (z / 60 * 360);
    document.getElementById("hour").style.rotate = ` ${a}deg `;
    document.getElementById("minute").style.rotate = `${b}deg`;
    document.getElementById("second").style.rotate = `${c}deg`;
}, 1000);


setInterval(() => {
    p = new Date().getHours();
    q = new Date().getMinutes();
    r = new Date().getSeconds();
    document.getElementById('hours').innerHTML = p + " : ";
    document.getElementById('minutes').innerHTML = q + " : ";
    document.getElementById('seconds').innerHTML = r ;
}, 1000);


document.getElementById('switch1').addEventListener('click',function(){
    document.getElementById('wrapper_analog').style.display = "none";
    document.getElementById('wrapper_digital').style.display = "inherit";
})

document.getElementById('switch2').addEventListener('click',function(){
    document.getElementById('wrapper_analog').style.display = "inherit";
    document.getElementById('wrapper_digital').style.display = "none";
})