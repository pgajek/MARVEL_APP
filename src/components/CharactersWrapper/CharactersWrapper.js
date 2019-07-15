import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 360px) {
    justify-content: center;
  }
`;

const CharactersWrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default CharactersWrapper;
