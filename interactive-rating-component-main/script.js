let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')

let submit = document.getElementById('submit')

let aval 

btn1.onclick = function() {
    aval = btn1.value
    console.log(aval)
}
btn2.onclick = function() {
    aval = btn2.value
    console.log(aval)
}
btn3.onclick = function() {
    aval = btn3.value
}
btn4.onclick = function() {
    aval = btn4.value
}
btn5.onclick = function() {
    aval = btn5.value
}

submit.onclick = function() {
    if(aval !== undefined){
    document.getElementById('display').innerHTML = aval
    document.getElementById('pg1').style.display = 'none'
    document.getElementById('pg2').style.display = 'inline'
    }
}