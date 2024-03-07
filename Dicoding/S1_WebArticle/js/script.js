var count = 1;
document.getElementById('rad' + count).checked = true;
count++;

setInterval(function(){
    document.getElementById('rad' + count).checked = true;
    count++;
    if(count > 3){
        count = 1;
    }
}, 4000);