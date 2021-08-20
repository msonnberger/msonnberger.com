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
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  place-items: center;
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
            return <ProjectCard {...project} />;
          })}
      </ProjectsWrapper>
      <Spacer axis="vertical" size={120} />
    </ProjectsSection>
  );
};

export default Projects;
