import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
  width: 100%;
  background-color: #ddd;
`;

const TopFakeButton = styled.i`
  height: 8px;
  width: 8px;
  display: inline-block;
  background-color: #ff5f57;
  border-radius: 50%;
  position: relative;
  left: 10px;

  :after {
    position: absolute;
    height: 8px;
    width: 8px;
    display: inline-block;
    border-radius: 50%;
    content: ' ';
    left: 30px;
    background-color: #28ca41;
  }

  :before {
    position: absolute;
    height: 8px;
    width: 8px;
    display: inline-block;
    border-radius: 50%;
    content: ' ';
    left: 15px;
    background-color: #ffbd2e;
  }
`;

export default () => (
  <TopBar>
    <TopFakeButton />
  </TopBar>
);
