class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new BinaryTreeNode(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;

            while (current) {
                if (data < current.data) {
                    if (current.left) {
                        current = current.left;
                        continue;
                    } else {
                        current.left = newNode;
                        break;
                    }
                }
                if (data >= current.data) {
                    if (current.right) {
                        current = current.right;
                        continue;
                    } else {
                        current.right = newNode;
                        break;
                    }
                }
            }
        }
    }

    contains(value) {
        return this.get(value) ? true : false;
    }

    get(value, node = this.root) {
        if (!node) {
            return null;
        }
        if (value === node.data) {
            return node;
        }
        if (value < node.data) {
            return this.get(value, node.left);
        }
        if (value > node.data) {
            return this.get(value, node.right);
        }
        return null;
    }

    traversal(node = this.root) {
        let result = "";
        if (node) {
            result += this.traversal(node.left);
            result += ' ' + node.data;
            result += this.traversal(node.right);
        }
        return result;
    }

    remove(value, node = this.root) {
        if (!node) {
            return null;
        } else if (value > node.data && node.right) {
            node.right = this.remove(value, node.right);
        } else if (value < node.data && node.right) {
            node.left = this.remove(value, node.left);
        } else if (value === node.data) {
            if (node.left && node.right) {
                node.data = this.findMinValue(node.right);
                node.right = this.remove(node.data, node.right);
            } else {
                node = node.left || node.right;
            }
        }
        return node;
    }

    remove2(value, root = this.root) {
        let node = this.get(value, root);

        if (!node) {
            return null;
        } else if (value === node.data) {
            if (node.left && node.right) {
                node.data = this.findMinValue(node.right);
                node.right = this.remove2(node.data, node.right);
            } else {
                let newNode = node.left || node.right;
                node.data = newNode.data;
                node.left = newNode.left;
                node.right = newNode.right;
            }
        }
        return this.root;
    }

    findMinValue(node = this.root) {
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    findMaxValue(node = this.root) {
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}