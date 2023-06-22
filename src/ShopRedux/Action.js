function AddToCart(data) {
  return {
    type: "AddToCart",
    payload: data,
  };
}
export default AddToCart;

export const RemoveFromCart = (data) => {
  return {
    type: "RemoveFromCart",
    payload: data,
  };
};
