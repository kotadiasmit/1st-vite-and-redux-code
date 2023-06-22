import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "../store/action";

const Cakes = () => {
  const noOfItems = useSelector((state) => state);
  const dispatch = useDispatch();
  const { noOfCakesMade, noOfCakesSold } = noOfItems;
  const available = noOfCakesMade - noOfCakesSold;

  return (
    <>
      <p>Cakes made - {noOfCakesMade}</p>
      <p>Cakes sold - {noOfCakesSold}</p>
      <p>Cakes available - {noOfCakesMade - noOfCakesSold}</p>
      <button
        onClick={() => dispatch(cakeActions("buy-cake"))}
        disabled={!available}
      >
        Buy Cake
      </button>
      <button
        onClick={() => dispatch(cakeActions("make-cake"))}
        disabled={available >= 40}
      >
        Make Cake
      </button>
    </>
  );
};
export default Cakes;
