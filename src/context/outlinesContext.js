import React, { useState } from 'react';
import styled from 'styled-components';


const SHOW_OUTLINES = false;
export const OutlinesContext = React.createContext();

const OutlineButton = styled.button`
  position: fixed;
  top: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  outline: none;
  border: none;
  color: rgb(255, 255, 255);
  padding: 5px;
  font-weight: bold;
  font-size: 13px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: background-color 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.87);
  }
`;


export const Outlines = (props) => {
  const [showOutlines, setShowOutlines] = useState(SHOW_OUTLINES);

  const switchOutlines = () => {
    setShowOutlines(!showOutlines);
  }
  
  return (
    <>
      <OutlineButton onClick={switchOutlines}>
        outlines
      </OutlineButton>

      <OutlinesContext.Provider value={showOutlines}>
        {props.children}
      </OutlinesContext.Provider>
    </>
    
  );
}
