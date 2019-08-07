import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import colors from 'Themes/Colors';
import PropTypes from 'prop-types';

const rotateAround = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg) ;
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg) ;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 150px;
  height: 150px;
  color: ${colors.avengers};
  margin: 10px;
  position: relative;
  filter: ${({ dead }) => (dead ? 'grayscale(100%);' : 'grayscale(0)')};
  transition: filter 5s;
`;
const ImgWrapper = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 2px #12a0a0, inset 0px 0px 5px 2px #12a0a0;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    border: 5px transparent solid;
    border-top: 4px ${colors.avengers} solid;
    border-radius: 50%;
    transition: 2s;
    animation: 5s ${rotateAround} linear infinite reverse;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    border: 5px transparent solid;
    border-bottom: 4px ${colors.avengers} solid;
    border-radius: 50%;
    transition: 2s;
    animation: 4s ${rotateAround} linear infinite;
  }
  ${({ dead }) =>
    dead &&
    css`
      &::after {
        animation-play-state: paused;
      }
      &::before {
        animation-play-state: paused;
      }
    `};
`;
const StyledImg = styled.img`
  border-radius: 50%;
`;
const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin-top: 9px;
  text-transform: uppercase;
  font-size: 0.8em;
`;
const Character = ({ img, name, dead }) => (
  <StyledWrapper dead={dead}>
    <ImgWrapper dead={dead}>
      <StyledImg src={img} />
    </ImgWrapper>
    <TextWrapper>
      <h2>{name}</h2>
    </TextWrapper>
  </StyledWrapper>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

Character.displayName = 'CharacterComponent';
StyledImg.displayName = 'StyledImg';
export default Character;
