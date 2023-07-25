// Most Used Method
function makeYellow(){
    document.body.style.backgroundColor= 'yellow';
}


const greenBtn = document.getElementById('green-btn');
greenBtn.onclick = makeGreen;
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
const blueBtn = document.getElementById('blue-btn');
blueBtn.onclick = function(){
    document.body.style.backgroundColor ='blue';
}
const pinkBtn = document.getElementById('pink-btn');
pinkBtn.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor= 'pink';
}
const khakiBtn = document.getElementById('khaki-btn');
khakiBtn.addEventListener('click', function(){
    document.body.style.backgroundColor= 'khaki';
})



// Most Used Method
document.getElementById('purple-btn').addEventListener('click', function(){
    document.body.style.backgroundColor= 'purple';
})

// Comment
