import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'



function Hexagon(props) {
	const hideList = props.hideList || []
	return (
		<group {...props}>
			{!hideList.includes(1) && <mesh position={[5, 0, 0]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh>}
			
			<mesh position={[7.25, 0, 3]} rotation={[Math.PI / 2, Math.PI, Math.PI / 5]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh>
			
			{!hideList.includes(2) && <mesh position={[-10, 0, 7]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh>}
			<mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh>
			
			{!hideList.includes(3) && <mesh position={[-5, 0, 0]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh>}
			<mesh position={[-7, 0, 3]} rotation={[Math.PI / 2, 0, Math.PI / 5.25]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh>
			{!hideList.includes(4) && <mesh position={[10, 0, 7]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh>}
			<mesh position={[-7.4525, 0, 11]} rotation={[Math.PI / 2, 0, -Math.PI / 5.525]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh>
			{!hideList.includes(5) && <mesh position={[-5, 0, 15]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh>}
			<mesh position={[0, 0, 15]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh>
			{!hideList.includes(6) && <mesh position={[5, 0, 15]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh>}
			<mesh position={[7.5, 0, 11]} rotation={[Math.PI / 2, Math.PI, -Math.PI / 5.525]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh>
		</group>
	)
}


const Layer = (props) => (
	<group position={props.position}>
		<Hexagon color={props.color} hideList={[]} position={[0, 0, 0]}/>
		<Hexagon color={props.color} hideList={[]} position={[0, 0, 15]}/>
		<Hexagon color={props.color} hideList={[3]} position={[0, 0, 30]}/>
		<Hexagon color={props.color} hideList={[3,5,2]} position={[15, 0, 7]}/>
		<Hexagon color={props.color} hideList={[1, 2, 3]} position={[15, 0, 22]}/>
	</group>
)

function GraphiteCrystalPage() {
	return (
		<div style={{width: '100%', height: '100vh', position: 'relative'}}>
			<Canvas style={{background: 'lightblue'}}>
				<ambientLight intensity={0.5}/>
				<pointLight position={[10, 10, 10]}/>
				<Layer color={"#3399ff"} position={[0,0,0]}/>
				<Layer color={"#66ff66"} position={[0,10,0]}/>
				<Layer color={"red"} position={[0,20,0]}/>
				<OrbitControls/>
			</Canvas>
		</div>
	)
}


export {GraphiteCrystalPage}
