import { Text } from "../components/atoms/Text";
import { NavItem } from "../components/atoms/NavItem";

export default function Home(){
  return(
    <div style={{padding: '50px', background: '#0a0a0a', minHeight: '100vh'}}>
      
      <Text size="xl" weight="bold">Portafolio :3 (En xl)</Text>
      <br /> {/*separador*/}
      <Text size="large">Subtitulo en grande -large</Text>
      <br /> 
      <Text size="medium">Texto normal/predeterminado -medium (En xl)</Text>
      <br /> 
      <Text size="small" color="#ff0000">Texto pequeño en rojo -small</Text>
      <br /> 

      <Text size="large">Menú de navegación:</Text>
      <br />
      <NavItem to="/contact">Contacto</NavItem>
      <NavItem to="/info">Información</NavItem>
      <NavItem to="/projects">Proyectos</NavItem>

    </div>
  )
}