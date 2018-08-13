exports.add = (x,y) =>{
  if(isNaN(x+y)){
    return null;
  }
  return x+y;
};

exports.sub = (x,y) =>{
  if(isNaN(x-y)){
    return null;
  }
  return y-x;
};