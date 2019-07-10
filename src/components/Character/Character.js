import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 220px;
  width: 420px;
  border: 1px solid black;
`;

const StyledInside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 5%;
`;

const StyledImage = styled.div`
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 140px;
  width: 140px;
  border: 1px solid black;
  margin: 20% 10%;
  z-index: 10;
`;

const StyledH2 = styled.h2``;

const Character = ({ name, surname, img }) => (
  <StyledWrapper>
    <StyledImage img={img} />
    <StyledInside>
      <StyledH2>
        {name} {surname}
      </StyledH2>
    </StyledInside>
  </StyledWrapper>
);

export default Character;
