let squareNum = 256
let side = 16
function sketch(squareNum) {
    for (i = 0; i < squareNum; i++) {
        const container = document.querySelector('#container');
        const square = document.createElement('div');
        square.classList.add('square')
        container.appendChild(square);
    }
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseenter', function(){
            event.target.style.backgroundColor = 'black';
        
        });
    });
}
sketch(squareNum);



document.getElementById('clrBtn').addEventListener('click', function(){
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
    });
    side = prompt('How many squares per side?');
    squareNum = side ** 2;
    document.querySelectorAll('.square').forEach(square => {
        container.removeChild(square);
    });
    sketch(squareNum);
    document.querySelector('#container').style.gridTemplateRows = `repeat(${side}, 1fr)`;
    document.querySelector('#container').style.gridTemplateColumns = `repeat(${side}, 1fr)`;
});

document.getElementById('colrBtn').addEventListener('click', function(){
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseenter', function(){
            event.target.style.backgroundColor = 'hsl(' + 360 * Math.random() + ', 100%, 50%)';
        });
    });
});

document.getElementById('addBtn').addEventListener('click', function(){
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
        let perCol = 100
        square.addEventListener('mouseenter', function(){
            
            event.target.style.backgroundColor = `hsl(0, 0%, ${perCol -= 10}%)`;
            console.log('mouse');
        });
    });
});