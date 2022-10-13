import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

function Footer() {
  const MainFooter = styled.footer`
  background: #000;
  margin: 0 auto;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;

      li {
      margin: 12px 16px;
      display: inline-block;

        .link {
          color: #fffc;
          text-decoration: none;

          &.active {
            color: #fff;
          }
        }
      }
    }
`;

  return (
    <MainFooter className="footer">
      <Container>
        <div className="footer-inner">
          <ul>
            <li><NavLink className="link" to='/Home'>Home</NavLink></li>
            <li><NavLink className="link" to='/About'>About</NavLink></li>
            <li><NavLink className="link" to='/HowItWorks'>How it works</NavLink></li>
            <li><NavLink className="link" to='/ContactUs'>Contact Us</NavLink></li>
          </ul>
        </div>
      </Container>
    </MainFooter>
  );
}

export default Footer;