/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { passion, text, light as lightColor } from '../../config';

const Head = styled.div`
  border-top: 2px solid ${({ light }) => (light ? lightColor : text)};
  position: relative;
  height: 100px;
  padding-left: 174px;
  display: flex;
  align-items: center;
  font-size: 20px;
  ${({ light }) => (light ? `color: ${lightColor}` : '')}
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(0, -50%);
`;

const Button = styled.div`
  cursor: pointer;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    transition: transform 0.2s ease;
    ${({ open }) => (open ? 'transform: rotate(-45deg);' : '')}
    path {
      stroke: ${({ light }) => (light ? lightColor : text)};
    }
  }
  &:hover {
    svg {
      path {
        stroke: ${passion};
      }
    }
  }
`;

const AccBlock = ({
  children,
  title,
  icon,
  light,
  id,
  scrollTo,
  blank,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id && scrollTo && scrollTo === id) {
      setOpen(true);
    }
  }, [scrollTo]);

  return (
    <div id={id}>
      <Head light={light}>
        <Image src={icon} alt="" />
        {title}
        {!blank && (
          <Button onClick={() => setOpen(!open)} open={open} light={light}>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6096 0.55957V30.5596" strokeWidth="2" />
              <path d="M0.609619 15.5596L30.6096 15.5596" strokeWidth="2" />
            </svg>
          </Button>
        )}
      </Head>
      {open && children}
    </div>
  );
};

export default AccBlock;
