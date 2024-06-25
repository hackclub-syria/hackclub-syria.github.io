let phrase = ["what we like.", "what we love.", "nerdy af things.", "cool games.", "sick websites."];
let type_writer = document.getElementById("type-writer");
let cursor = document.getElementById("cursor");
let i = 0, start = 1;
function type(ii, i){
    if(i < phrase[ii].length){
        type_writer.innerHTML += phrase[ii][i];
        setTimeout(type, 50, ii, i+1);
    }
}
function del(){
    if(type_writer.innerText.length != 0){
        type_writer.innerText = type_writer.innerText.slice(0,-1);
        setTimeout(del, 50);
    }
}
async function all(){
    await type(i, 0);
    setTimeout(del,3200);
    ++i; i %= phrase.length;
}
async function init(){
    await setTimeout(all, 500); 
    setInterval(all, 4500);
} init();

let red_var = getComputedStyle(document.querySelector(':root')).getPropertyValue('--red');
function on(){
    cursor.style.opacity = "1";
}
function off(){
    cursor.style.opacity = "0"
}
function cur(){
    on();
    setTimeout(off, 400);
    setTimeout(cur, 800);
}
cur();