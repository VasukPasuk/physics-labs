import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Button, ButtonGroup} from "@mui/material";



function Hexagon(props) {
	const hideList = props.hideList || []
	const cylinderHideList = props.cylinderHideList || []
	return (
		<group {...props}>
			{!hideList.includes(1) ? <mesh position={[5, 0, 0]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh> : <></>}
			
			{!cylinderHideList.includes(1) ? <mesh position={[7.25, 0, 3]} rotation={[Math.PI / 2, Math.PI, Math.PI / 5]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh> : <></>}
			
			{!hideList.includes(2) ? <mesh position={[-10, 0, 7]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh> : <></>}
			
			{!cylinderHideList.includes(2) ? <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh> : <></>}
			
			{!hideList.includes(3) ? <mesh position={[-5, 0, 0]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh> : <></>}
			
			{!cylinderHideList.includes(3) ? <mesh position={[-7, 0, 3]} rotation={[Math.PI / 2, 0, Math.PI / 5.25]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh> : <></>}
			
			{!hideList.includes(4) ? <mesh position={[10, 0, 7]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh> : <></>}
			
			{!cylinderHideList.includes(4) ? <mesh position={[-7.4525, 0, 11]} rotation={[Math.PI / 2, 0, -Math.PI / 5.525]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh> : <></>}
			
			{!hideList.includes(5) ? <mesh position={[-5, 0, 15]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh> : <></>}
			
			{!cylinderHideList.includes(5) ? <mesh position={[0, 0, 15]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
				<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
				<meshStandardMaterial color="white"/>
			</mesh> : <></>}
			
			{!hideList.includes(6) ? <mesh position={[5, 0, 15]}>
				<sphereGeometry args={[1, 100]}/>
				<meshStandardMaterial color={props.color}/>
			</mesh> : <></>}
			
			{!cylinderHideList.includes(6) ?
				<mesh position={[7.5, 0, 11]} rotation={[Math.PI / 2, Math.PI, -Math.PI / 5.525]}>
					<cylinderGeometry args={[0.35, 0.35, 9, 25]}/>
					<meshStandardMaterial color="white"/>
				</mesh> : <></>}
		</group>
	)
}


const Layer = (props) => (
	<group position={props.position}>
		<Hexagon cylinderHideList={[]} color={props.color} hideList={[]} position={[0, 0, 0]}/>
		<Hexagon cylinderHideList={[]} color={props.color} hideList={[]} position={[0, 0, 15]}/>
		<Hexagon cylinderHideList={[]} color={props.color} hideList={[3]} position={[0, 0, 30]}/>
		<Hexagon cylinderHideList={[4, 3]} color={props.color} hideList={[3, 5, 2]} position={[15, 0, 7]}/>
		<Hexagon cylinderHideList={[3, 4]} color={props.color} hideList={[1, 2, 3]} position={[15, 0, 22]}/>
	</group>
)

const LENGTH = 4

function GraphiteCrystalPage() {
	const [skip, setSkip] = useState(0)
	return (
		<div style={{width: '100%', height: '100vh', position: 'relative'}}>
			<Canvas style={{background: 'lightblue'}}>
				<ambientLight intensity={0.5}/>
				<pointLight position={[10, 10, 10]}/>
				
				
				
				{[...Array.from({length: LENGTH})].map((el, i) => (
					<>
						{[...Array.from({length: LENGTH})].map((el, k) => (
							<>
								<Layer color={"#3399ff"} position={[30*i, 0, 30*k]}/>
								{!(skip >= 2) && <Layer color={"#66ff66"} position={[30*i, 10, 30*k]}/>}
								{!(skip >= 1) && <Layer color={"red"} position={[30*i, 20, 30*k]}/>}
							</>
						))}
					</>
				))}
				
				
				<OrbitControls/>
			</Canvas>
			<ButtonGroup variant="contained" style={{zIndex: '100', position: 'absolute', top: "2%", right: "1%"}}>
				<Button onClick={() => setSkip(0)}> Reload </Button>
				<Button onClick={() => setSkip(1)}> Clear layer 1 </Button>
				<Button onClick={() => setSkip(2)}> Clear layer 2 </Button>
			</ButtonGroup>
		</div>
	)
}


export {GraphiteCrystalPage}
