import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Spacer } from '@components';
import { IconChevronRight } from '@components/icons';

const Box = styled.div`
  width: 35rem;
  border-radius: 1.2rem;
  background-color: var(--blue-muted);
  padding: 2.4rem;
  padding-bottom: 1.8rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &:hover svg {
    transform: scale(1.1);
  }
`;

const Name = styled.h4`
  font-size: 2.4rem;
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
  margin-right: 1rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  font-size: 1.8rem;

  a {
    box-shadow: none;
  }

  svg {
    transform: scale(0.9);
    transition: transform 100ms;
  }
`;

const ProjectCard = (project) => {
  const { name, slug, url, repo, techstack, description } = project;
  return (
    <Box>
      <Name>{name}</Name>
      <Line />
      <Spacer axis="vertical" size={10} />
      <TechList>
        {techstack && techstack.map((item) => <TechItem>{item}</TechItem>)}
      </TechList>
      <Spacer axis="vertical" size={20} />
      <p style={{ color: 'var(--blue-light)' }}>{description}</p>
      <LinkWrapper>
        <Link to={slug}>Read more</Link>
        <Spacer axis="horizontal" size={2} />
        <IconChevronRight />
      </LinkWrapper>
    </Box>
  );
};

export default ProjectCard;
