import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from 'three'
const TechIcons = ({model}) => {
    const scene=useGLTF(model.modelPath)


    useEffect(()=>{
        if(model.name==='Interactive Developer'){
            scene.scene.traverse((child)=>{
                if(child.isMesh&& child.name==='Object_5'){
                    child.material=new THREE.MeshStandardMaterial({color:"white"})
                }
            })
        }
    },[])
  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <Environment preset='city' /> 
        <OrbitControls enableZoom={false} />
        <directionalLight position={[5,5,5]} intensity={1} />
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcons
