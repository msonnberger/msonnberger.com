import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Spacer, SectionTitle } from '@components';

const JobsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <div>
        {jobsData &&
          jobsData.map((job) => {
            return <p key={job.from}>{job.company}</p>;
          })}
      </div>
      <Spacer axis="vertical" size={120} />
    </JobsSection>
  );
};

export default Jobs;
