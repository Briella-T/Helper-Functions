class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class SearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.leftChild) {
                node.leftChild = newNode;
            } else {
                this._insertNode(node.leftChild, newNode);
            }
        } else {
            if (!node.rightChild) {
                node.rightChild = newNode;
            } else {
                this._insertNode(node.rightChild, newNode);
            }
        }
    }

    search(data) {
        return this._searchNode(this.root, data);
    }

    _searchNode(node, data) {
        if (!node) {
            return null;
        }
        if (data === node.data) {
            return node;
        }
        return data < node.data
            ? this._searchNode(node.leftChild, data)
            : this._searchNode(node.rightChild, data);
    }
}