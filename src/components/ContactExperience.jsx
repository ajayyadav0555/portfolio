import { OrbitControls, SpotLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Computer } from './Models/Computer-optimized'

const ContactExperience = () => {
    return (
        <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
            <ambientLight intensity={0.5} color={'#fff436'} />
            <directionalLight position={[5, 5, 3]} intensity={2.5} color={'#ffd9b3'} />
            <directionalLight position={[5, 9, 1]} intensity={2.5} color={'#ffd9b3'} castShadow />
            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <group scale={0.03} position={[0, -1.5, -2]} castShadow>
                <Computer />
            </group>

            <group position={[1, 1, 1]}>
                <mesh
                    receiveShadow
                    position={[0, -2.5, 0]} // ⬅️ Lower Y so it's only on the floor
                    rotation={[-Math.PI / 2, 0, 0]} // ⬅️ Flat horizontal plane
                >
                    <planeGeometry args={[50, 50]} /> {/* ⬅️ Make it big enough */}
                    <meshStandardMaterial color={'#a46b2d'} />
                </mesh>
            </group>

        </Canvas>
    )
}

export default ContactExperience
