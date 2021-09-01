import styled from 'styled-components';

export const NavBar = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background: #f3f3f3;
img {
  max-width: 200px;
  height: auto;
  margin: 12px 0;
}
.nav-links {
    text-decoration: none;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 12px;
    transition: 0.6s;
    &:hover {
        color: #676666
    }
}
`;
