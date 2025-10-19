import { HeroText } from "../components/molecules/HeroText";
import { Sidebar } from "~/components/organisms/Sidebar";
import { MainContent } from "../components/organisms/MainContent";
import { PageTemplate } from "../components/templates/PageTemplate";
import { useState, useEffect } from "react";
import { Text } from "~/components/atoms/Text";

export default function Home(){

  const [menuItems, setMenuItems] = useState<Array<{label: string, path: string}>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.title = 'Portafolio - Inicio'
    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme){
      metaTheme.setAttribute('content', '#0a0a0a')
    }
  }, [])

  useEffect(() => {
    const loadMenuData = () => {
      setTimeout(() => {
        const data = [
          { label: 'Información', path: '/info' },
          { label: 'Proyectos', path: '/projects' },
          { label: 'Contacto', path: '/contact' }
        ];
        
        setMenuItems(data)
        setIsLoading(false)
      }, 2500)
    }

    loadMenuData()
  }, [])

  if (isLoading) {
    return(
      <div style={{
        background: '#0a0a0a', 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}>
        <p style={{
          fontSize: '32px',
          fontWeight: '300',
          letterSpacing: '2px',
          animation: 'fadeOutDelayed 2.5s ease-in-out forwards'
          }}>
          Bastián Moya | Portafolio
        </p>
        <style>{`
        @keyframes fadeOutDelayed {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
      </div>
    )
  }
  return (
    <PageTemplate
      sidebar={
        <Sidebar
          menuItems={menuItems}
          logoText="Menú"
        />
      }
      mainContent={
        <MainContent>
          <HeroText 
            name="Bastián Moya"
            subtitle="Estudiante de ingeniería en informática."
          />

          <div style={{marginTop: '100px'}}>
            <Text size="large" weight="bold">Sobre mí</Text>
            <br />
            <Text size="medium" color="#ccc">
              Apasionado por la tecnología y el desarrollo de software.
              Siempre buscando aprender nuevas tecnologías y metodologías.
            </Text>
          </div>

          <div style={{ marginTop: '100px' }}>
            <Text size="large" weight="bold">Habilidades</Text>
            <br /><br />
            <Text size="medium" color="#ccc">
              • React & TypeScript
              <br />
              • Diseño responsivo
              <br />
              • Git & GitHub
              <br />
              • Metodologías ágiles
            </Text>
          </div>

          <div style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Text size="large" weight="bold">Experiencia</Text>
            <br /><br />
            <Text size="medium" color="#ccc">
              Proyectos académicos y personales enfocados en desarrollo web full stack.
            </Text>
          </div>

        </MainContent>
      }
    />  
  );
}