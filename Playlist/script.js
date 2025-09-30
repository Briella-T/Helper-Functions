class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSong = null;
    }

    add(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.head.prev = this.tail;
        this.tail.next = this.head; 
    }
}


const playlist = new DoublyLinkedList();
playlist.add("Stubborn Love");
playlist.add("Strawberry Wine");
playlist.add("All my Love");
playlist.add("Cherry Wine");
playlist.add("we fell in love in october");
playlist.add("Coffee");
playlist.add("All Too Well");
playlist.add("Like Real People Do");
playlist.add("The Wisp Sings");
playlist.add("Skinny Love");

playlist.currentSong = playlist.head;


function updateDisplay() {
    const songNameEl = document.getElementById('song-name');
    songNameEl.textContent = playlist.currentSong.data;
}

function goToNextSong() {
    playlist.currentSong = playlist.currentSong.next;
    updateDisplay();
}

function goToPreviousSong() {
    playlist.currentSong = playlist.currentSong.prev;
    updateDisplay();
}

updateDisplay();

document.getElementById('prev-button').addEventListener('click', goToPreviousSong);
document.getElementById('next-button').addEventListener('click', goToNextSong);




