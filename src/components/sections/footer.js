import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: underline;
  box-shadow: none;
  color: var(--blue-mid);
  font-size: 1.8rem;
  margin: 2rem auto;

  &:hover {
    color: var(--blue-light);
    box-shadow: none;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to="/legal">Legal</StyledLink>
    </StyledFooter>
  );
};

export default Footer;
