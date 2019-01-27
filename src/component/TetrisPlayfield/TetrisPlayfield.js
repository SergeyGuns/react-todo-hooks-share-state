import React from 'react';
import PropTypes from 'prop-types';
import TetrisBrick from '../TetrisBick';
import styled from 'styled-components';

function matrixCheckCondition(matrix) {
  if (matrix.length === 20 && matrix[0].length === 10) {
    return true;
  }
  throw new Error('Error: matrix.length === 40 && matrix[0].length === 10');
}

const StyledTetrisPlayfield = styled.div`
  width: 200px;
  border: solid 1px;
`;

const TetrisPlayfield = ({ matrix }) => {
  matrixCheckCondition(matrix);
  return (
    <StyledTetrisPlayfield>
      {matrix.map((arrX, index) =>
        arrX.map((brick, index2) => (
          <TetrisBrick key={index + '-' + index2} {...brick} />
        )),
      )}
    </StyledTetrisPlayfield>
  );
};

TetrisPlayfield.propTypes = {
  matrix: PropTypes.array.isRequired,
};

export default TetrisPlayfield;
