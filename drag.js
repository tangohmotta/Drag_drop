
const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

var elem, cont
let dummy
for(const fill of fills){
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragdrop', dragDrop)
}

 //Loop through empties and call drag events
 for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
 }

// Drag Functions
function dragStart(){
    this.className += ' hold';
    elem = document.getElementById(this.id).childNodes[1].src 
    console.log(elem)
    cont = this.id
}
function dragEnd(){
 this.className = 'fill';

}
function dragOver(event){
    event.preventDefault()
}
function dragEnter(){
    
}
function dragLeave(){
    
}
function dragDrop(){
    dummy = this.childNodes[1].childNodes[1].src

    this.childNodes[1].childNodes[1].src = elem
    document.getElementById(cont).childNodes[1].src = dummy
}
