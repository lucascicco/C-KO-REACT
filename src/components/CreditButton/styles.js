/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { lighten } from 'polished';

export const DivButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  height: 45px;
  width: 100%;
  border: none;
  outline: none !important;
  box-shadow: none !important;
  transition: background 0.2s;
  border-radius: 5px;
  background: ${(props) =>
    props.outcome === null ? '#3949ab' : props.outcome ? '#43a047' : '#e53935'};

  &:hover {
    background: ${(props) =>
      !props.disabled && !props.outcome ? lighten(0.03, '#3949ab') : ''};
    cursor: ${(props) => (props.disabled ? 'wait' : 'cursor')};
  }
`;

export const Progress = styled.span`
  z-index: 1;
  transition: width 3s;
  width: ${(props) =>
    props.animation && props.outcome === null ? '100%' : '0px'};
  height: 100%;
  position: absolute;
  background: #283593;
  border-radius: 5px;
  left: 0px;
  top: 0px;
  padding: 0px;
`;

export const Content = styled.div`
  z-index: 9;
  padding: 0px;
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  color: white;
  padding-top: 10px;
`;
