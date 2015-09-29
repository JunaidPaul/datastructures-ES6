'use strict';

class node{
  constructor(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show(){
    return this.data;
  }
}

class bst {
  // Initialize with empty binary search tree
  constructor(){
    this.root = null;
  }
  insert(data){
      var n = new node(data, null, null);
      if (this.root == null) {
        this.root = n;
      }else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
            current = current.left;
            if (current == null) {
              parent.left = n;
              break;
           }
          }else {
            current = current.right;
            if (current == null) {
            parent.right = n;
            break;
          }
        }
      }
   }
  }
  update(){
    // todo
  }
  delete(data){
    // todo
  }
}

module.exports = bst;
