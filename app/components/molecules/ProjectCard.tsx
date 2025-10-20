import { Text } from "~/components/atoms/Text";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export function ProjectCard({ title, description, technologies, link, image }: ProjectCardProps) {
  const cardStyle = {
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'all 0.3s ease',
    cursor: link ? 'pointer' : 'default',
    textDecoration: 'none',
    display: 'block',
    height: '100%'
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    e.currentTarget.style.transform = 'translateY(-8px)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const CardContent = () => (
    <>
      {image && (
        <div style={{
          width: '100%',
          height: '200px',
          background: `url(${image}) center/cover`,
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }} />
      )}
      
      <div style={{ marginBottom: '16px' }}>
        <Text size="large" weight="bold">{title}</Text>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <Text size="medium" color="#ccc" style={{ lineHeight: '1.6' }}>
          {description}
        </Text>
      </div>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '8px',
        marginTop: 'auto'
      }}>
        {technologies.map((tech, i) => (
          <span
            key={i}
            style={{
              padding: '6px 12px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
              fontSize: '12px',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  if (link) {
    return (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
    <CardContent />
    </a>
    );
  }

  return (
    <div style={cardStyle}>
      <CardContent />
    </div>
  );
}