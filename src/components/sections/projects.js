import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Spacer, SectionTitle, ProjectCard } from '@components';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <StyledProjectsSection>
      <Spacer axis="vertical" size={70} />
      <SectionTitle>Stuff I've Built</SectionTitle>
      {projectsData &&
        projectsData.map((project) => {
          return <ProjectCard {...project} />;
        })}
      <Spacer axis="vertical" size={120} />
    </StyledProjectsSection>
  );
};

export default Projects;
