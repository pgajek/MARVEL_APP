import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Gauntlet from 'assets/thanos_snap.png';
// 3840x80  48
const snap = keyframes`
from{
    background-position: 0px 0px;
}
to{
    background-position:  -3840px 0px;
    }
`;

const StyledWrapper = styled.div`
  height: 80px;
  width: 80px;
  background: url(${Gauntlet}) 0px 0px;
  margin: 2vh 0 5vh 50%;
  transform: translateX(-50%);
  animation: ${({ animate }) => (animate ? snap : 'none')} 2.5s steps(48);
  cursor: pointer;
`;

const ThanosGauntlet = ({ click, animate }) => <StyledWrapper animate={animate} onClick={click} />;
ThanosGauntlet.propTypes = {
  click: PropTypes.func.isRequired,
  animate: PropTypes.bool.isRequired,
};
export default ThanosGauntlet;
