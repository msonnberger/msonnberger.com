import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Spacer, SectionTitle } from '@components';

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
    <>
      <SectionTitle>Stuff I've Built</SectionTitle>
      {projectsData &&
        projectsData.map((project) => {
          const { name } = project;
          return <p>{name}</p>;
        })}
    </>
  );
};

export default Projects;
