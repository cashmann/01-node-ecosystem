exports.add = (x,y) =>{
  if(typeof(x)!== 'number' || typeof(y)!== 'number'){
    return null;
  }
  if(isNaN(x+y)){
    return null;
  }
  return x+y;
};

exports.sub = (x,y) =>{
  if(typeof(x)!== 'number' || typeof(y)!== 'number'){
    return null;
  }
  if(isNaN(x-y)){
    return null;
  }
  return y-x;
};