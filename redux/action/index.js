export const addToCart = (item)=>{
  return{
    type: 'ADDITEM',
    payload: item
  }
}

export const deleteFromCart = (item)=>{
  return{
    type: 'DELETEITEM',
    payload: item
  }
}