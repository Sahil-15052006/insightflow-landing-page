import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three'

export default function MainTorus(){


  const mainTorusIntensity = 3
  const arcIntensity = 5
  const sphereIntensity = 2

  const sphereRef = useRef<THREE.Mesh | null>(null)
  const torusRef = useRef<THREE.Mesh | null >(null)
  const innerTorusRef = useRef<THREE.Mesh | null >(null)
  const arcRef1 = useRef<THREE.Mesh | null >(null)
  const arcRef2 = useRef<THREE.Mesh | null >(null)
  const arcRef3 = useRef<THREE.Mesh | null >(null)



  useFrame((state, delta) => {
    if (!innerTorusRef.current || !torusRef.current  || !arcRef1.current  || !arcRef2.current || !arcRef3.current || !sphereRef.current) return;

    sphereRef.current.rotation.x += delta * 0.5;
    sphereRef.current.rotation.y += delta * 0.5;
    torusRef.current.rotation.z += delta * 0.5;
    innerTorusRef.current.rotation.z -= delta * 0.5;
    arcRef1.current.rotation.z += delta * 0.8 ;
    arcRef2.current.rotation.z += delta  ;
    arcRef3.current.rotation.z -= delta  ;

  });

  return(
    <>
      <mesh ref={sphereRef} position={[0,0,-1]}>
        <sphereGeometry args={[1,10,10]}/>
        <meshPhongMaterial
            color="#637daa"
            emissive="#637daa"
            emissiveIntensity={sphereIntensity}
            wireframe
        />


      </mesh>
      <mesh ref={torusRef} position={[0,0,0]}>
        <torusGeometry args={[5, 0.5, 4, 50]} />
        <meshPhongMaterial
          color="#637daa"
          emissive="#637daa"
          emissiveIntensity={mainTorusIntensity}
          wireframe
        />
        <mesh ref={arcRef1} position={[0,0,0.8]}>
          <torusGeometry args={[4.7, 0.03, 50 , 50 , -Math.PI ]} />
          <meshPhongMaterial
            color="#637daa"
            emissive="#637daa"
            emissiveIntensity={arcIntensity}
            // wireframe

          />
        </mesh>
        <mesh ref={arcRef1} position={[0,0,0.8]}>
          <torusGeometry args={[4.1 , 0.03, 40 , 50 , Math.PI * 1.5 ]} />
          <meshPhongMaterial
            color="#637daa"
            emissive="#637daa"
            emissiveIntensity={arcIntensity}
          />
        </mesh>
        <mesh ref={arcRef2} position={[0,0,0.8]}>
          <torusGeometry args={[3.5 , 0.03, 40 , 50 , Math.PI / 1.5 ]} />
          <meshPhongMaterial
            color="#637daa"
            emissive="#637daa"
            emissiveIntensity={arcIntensity}
          />
        </mesh>
        <mesh ref={arcRef2} position={[0,0,0.8]}>
          <torusGeometry args={[2.9 , 0.03, 40 , 50 , -Math.PI  ]} />
          <meshPhongMaterial
            color="#637daa"
            emissive="#637daa"
            emissiveIntensity={arcIntensity}
          />
        </mesh>
        <mesh ref={arcRef2} position={[0,0,0.8]}>
          <torusGeometry args={[2.3 , 0.03, 40 , 50 , Math.PI  /-1.2 ]} />
          <meshPhongMaterial
            color="#637daa"
            emissive="#637daa"
            emissiveIntensity={arcIntensity}
          />
        </mesh>
        <mesh ref={arcRef3} position={[0,0,0.8]}>
          <torusGeometry args={[1.7 , 0.03, 40 , 50 , Math.PI * 1.2 ]} />
          <meshPhongMaterial
            color="#637daa"
            emissive="#637daa"
            emissiveIntensity={arcIntensity}
          />
        </mesh>
        <mesh ref={arcRef3} position={[0,0,0.8]}>
          <torusGeometry args={[1.2 , 0.03, 40 , 50 , -Math.PI ]} />
          <meshPhongMaterial
            color="#637daa"
            emissive="#637daa"
            emissiveIntensity={arcIntensity}
          />
        </mesh>

      </mesh>
      <mesh ref={innerTorusRef} position={[0,0,2]}>
        <torusGeometry args={[2, 0.3, 3, 30]} />
        <meshPhongMaterial
          color="#637daa"
          emissive="#637daa"
          emissiveIntensity={mainTorusIntensity}
          wireframe
        />
        </mesh>
    </>
  )
}



