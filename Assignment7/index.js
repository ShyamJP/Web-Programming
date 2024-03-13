let input = document.getElementById('num');
let btn = document.getElementById('btn');
let list = document.getElementById('list-num')
function fibonacci(){
    let a = 0;
    let b = 1;
    let c;
    let i=2;
    let n = input.value;
    let fib = [0];
    console.log(input.value);
    while(i<n){
        c = a + b;
        a = b;
        b = c;
        i++;
        fib.push(c);
    }
    console.log(fib);
    
    list.innerHTML = fib;
}
btn.addEventListener('click',fibonacci);