import Link from 'next/link';
import styled from 'styled-components';

export const Style = {
  Container: styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75px;
    margin-bottom: 17.5px;
    text-transform: uppercase;

    &:hover {
      p {
        color: black;
      }
    }
  `,
};
