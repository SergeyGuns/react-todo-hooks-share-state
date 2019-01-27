import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTetrisBrick = styled.div`
  width: 20px;
  height: 20px;
  background-color: rgb(${({ r, g, b }) => r + ',' + g + ',' + b});
  float: left;
`;

const TetrisBrick = props => <StyledTetrisBrick {...props} />;

TetrisBrick.propTypes = {
  r: PropTypes.number.isRequired,
  g: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default TetrisBrick;
