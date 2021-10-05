import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const slideSize = 200;

const Wrap = styled.div`
  width: ${slideSize * 5}px;
  margin: 0 auto;
`;

const Slider = styled.div`
  display: flex;
  transform: translate(${(props) => props.move}px, 0);
  transition: all 0.2s linear;
`;

const Slide = styled.div`
  position: relative;
  cursor: pointer;
  min-width: ${slideSize}px;
  width: ${slideSize}px;
  height: ${slideSize}px;
  font-size: 20px;
  transition: all 0.2s ease;



  .gatsby-image-wrapper {
    border-radius: 2px;
    display: block;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
    opacity: 0.8;
    transition: all 0.2s ease;
  }

  // img {
  //   border-radius: 2px;
  //   display: block;
  //   width: 90%;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%) scale(0.6);
  //   opacity: 0.8;
  //   transition: all 0.2s ease;
  // }

  span {
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    text-align: center;
    font-size: 44px;
    opacity: 0;
    transition: all 0.2s ease;
    text-shadow: 0 0 7px rgba(0,0,0,0.7);
  }
  ${(props) => (props.active ? `
    background: #dedede;
    .gatsby-image-wrapper {
      opacity: 1;
      z-index: 4;
      transform: translate(-50%, -50%) scale(1.6);
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.4);
    }
    span {
      opacity: 1;
    }
  ` : '')}
  ${(props) => (props.siblings ? `
    .gatsby-image-wrapper {
      opacity: 1;
      z-index: 3;
      transform: translate(-50%, -50%) scale(1.2);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  ` : '')} 
  ${({ hide }) => (hide ? `
    opacity: 0.2;
  ` : '')}
`;

const Carousel = () => {
  const [move, setMove] = useState(0);
  const [active, setActive] = useState(3);

  const data = useStaticQuery(graphql`
    query {

      # get all images from "slider" folder
      images: allFile( filter: { relativeDirectory: { eq: "slider" } } ) {
        nodes {
          id
          name
          childImageSharp {
            fixed(width: 190) {
             ...GatsbyImageSharpFixed
            }
          }
        }
      }

      placeholderImage: file(relativePath: { eq: "slider/cornice.png" }) {
        childImageSharp {
           fixed(width: 190) {
            ...GatsbyImageSharpFixed
           }
          #fluid(maxWidth: 300) {
           # ...GatsbyImageSharpFluid
          #}
        }
      }
    }
  `);

  const images = useMemo(() => {
    if (!data) return {};
    return data.images.nodes.reduce((res, item) => {
      res[item.name] = item;
      return res;
    }, {});
  }, [data]);

  const slides = [
    {
      id: 1,
      title: 'Тюль',
      url: images.tulle1.childImageSharp.fixed,
      target: 'tulle',
    },
    {
      id: 2,
      title: 'Римская штора',
      url: images.rome1.childImageSharp.fixed,
      target: 'rome',
    },
    {
      id: 3,
      title: 'Портьера',
      url: images.portiere1.childImageSharp.fixed,
      target: 'portiere',
    },
    {
      id: 4,
      title: 'Римская штора',
      url: images.rome2.childImageSharp.fixed,
      target: 'rome',
    },
    {
      id: 5,
      title: 'Портьера',
      url: images.portiere2.childImageSharp.fixed,
      target: 'portiere',
    },
    {
      id: 6,
      title: 'Римская штора',
      url: images.rome3.childImageSharp.fixed,
      target: 'rome',
    },
    {
      id: 7,
      title: 'Портьера',
      url: images.portiere3.childImageSharp.fixed,
      target: 'portiere',
    },
  ];

  const clickItem = (n, targetId) => {
    if (n === active) {
      const element = document.getElementById(targetId);
      if (typeof window !== 'undefined' && element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setMove(-(n - 3) * slideSize);
    setActive(n);
  };

  return (
    <Wrap>
      <Slider move={move}>
        {slides.map((item, index) => (
          <Slide
            key={item.id}
            hide={index < active - 3 || index > active + 1}
            active={active === index + 1}
            siblings={index === active - 2 || index === active}
            onClick={() => clickItem(index + 1, item.target)}
          >
            {/* <img src={item.url} alt="" /> */}
            {/* <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="" /> */}
            <Img fixed={item.url} alt="" />
            <span>{item.title}</span>
            {/* loading="eager" */}
          </Slide>
        ))}
      </Slider>

      {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="" /> */}
      {/* <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="" /> */}

    </Wrap>
  );
};

export default Carousel;

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "./images/cornice.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 288, height: 446) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;
