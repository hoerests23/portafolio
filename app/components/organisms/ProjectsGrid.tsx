import { ProjectCard } from "../molecules/ProjectCard";
import { Text } from "~/components/atoms/Text";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div id="projects" style={{
      minHeight: '100vh',
      padding: '120px 0'
    }}>
      <div style={{ 
        marginBottom: '80px',
        borderLeft: '4px solid #fff',
        paddingLeft: '20px'
      }}>
        <Text size="xl" weight="bold">Proyectos</Text>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '40px',
        maxWidth: '90%',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}