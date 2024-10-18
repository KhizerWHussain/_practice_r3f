import React from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import Geometry from "./geometry";
import {
  EffectComposer,
  Bloom,
  // ToneMapping,
} from "@react-three/postprocessing";
// import { BlendFunction } from "postprocessing";

function App() {
  return (
    <>
      <Canvas camera={{ fov: 35 }} flat={true}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <Geometry />
        <EffectComposer>
          <Bloom
            mipmapBlur={true}
            intensity={3.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          {/* <ToneMapping adaptive={true} /> */}
        </EffectComposer>
      </Canvas>
      <div className="w-full h-full bg-slate-800 py-32">
        <h1>Welcome to react three fiber</h1>
      </div>
    </>
  );
}

export default App;
