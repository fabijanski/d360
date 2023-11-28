"use client"
import { useRef, MutableRefObject } from "react"
import { Header } from "@/components/header"

import React, { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Center,
  ContactShadows,
  OrbitControls,
  Text3D,
  // useHelper,
} from "@react-three/drei"
import {
  DirectionalLight,
  // DirectionalLightHelper,
  MathUtils,
  Mesh,
} from "three"
const fontUrl = "/fonts/Lato_Regular.json"

const Scene = () => {
  const mesh = useRef<Mesh>(null!)

  useFrame(({ clock }) => {
    if (mesh.current) {
      const t = clock.getElapsedTime()
      mesh.current.position.y = MathUtils.lerp(
        mesh.current.position.y + 0.17,
        Math.sin(t * 1.3) / 4,
        0.1
      )
    }
  })

  return (
    <>
      <Suspense fallback={null}>
        <Center position={[0, -1, 0]}>
          <Text3D
            ref={mesh}
            font={fontUrl}
            position-y={0.5}
            bevelThickness={0.03}
            bevelEnabled
          >
            D360
            <meshPhongMaterial color="#263244" flatShading />
          </Text3D>
        </Center>
      </Suspense>
      <ContactShadows
        position={[0, -1, 0]}
        scale={5}
        far={2}
        blur={7}
        color={"black"}
      />

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

const Light1 = () => {
  const dirLight = useRef<DirectionalLight>(null!)
  // useHelper(dirLight, DirectionalLightHelper, 1, "red")

  return (
    <directionalLight
      color={"#fff"}
      intensity={10}
      ref={dirLight}
      position={[3, 3, 1.2]}
    />
  )
}
const Light2 = () => {
  const dirLight = useRef<DirectionalLight>(null!)
  // useHelper(dirLight, DirectionalLightHelper, 1, "red")

  return (
    <directionalLight
      color={"#fff"}
      intensity={7}
      ref={dirLight}
      position={[-1, 0, 1.2]}
    />
  )
}

export default function Animation() {
  return (
    <section className="">
      <Canvas
        style={{ height: "800px" }}
        camera={{
          position: [-0.1, 0.1, 2.5],
        }}
      >
        <Light1 />
        <Light2 />
        <color attach="background" args={["white"]} />
        <Scene />
      </Canvas>
    </section>
  )
}
