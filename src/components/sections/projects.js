import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Spacer, SectionTitle, ProjectCard } from '@components';

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsWrapper = styled.div`
  width: min(76rem, 100vw);
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 35fr));
  gap: 2rem;
  place-items: start center;
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      projects: allProjectsJson {
        nodes {
          name
          slug
          url
          repo
          techstack
          description
        }
      }
    }
  `);

  const projectsData = data.projects.nodes;

  return (
    <ProjectsSection>
      <Spacer axis="vertical" size={70} />
      <SectionTitle>Stuff I've Built</SectionTitle>
      <ProjectsWrapper>
        {projectsData &&
          projectsData.map((project) => {
            return <ProjectCard {...project} key={project.slug}/>;
          })}
      </ProjectsWrapper>
      <Spacer axis="vertical" size={120} />
    </ProjectsSection>
  );
};

export default Projects;
