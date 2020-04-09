import * as test from './exportTest.js';
import LinkedList from './linkedListNode.js';
import BinaryTree from './binaryTree.js';

// exportTest.js
{
    console.log(test.sum(10, 5));
    console.log(test.pi);
}

// linkedListNode.js
{
    let list = new LinkedList()
    list.add(1).add(2).add(3)
    
    console.log([...list])
    console.log(JSON.stringify(list))
}

//./binaryTree.js
{
    let tree = new BinaryTree();

    tree.add(40);
    tree.add(25);
    tree.add(78);
    tree.add(10);
    tree.add(32);
    tree.add(32);

    console.log(tree.traversal());
    
    tree.remove2(32);

    console.log(tree.traversal());
}