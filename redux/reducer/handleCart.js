const cart =[];

const handleCart =(state = cart, action)=>{
  const item =action.payload;

  switch (action.type) {
    case 'ADDITEM':
      console.log('add item to cart')      
      break;
    case 'DELETEITEM':
      console.log('delete item from cart')      
      break;
  
    default:
    return state;
      break;
  }
}

export default handleCart;