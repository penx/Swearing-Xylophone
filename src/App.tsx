import "./xylophone.css";
import { playSound } from "./xylophone";
import { Canvas, Color, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";

function Box({
  keyNumber,
  color,
  active: activeColor,
  position,
}: {
  keyNumber: number;
  color: Color;
  active: Color;
  position?: Vector3;
}) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      position={position}
      ref={mesh}
      onPointerDown={() => {
        playSound(keyNumber);
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <boxGeometry args={[1, 5, 1]} />
      <meshStandardMaterial color={hovered ? color : activeColor} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <Box
        position={[-2, 0, 0]}
        keyNumber={0}
        color="#00ccff"
        active="#33d6ff"
      />
      <Box
        position={[-1, 0, 0]}
        keyNumber={1}
        color="#ffff00"
        active="#feff33"
      />
      <Box
        position={[0, 0, 0]}
        keyNumber={2}
        color="#00ff00"
        active="#33ff33"
      />
      <Box
        position={[1, 0, 0]}
        keyNumber={3}
        color="#fa0096"
        active="#ff2fab"
      />
      <Box
        position={[2, 0, 0]}
        keyNumber={4}
        color="#0f4295"
        active="#0059e9"
      />
    </Canvas>
  );
}

export default App;
