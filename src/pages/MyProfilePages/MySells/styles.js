import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin-top: 20px;
`;

export const DivFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RemoveText = styled.button`
  @media (max-width: 767.98px) {
    width: 10%;
  }

  color: white;
  font-family: 'Raleway', sans-serif;
  border: none;
  font-size: 15px;
  width: 10%;
  text-align: start;
  margin: 0px;
  margin-top: 10px;
  padding: 0px;

  background: none;

  transition: background 0.2s;
  outline: none !important;
  box-shadow: none !important;
`;
