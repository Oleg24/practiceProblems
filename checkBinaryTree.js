// write a function to check that binary tree is a valid binary search tree 

function BinaryTreeNode(value) {
	      this.value = value;
	      this.left  = null;
	      this.right = null;
  }

BinaryTreeNode.prototype.insertLeft = function(value) {
	this.left = new BinaryTreeNode(value);
	return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
	    this.right = new BinaryTreeNode(value);
	    return this.right;
};

function checkBinaryTree(root){
	var bstree = true;
	var rootValue = root.value;

	if (root.left.value > root.value) {
		return bstree = false;
	} else if (root.right.value < root.value) {
		return bstree = false 
	} else if (root.left){
		return checkBinaryTree(root.left)
	} else if (root.right){
		return checkBinaryTree(root.right)
	}
	return bsTree; 
}


function bstChecker(treeRoot) {

    // start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
    var nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({node: treeRoot, lowerBound: -Infinity, upperBound: Infinity});

    // depth-first traversal
    while (nodeAndBoundsStack.length) {
        var nodeAndBounds = nodeAndBoundsStack.pop();
        var node = nodeAndBounds.node,
            lowerBound = nodeAndBounds.lowerBound,
            upperBound = nodeAndBounds.upperBound;

        // if this node is invalid, we return false right away
        if (node.value < lowerBound || node.value > upperBound) {
            return false;
        }

        if (node.left) {
            // this node must be less than the current node
            nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});

        }
        if (node.right) {
            // this node must be greater than the current node
            nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
        }
    }

    // if none of the nodes were invalid, return true
    // (at this point we have checked all nodes)
    return true;
}

bstCheckerRecursive(treeRoot, lowerBound, upperBound) => {
    let lowerBound = lowerBound || -Infinity,
        upperBound = upperBound || Infinity;

        if(!treeRoot)return true;
    

        if(treeRoot.value > upperBound || treeRoot.value < lowerBound){
            return false;
        }
        return bstCheckerRecursive(treeRoot.left, lowerBound, treeRoot.value) &&
            bstCheckerRecursive(treeRoot.right, treeRoot.value, upperBound);
}


