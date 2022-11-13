let fill = document.querySelector('.fill');
let empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', 'dragStart');
fill.addEventListener('dragenter', 'dragEnter');
fill.addEventListener('dragleave', 'dragLeave');
fill.addEventListener('dragend', 'dragEnd');


for (const empty of empties){
    empty.addEventListener('dragover', 'dragOver');
    empty.addEventListener('dragenter', 'dragEnter');
    empty.addEventListener('dragleave', 'dragLeave');
    empty.addEventListener('drop', 'dragDrop');
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => {this.className = ' invisible'}, 0);
};

function dragEnd(e) {
    this.className = ' fill'
};

function dragOver(e){
    e.preventDefault();
};

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered'
};

function dragLeave(e){
    this.className = ' empty';
}

function dragDrop(e){
    this.className = ' empty';
    this.append(fill);
}