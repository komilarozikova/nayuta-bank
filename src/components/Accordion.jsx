import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';

const AccordionSection = styled.div`
max-width: 100%;
margin: 0 auto;
`;

const Container = styled.div`
  text-align: center;
  font-size19px;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 220px; 

`;

const Wrap = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(51, 96, 231, 0.38);
    border-radius: 15px;
    width: 964px;
    height: 80px;
    
  h1 {

font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 23px;

  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    font-size: 19px;
    line-height: 23px;
    padding: 15px 20px;
    border: 2px solid #333;
    font-size: 15px;
    border-top: 0;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <i className='fas fa-angle-down'></i> : <i className='fas fa-angle-up'></i>}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;