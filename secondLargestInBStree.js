function findLargest(node){
  if(node.right){
    return findLargest(tree.right)
  }
  return node.value
}

function findSecondLargest(rootNode){
  if(!node.right || !rootNode.left){
    throw new Error('must have at least 2 nodes to start')
  }

  var current = rootNode;

  while(current){
    if(current.left && !current.right){
      return findLargest(current.left)
    }
    if(current.right && !current.right.left && !current.right.right){
      return current.value;
    }
    current = current.right;
  }
}