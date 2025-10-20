import { HeroText } from "../components/molecules/HeroText";
import { Header } from "~/components/organisms/Header";
import { MainContent } from "../components/organisms/MainContent";
import { PageTemplate } from "../components/templates/PageTemplate";
import { useState, useEffect } from "react";
import { Text } from "~/components/atoms/Text";
import { ProjectsGrid } from "../components/organisms/ProjectsGrid";
import { ContactForm } from "../components/organisms/ContactForm";

export default function Home(){

  const [menuItems, setMenuItems] = useState<Array<{label: string, path: string}>>([])
  const [isLoading, setIsLoading] = useState(true)
  //const [currentBg, setCurrentBg] = useState('/images/des.jpg')

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
          { label: 'Inicio', path: '#inicio' },
          { label: 'Información', path: '#info' },
          { label: 'Proyectos', path: '#projects' },
          { label: 'Contacto', path: '#contact' }
        ];
        
        setMenuItems(data)
        setIsLoading(false)
      }, 2500)
    }

    loadMenuData()
  }, [])

  /*
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setCurrentBg('/images/des1.jpg'); 
        } else {
          setCurrentBg('/images/des.jpg');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  */

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
  const projects = [
  {
    id: 1,
    title: "Portafolio Personal",
    description: "Sitio web personal desarrollado con React Router y TypeScript, implementando Atomic Design para una arquitectura escalable.",
    technologies: ["React", "TypeScript", "Atomic Design"],
    link: "#",
  },
  {
    id: 2,
    title: "Aplicación de registro en dispositivos móviles",
    description: "Sistema de registro y login adaptado a dispositivos móviles, con diseño responsivo y persistencia de datos.",
    technologies: ["Kotlin", "Jetpack Compose."],
    link: "https://github.com/hoerests23/proyecto-moviles",
  },
  {
    id: 3,
    title: "Tienda web Online",
    description: "Plataforma de comercio electrónico con catálogos dinámicos y diseño responsivo. Implementación de un sistema avanzado de registro y acceso para clientes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/SebastianPinoB/Level-up-gamer",
  }
  ];
  
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#0a0a0a',
          backgroundSize: '140%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          //backgroundImage: 'url(/images/des.jpg)',
          //opacity: currentBg === '/images/des.jpg' ? 1 : 0,
          //transition: 'opacity 1s ease-in-out',
        }} />
        {/*img 2
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/des1.jpg)',
          backgroundSize: '110%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: currentBg === '/images/des1.jpg' ? 0.7 : 0,
          transition: 'opacity 1s ease-in-out'
        }} />*/}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.75) 100%)',
          backdropFilter: 'blur(2px)'
        }} /> 
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <PageTemplate
          header={
            <Header menuItems={menuItems} />
          }
          mainContent={
            <MainContent>
              <div id="inicio" style={{
                minHeight: '30vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                scrollMarginTop: '120px',
                //paddingBottom: '700px'
              }}>
                <HeroText 
                  name="Bastián Moya"
                  subtitle="Estudiante de ingeniería en informática."
                  //poner el div de abajo aquí como descripcion y el otro utilizarlo como señaletica, quizas-
                />                
                <div style={{ marginTop: '40px' }}>
                  <Text size="medium" color="#ccc">
                    Bienvenido. Explora mis proyectos y conoce más información sobre mi.
                  </Text>
                </div>
              </div>
              {/* info */}
              <div id="info" style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginTop:'100vh', //asi pude separarlo del inicio sin padding
                scrollMarginTop: '120px',
                //paddingTop: '800px', 
                //paddingBottom: '250px'
              }}>
                <div style={{ 
                  marginBottom: '80px',
                  borderLeft: '4px solid #fff',
                  paddingLeft: '20px'
                }}>
                  <Text size="xl" weight="bold">Información</Text>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '60px',
                  marginBottom: '60px'
                }}>
                  <div>
                    <Text size="large" weight="bold" style={{ marginBottom: '20px' }}>
                      Sobre mí
                    </Text>
                    <Text size="medium" color="#ccc" style={{ lineHeight: '1.8' }}>
                      Apasionado por la tecnología y el desarrollo de software.
                      Siempre buscando aprender nuevas tecnologías y metodologías.
                    </Text>
                  </div>
                  <div>
                    <Text size="large" weight="bold" style={{ marginBottom: '20px' }}>
                      Habilidades
                    </Text>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '15px'
                    }}>
                      {['React & TypeScript', 'Diseño responsivo', 'Git & GitHub', 'Metodologías ágiles'].map((skill, i) => (
                        <div key={i} style={{
                          padding: '12px 20px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease'
                        }}>
                          <Text size="small" color="#ccc">{skill}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <a 
                  href="https://www.linkedin.com/in/basti%C3%A1n-moya-vargas-2a99a638b/"
                  target="_blank"  // abrir en nueva pestaña
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '50px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginTop: '40px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}>
                    <div>
                      <div style={{ marginBottom: '16px' }}>
                        <Text size="large" weight="bold">Perfil Profesional</Text>
                      </div>
                      <Text size="medium" color="#ccc" style={{ lineHeight: '1.8' }}>
                        Visita mi perfil de LinkedIn.
                      </Text>
                    </div>
                    <div style={{ 
                      fontSize: '32px',
                      color: '#0077b5',
                      transition: 'transform 0.3s ease'
                    }}>
                      in
                    </div>
                  </div>
                </a>
              </div>
                {/* fin info */}

              {/* proyectos */}
              <ProjectsGrid projects={projects} />

              {/* contactos */}
              <ContactForm />

            </MainContent>
          }
        />
      </div>
    </div>
  );
}