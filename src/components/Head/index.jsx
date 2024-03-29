import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Burger from 'components/Burger';
import { Link } from 'gatsby';
import Logo from './images/logo.png';
import { passion, contentWidth, mainbg, instaUrl, whatsappUrl, text, gray76, BP_1 } from '../../config';

const Wrap = styled.div`
  background: ${mainbg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  ${({ shrink }) => (shrink ? 'box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);' : '')}
`;

const Content = styled.div`
  transition: all 0.2s ease;
  max-width: ${contentWidth}px;
  width: 95%;
  height: ${({ shrink }) => (shrink ? '50' : '100')}px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 414px) {
    height: 50px;
  }
`;

const Image = styled.img`
  transition: all 0.2s ease;
  width: ${({ shrink }) => (shrink ? '140' : '170')}px;
  @media only screen and (max-width: 414px) {
    width: 140px;
  }
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${BP_1} {
    will-change: transform, opacity;
    transition: all 0.18s linear;
    transform: translateX(500px);
    opacity: 0;
    z-index: 1001;
    ${({ open }) => open && 'transform: translateX(0); opacity: 1;'}
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 20px;
    position: fixed;
    top: 10px;
    right: 10px;
    background: #ffffff;
    max-width: 400px;
    width: 80%;
    flex-direction: column;
    align-items: start;
    Social {
      flex: none;
    }
  }
`;

const MenuItem = styled(Link)`
  position: relative;
  cursor: pointer;
  margin-right: 40px;
  font-size: 18px;
  line-height: 24px;
  &:after {
    content: '';
    width: 0;
    height: 2px;
    background: ${passion};
    position: absolute;
    top: 100%;
    left: 0;
    transition: width 0.2s ease;
  }
  &:hover {
    color: ${passion};
    &:after {
      width: 100%;
    }
  }
  &.active {
    color: ${passion};
    &:after {
      width: 100%;
    }
  }
  text-decoration: none;
  color: ${text};
  ${BP_1} {
    padding: 10px 0;
    margin-bottom: 10px;
    font-family: 'Playfair Display';
    font-style: italic;
    &:hover {
      &:after {
        display: none;
      }
    }
    &.active {
      &:after {
        display: none;
      }
    }
  }
`;

const SocialWrap = styled.div`
  display: flex;
  ${BP_1} {
    padding: 20px 0;
  }
`;

const Social = styled.a`
  cursor: pointer;
  display: block;
  &:last-child {
    margin-left: 30px;
  }
  svg {
    fill: ${gray76};
  }
  &:hover {
    svg {
      fill: ${passion};
    }
  }
`;

const beforeAfter = `
  content: '';
  border-radius: 2px;
  display: block;
  width: 36px;
  height: 3px;
  position: absolute;
  top: 48%;
  left: -2px;
  background: ${passion};
`;

const CloseBtn = styled.div`
  display: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 16px;
  right: 16px;
  &:before {
    ${beforeAfter};
    transform: rotate(45deg);
  }
  &:after {
    ${beforeAfter};
    transform: rotate(-45deg);
  }
  ${BP_1} {
    display: block;
  }
`;

const Header = ({ main, setScrollToElem }) => {
  const init = typeof window !== 'undefined' ? window.scrollY : 0;
  const [shrink, setShrink] = useState(init);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return null;
    const handleScroll = () => {
      setShrink(!!window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // меню на главной - просто прокручиваем, на внутренних страницах - переход
  const clickMenuItem = (event, id) => {
    if (main && id && typeof window !== 'undefined') {
      event.preventDefault();

      if (id === 'top') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        setScrollToElem(id);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  return (
    <Wrap shrink={shrink}>
      <Content shrink={shrink}>
        <Link to="/">
          <Image src={Logo} alt="" shrink={shrink} onClick={(event) => clickMenuItem(event, 'top')} />
        </Link>
        <Menu open={open}>
          <MenuItem to="/?scroll=catalog" onClick={(event) => clickMenuItem(event, 'catalog')}>
            Каталог
          </MenuItem>
          <MenuItem to="/calculator/" activeClassName="active">
            Калькулятор
          </MenuItem>
          <MenuItem to="/?scroll=partners" onClick={(event) => clickMenuItem(event, 'partners')}>
            Дизайнерам
          </MenuItem>
          <MenuItem to="/?scroll=contacts" onClick={(event) => clickMenuItem(event, 'contacts')}>
            Контакты
          </MenuItem>
          <SocialWrap>
            <Social href={whatsappUrl} target="_blank" rel="nofollow">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.7966 4.24355C22.5287 2.96736 21.0203 1.95545 19.3585 1.26642C17.6968 0.577399 15.9149 0.224964 14.116 0.229536C6.57277 0.229536 0.432084 6.3687 0.429035 13.915C0.429035 16.3267 1.05865 18.6806 2.25539 20.7569L0.314697 27.8474L7.56979 25.9433C9.57664 27.0357 11.825 27.6086 14.1099 27.6096H14.116C21.6577 27.6096 27.7984 21.4704 27.8014 13.9241C27.8066 12.1259 27.4554 10.3446 26.7679 8.68298C26.0805 7.02138 25.0706 5.5125 23.7966 4.24355ZM14.116 25.2999H14.1114C12.074 25.3002 10.074 24.752 8.32137 23.7129L7.90671 23.466L3.60152 24.5956L4.74947 20.3987L4.47963 19.9688C3.34051 18.1553 2.73748 16.0566 2.74018 13.915C2.74323 7.64318 7.84573 2.54068 14.1206 2.54068C15.615 2.53736 17.0952 2.83046 18.4755 3.40301C19.8559 3.97557 21.109 4.81621 22.1623 5.87629C23.2213 6.9313 24.0606 8.18574 24.6318 9.5671C25.2031 10.9485 25.4948 12.4293 25.4903 13.9241C25.4872 20.1959 20.3847 25.2999 14.116 25.2999ZM20.3558 16.7795C20.0128 16.6072 18.3328 15.781 18.0187 15.6666C17.7062 15.5523 17.479 15.4959 17.2504 15.8374C17.0217 16.1789 16.3662 16.9487 16.1665 17.1774C15.9667 17.4061 15.767 17.4335 15.4255 17.2628C15.0841 17.092 13.9818 16.7307 12.6753 15.566C11.6585 14.6589 10.9725 13.5399 10.7728 13.1969C10.5731 12.8539 10.7514 12.6695 10.9237 12.4987C11.0777 12.3463 11.2652 12.0993 11.4359 11.8996C11.6067 11.6999 11.6631 11.5581 11.7774 11.3294C11.8918 11.1007 11.8353 10.901 11.7484 10.7303C11.6631 10.558 10.9786 8.87498 10.6935 8.19048C10.4176 7.52732 10.1355 7.61574 9.92515 7.60659C9.70726 7.59768 9.4892 7.59361 9.27114 7.5944C9.09773 7.59881 8.92711 7.63901 8.76997 7.71247C8.61283 7.78592 8.47256 7.89105 8.35796 8.02126C8.04391 8.36427 7.16123 9.19055 7.16123 10.8736C7.16123 12.5566 8.38693 14.1833 8.55767 14.412C8.72841 14.6406 10.9694 18.0936 14.3996 19.5754C15.2167 19.9276 15.8539 20.138 16.3494 20.2965C17.168 20.5572 17.9135 20.5191 18.5035 20.4322C19.1606 20.3346 20.5265 19.6059 20.8116 18.8071C21.0967 18.0083 21.0967 17.3238 21.0113 17.1805C20.9259 17.0372 20.6957 16.9503 20.3558 16.7795Z" />
              </svg>
            </Social>
            <Social href={instaUrl} target="_blank" rel="noopener noreferrer">
              <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4616 6.93823C10.5389 6.93823 7.37482 10.1023 7.37482 14.025C7.37482 17.9477 10.5389 21.1117 14.4616 21.1117C18.3843 21.1117 21.5483 17.9477 21.5483 14.025C21.5483 10.1023 18.3843 6.93823 14.4616 6.93823ZM14.4616 18.6323C11.9266 18.6323 9.85425 16.5661 9.85425 14.025C9.85425 11.4839 11.9205 9.41767 14.4616 9.41767C17.0027 9.41767 19.0689 11.4839 19.0689 14.025C19.0689 16.5661 16.9965 18.6323 14.4616 18.6323ZM23.4911 6.64835C23.4911 7.56734 22.751 8.3013 21.8382 8.3013C20.9192 8.3013 20.1852 7.56117 20.1852 6.64835C20.1852 5.73552 20.9254 4.99539 21.8382 4.99539C22.751 4.99539 23.4911 5.73552 23.4911 6.64835ZM28.1848 8.32598C28.08 6.11175 27.5742 4.15041 25.9521 2.53446C24.3361 0.918507 22.3748 0.412751 20.1606 0.301732C17.8785 0.172209 11.0385 0.172209 8.75639 0.301732C6.54834 0.406584 4.587 0.912339 2.96488 2.52829C1.34276 4.14424 0.843171 6.10558 0.732152 8.31981C0.602629 10.6019 0.602629 17.4419 0.732152 19.724C0.837004 21.9382 1.34276 23.8995 2.96488 25.5155C4.587 27.1314 6.54217 27.6372 8.75639 27.7482C11.0385 27.8777 17.8785 27.8777 20.1606 27.7482C22.3748 27.6434 24.3361 27.1376 25.9521 25.5155C27.568 23.8995 28.0738 21.9382 28.1848 19.724C28.3143 17.4419 28.3143 10.608 28.1848 8.32598ZM25.2366 22.1726C24.7555 23.3815 23.8242 24.3128 22.6092 24.8C20.7897 25.5217 16.4722 25.3551 14.4616 25.3551C12.4509 25.3551 8.12728 25.5155 6.31397 24.8C5.10509 24.319 4.17376 23.3876 3.6865 22.1726C2.96488 20.3531 3.13141 16.0357 3.13141 14.025C3.13141 12.0143 2.97105 7.6907 3.6865 5.87738C4.16759 4.6685 5.09892 3.73717 6.31397 3.24992C8.13345 2.52829 12.4509 2.69482 14.4616 2.69482C16.4722 2.69482 20.7958 2.53446 22.6092 3.24992C23.818 3.731 24.7494 4.66233 25.2366 5.87738C25.9583 7.69686 25.7917 12.0143 25.7917 14.025C25.7917 16.0357 25.9583 20.3593 25.2366 22.1726Z" />
              </svg>
            </Social>
          </SocialWrap>
          <CloseBtn onClick={() => setOpen(false)} />
        </Menu>
        <Burger onClick={() => setOpen(true)} />
      </Content>
    </Wrap>
  );
};

export default Header;
