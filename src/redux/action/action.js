export const addToWishlist = (product) => {
    // console.log(product)
    return {
      type: "ADDITEMTOWISHLIST",
      payload: product,
    };
  };
  
  export const delFromWishlist = (product) => {
    return {
      type: "DELITEMFROMWISHLIST",
      payload: product,
    };
  };