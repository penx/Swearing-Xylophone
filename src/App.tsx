import "./xylophone.css";
import { playSound } from "./xylophone";
import { Canvas, Color, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";

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
      <meshBasicMaterial
        color={hovered ? activeColor : color}
        toneMapped={false}
      />
    </mesh>
  );
}

function App() {
  const { intensity, radius } = useControls({
    intensity: { value: 0.6, min: 0, max: 1.5, step: 0.01 },
    radius: { value: 0.4, min: 0, max: 1, step: 0.01 },
  });
  return (
    <Canvas orthographic camera={{ zoom: 100 }}>
      <color attach="background" args={["#111"]} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={1}
          intensity={intensity}
          levels={9}
          mipmapBlur
          radius={radius}
        />
      </EffectComposer>
      <pointLight position={[10, 10, 10]} />
      <Box
        position={[-3, 0, 0]}
        keyNumber={0}
        color={[0, 204 * (4 / 255), 255 * (4 / 255)]}
        active={[51 * (4 / 255), 214 * (4 / 255), 255 * (4 / 255)]}
      />
      <Box
        position={[-1.5, 0, 0]}
        keyNumber={1}
        color={[255 * (4 / 255), 255 * (4 / 255), 0 * (4 / 255)]}
        active={[254 * (4 / 255), 255 * (4 / 255), 51 * (4 / 255)]}
      />
      <Box
        position={[0, 0, 0]}
        keyNumber={2}
        color={[0 * (4 / 255), 255 * (4 / 255), 0 * (4 / 255)]}
        active={[51 * (4 / 255), 255 * (4 / 255), 51 * (4 / 255)]}
      />
      <Box
        position={[1.5, 0, 0]}
        keyNumber={3}
        color={[250 * (4.5 / 255), 0 * (4.5 / 255), 150 * (4.5 / 255)]}
        active={[255 * (4.5 / 255), 47 * (4.5 / 255), 171 * (4.5 / 255)]}
      />
      <Box
        position={[3, 0, 0]}
        keyNumber={4}
        color={[0 * (4.3 / 255), 10 * (4.3 / 255), 770 * (4.3 / 255)]}
        active={[15 * (4.3 / 255), 90 * (4.3 / 255), 770 * (4.3 / 255)]}
      />
    </Canvas>
  );
}

export default App;
