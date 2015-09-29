Binary search tree
------------------
Tree is a non-linear datastructure, for storing hierarchical data. Binay tree is a special kind of tree with each of the node with atmost two children.

Properites or Invariant
-----------------------

- The left subtree of a node only contains values that are less than or equal to the node's value.
- The right subtree of a node olny contains values that are greater or equal than the node's value.
- The left and right subtree of all the nodes are also binary tree.

Empty bst
---------

bst { root: null }

                            null

Insert 23
----------

bst { root: node { data: 23, left: null, right: null } }


                           23

Insert 11
----------

bst {
  root:
   node {
     data: 23,
     left: node { data: 11, left: null, right: null },
     right: null }
   }

                           23
                         /
                      11

Insert 27
----------

bst {
  root:
   node {
     data: 23,
     left: node { data: 11, left: null, right: null },
     right: node { data: 27, left: null, right: null } }
    }


                               23
                             /    \
                          11       27

Insert 6
---------
bst {
  root:
   node {
     data: 23,
     left: node { data: 11, left: node { data: 6, left: null, right: null }, right: null },
     right: node { data: 27, left: null, right: null } }
    }

                              23
                            /    \
                          11       27
                        /
                      6
Insert 25
-----------
bst {
  root:
   node {
     data: 23,
     left: node { data: 11, left: node { data: 6, left: null, right: null }, right: null },
     right: node { data: 27, left: node { data: 25, left: null, right: null }, right: null } }
    }

                              23
                            /    \
                         11       27
                       /         /
                     6         25

Insert 12
----------
bst {
  root:
   node {
     data: 23,
     left: node { data: 11, left: node { data: 6, left: null, right: null }, right: node { data: 12, left: null, right:null}},
     right: node { data: 27, left: node { data: 25, left: null, right: null }, right: null } }
    }

                              23
                          /       \
                         11       27
                       /    \   /
                     6      12 25

Insert 28
---------
bst {
  root:
   node {
     data: 23,
     left: node { data: 11, left: node { data: 6, left: null, right: null }, right: node { data: 12, left: null, right:null}},
     right: node { data: 27, left: node { data: 25, left: null, right: null }, right: node { data: 25, left: null, right: null } } }
    }




                               23              Level 0
                             /    \

                          11        27         Level 1
                        /    \    /     \

                     6        12 25      28    Level 2

Algorithms
----------

1. Breadth-first traversal (Level-order traversal)
--------------------------------------------------
      23 11 27 6 12 25 28

2. Depth-first traversal
-------------------------
      With depth first traversal, visitng a child is vising all the nodes in that specific direction.

          root, left, right  (preorder traversal)
          left, root, right  (Inorder traversal)
          left, right, root  (postorder traversal)

3. Find min o(h)
----------------

4. Find max o(h)
-----------------
