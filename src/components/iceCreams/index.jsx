import { useDispatch, useSelector } from "react-redux";
import { iceCreamActions } from "../store/action";

const IceCreams = () => {
  const noOfItems = useSelector((state) => state);
  const dispatch = useDispatch();
  const { noOfIceCreamsMade, noOfIceCreamsSold } = noOfItems;

  return (
    <>
      <p>Ice-Creams made - {noOfIceCreamsMade}</p>
      <p>Ice-Creams sold - {noOfIceCreamsSold}</p>
      <p>Ice-creams available - {noOfIceCreamsMade - noOfIceCreamsSold}</p>
      <button onClick={() => dispatch(iceCreamActions("buy-ice-cream"))}>
        Buy Ice-Creams
      </button>
      <button onClick={() => dispatch(iceCreamActions("make-ice-cream"))}>
        Make Ice-Creams
      </button>
    </>
  );
};
export default IceCreams;
