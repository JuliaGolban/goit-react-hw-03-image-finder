import styled from 'styled-components';

const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  transform: scale(1.03);
  cursor: zoom-in;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export { Item, Image };
