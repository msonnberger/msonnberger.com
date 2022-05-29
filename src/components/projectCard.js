import React from 'react';
import styled from 'styled-components';
import { Spacer } from '@components';
import { IconGithub, IconExternal } from '@components/icons';

const Box = styled.div`
  max-width: 35rem;
  height: 100%;
  border-radius: 1.2rem;
  background-color: var(--blue-muted);
  padding: 2.4rem;
  padding-bottom: 1.8rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const Name = styled.h4`
  font-size: 2.8rem;
  color: var(--blue-light);
`;

const Line = styled.span`
  display: block;
  width: 5rem;
  height: 1px;
  background-color: var(--orange);
`;

const TechList = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: 'Fira Code', monospace;
  font-size: 1.4rem;
  color: var(--blue-mid);
`;

const TechItem = styled.li`
  margin-right: 1.6rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-grow: 1;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;

  a {
    box-shadow: none;
    display: flex;
  }

  a:hover {
    color: var(--orange);
  }

  svg {
    transform: scale(0.9);
    transition: transform 100ms;
  }
`;

const ProjectCard = (project) => {
  const { name, url, repo, techstack, description } = project;
  return (
    <Box>
      <Name>{name}</Name>
      <Line />
      <Spacer axis="vertical" size={10} />
      <TechList>
        {techstack && techstack.map((item) => <TechItem key={item}>{item}</TechItem>)}
      </TechList>
      <Spacer axis="vertical" size={20} />
      <p style={{ color: 'var(--blue-light)' }}>{description}</p>
      <Spacer axis="vertical" size={10} />
      <LinkWrapper>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <span>Live Site</span>
            <Spacer axis="horizontal" size={4} />
            <IconExternal />
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <span>Code</span>
            <Spacer axis="horizontal" size={6} />
            <IconGithub />
          </a>
        )}
      </LinkWrapper>
    </Box>
  );
};

export default ProjectCard;
