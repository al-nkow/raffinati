import React from 'react';
import styled from 'styled-components';
import { Link as BaseLink } from 'gatsby';
import SEO from '../components/seo';
import { passion, text } from '../config';

const Link = styled(BaseLink)`
  color: ${text};
  &:hover {
    color: ${passion};
  }
`;

const Wrap = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display';
  font-weight: 400;
  font-style: italic;
`;

const H1 = styled.h1`
  font-size: 32px;
  display: block;
  margin-bottom: 20px;
  span {
    color: ${passion};
    font-size: 54px;
  }
`;

const NotFoundPage = () => (
  <Wrap>
    <SEO title="404: Not found" />
    <H1><span>404</span>: Страница не найдена</H1>
    <Link to="/">Перейти на главную страницу</Link>
  </Wrap>
);

export default NotFoundPage;
