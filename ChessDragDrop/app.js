const king = document.querySelector('.chess-piece')
const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector('#info')

king.addEventListener('drag', dragging)
king.addEventListener('dragstar', dragStart)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
}) 



let beingDragged;

function dragging(){
infoDisplay.textContent = 'You are dragging a ' + beingDragged
}


function dragStart(e) {
    beingDragged = e.target
    console.log(beingDragged)
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.target.append(beingDragged)
  
}