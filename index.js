const screen = document.getElementById('screen');
// console.log();

function toDisplay(show){
    screen.value += show;
}

function toclear(){
    screen.value = ""
}

function toRemove(){
    const screenValue = document.getElementById('screen').value;
    screenValue = document.getElementById('screen').value = screenValue.slice(0, -1);
    
}

function toequal(){
    screen.value = eval(screen.value)
}

function topercent(){
    const screenValue = document.getElementById('screen').value;
    document.getElementById('screen').value = (screenValue) / 100;
}

function racetopower(){
    screen.value = eval(screen.value * screen.value)
}
