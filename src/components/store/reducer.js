const initialState = {
  noOfCakesMade: 15,
  noOfCakesSold: 0,
  noOfIceCreamsMade: 35,
  noOfIceCreamsSold: 0,
};

export const reducer = (state = initialState, { type }) => {
  switch (type) {
    case "buy-cake":
      return {
        ...state,
        noOfCakesSold: state.noOfCakesSold + 1,
      };
    case "make-cake":
      return {
        ...state,
        noOfCakesMade: state.noOfCakesMade + 1,
      };

    case "buy-ice-cream":
      return {
        ...state,
        noOfIceCreamsSold: state.noOfIceCreamsSold + 1,
      };
    case "make-ice-cream":
      return {
        ...state,
        noOfIceCreamsMade: state.noOfIceCreamsMade + 1,
      };

    default:
      return state;
  }
};
