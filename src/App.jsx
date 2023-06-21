import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cakes from "./components/cakes";
import IceCreams from "./components/iceCreams";
import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  return (
    <Provider store={store}>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>The Ice-Cream & Cake Shop</h1>
      <IceCreams />
      <Cakes />
    </Provider>
  );
}

export default App;
