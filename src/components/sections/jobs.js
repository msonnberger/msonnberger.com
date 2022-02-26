import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import * as dayjs from 'dayjs';
import { Spacer, SectionTitle } from '@components';
import { Tab } from '@headlessui/react';

const JobsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JobsPanel = styled.div`
  width: 100%;
`;

const StyledTab = styled.button`
  background-color: ${({ selected }) => (selected ? `var(--blue-muted)` : `transparent`)};
  color: ${({ selected }) => (selected ? `var(--orange)` : `inherit`)};
  border: none;
  border-bottom: 2px solid;
  border-bottom-color: ${({ selected }) => (selected ? `var(--orange)` : `var(--blue-muted)`)};
  border-radius: 0.3em 0.3em 0 0;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  font-size: 1.4rem;
  padding: 1em 1.5em;
  transition: all ease 200ms;
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query JobsQuery {
      jobs: allJobsJson {
        nodes {
          company
          role
          from
          to
          bullets
        }
      }
    }
  `);

  const jobsData = data.jobs.nodes;

  return (
    <JobsSection>
      <Spacer axis="vertical" size={70} />
      <SectionTitle>Places I've worked at</SectionTitle>
      <Tab.Group as={JobsPanel}>
        <Tab.List>
          {jobsData &&
            jobsData.map((job) => {
              return (
                <Tab as={Fragment} key={job.from}>
                  {({ selected }) => <StyledTab selected={selected}>{job.company}</StyledTab>}
                </Tab>
              );
            })}
        </Tab.List>
        <Spacer axis="vertical" size={20} />
        <Tab.Panels>
          {jobsData &&
            jobsData.map((job) => {
              const fromDate = dayjs(job.from);
              const toDate = dayjs(job.to);
              return (
                <Tab.Panel key={job.from}>
                  <h4>
                    {job.role} @ {job.company}
                  </h4>
                  <p>
                    {fromDate.format('MMM YYYY')} – {toDate.format('MMM YYYY')}
                  </p>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li>{bullet}</li>
                    ))}
                  </ul>
                </Tab.Panel>
              );
            })}
        </Tab.Panels>
      </Tab.Group>
      <Spacer axis="vertical" size={120} />
    </JobsSection>
  );
};

export default Jobs;
