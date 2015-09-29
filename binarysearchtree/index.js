var bst = require('./lib/bst');
var inorder = require('./utils/inorderTraversal');


var tree = new bst();
tree.insert(23);
tree.insert(11);
tree.insert(27);
tree.insert(25);
tree.insert(28);
tree.insert(6);
tree.insert(12);
// console.log(tree);
console.log("----Inorder traversal----")
inorder(tree.root);
