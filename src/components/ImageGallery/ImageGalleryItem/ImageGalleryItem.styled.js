import styled from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  cursor: zoom-in;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  height: 100%;

  &:hover {
    cursor: zoom-in;
  }
`;

export { Image, Link };
