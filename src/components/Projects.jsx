const projectData = [
  {
    id: 1,
    title: 'Automatic Water Irrigation System',
    description: 'A smart system that automatically detects soil moisture and controls water flow to reduce manual effort and save water efficiently.',
    link: '#', // Replace with actual GitHub or demo link if available
  },
  {
    id: 2,
    title: 'Campus Cuisine Cashier (CCC)',
    description: 'A mini web application developed for automating food ordering and billing within a campus canteen. Built using HTML, CSS, JavaScript, and Firebase.',
    link: '#', // Replace with actual link if available
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
