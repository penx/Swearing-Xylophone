import "./xylophone.css";
import { playSound } from "./xylophone";

function App() {
  return (
    <div id="centreMe">
      <div id="xyloBorder">
        <div
          onClick={() => playSound(0)}
          className="xyloButton xyloButton1"
        ></div>
        <div
          onClick={() => playSound(1)}
          className="xyloButton xyloButton2"
        ></div>
        <div
          onClick={() => playSound(2)}
          className="xyloButton xyloButton3"
        ></div>
        <div
          onClick={() => playSound(3)}
          className="xyloButton xyloButton4"
        ></div>
        <div
          onClick={() => playSound(4)}
          className="xyloButton xyloButton5"
        ></div>
      </div>
    </div>
  );
}

export default App;
