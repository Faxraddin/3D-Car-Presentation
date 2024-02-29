import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { useFrame,useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Car(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');

  const ref = useRef(null);
  const tl = gsap.timeline();
  const {scene,camera} = useThree();

  useLayoutEffect(()=>{

  },[])

  const {cameraPosition,scenePosition,sceneRotation} = useControls({
    cameraPosition:{
      value:{x:0,y:0,z:0},
      step:0.5
    },
    scenePosition:{
      value:{x:0,y:0,z:0},
      step:0.5
    },
    sceneRotation:{
      value:{x:0,y:0,z:0},
      step:0.5
    }
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.053}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.CASPITAspoiler} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.JiottoCHRM_tex1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.JiottoPL_tex1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Jiotto_Caspita_1989_by_Alex_Ka} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.LOGOhoodCHRM_tex2} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.LOGOhood_tex2} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.PLlogo_tex2} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.POWEREDBYSUBARU} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.REDFRONTPLandspoilers_pl_tex5} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.bac_tex2} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.black_aluminium} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.black_chrome} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.black_mate} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.black_plastic} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.bolts} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.bottom} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.brakedisc_tex5} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.carbon} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.emb_L} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.emb_R} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.grill_2} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.grill_tex3} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.headlight_glass} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.headlights_tex1} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.intPL} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.intlamp_gls_tex2} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.keylock_tex1} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.kvrrem_tex4} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.lampBUTTON_pl_tex1} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.lampBUTTON_tex1} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.lockRED_tex5} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.mirrors_tex5} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.need_for_speed_tex2} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.pbronze_tex5} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.pchrome_tex5} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.pexhachrome_tex5} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.phole_tex5} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.plate} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.pmate_tex5} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.ppl_tex5} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.radiator2_tex3} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.radiator_tex1} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.redtriangle_pl_tex1} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.material_45} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.rimins1} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.rimins2} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.spd_gls_tex3} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.stickbuttons_pl_tex2} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.suport_tex5} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.tex1} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.tex1_brakelights} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.tex2} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.tire} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.tire_L} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.tire_R} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.voofer_tex1} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.material_58} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.material_59} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
