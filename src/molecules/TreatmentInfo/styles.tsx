import styled from 'styled-components';

export const Style = {
  Container: styled.article`
    height: 90px;
    width: 100%;
    padding: 15px 25px;
    background: #ffffff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: calc(33% / 3);

      :first-of-type,
      :nth-of-type(2) {
        width: 25%;
        position: relative;
        height: 100%;
        padding-left: 2%;

        ::after {
          content: '';
          height: 34px;
          opacity: 0.5;
          border: 0.5px solid #6b6b6b;
          width: 0;
          position: absolute;
          right: 0;
          top: 15px;
        }
      }

      :last-of-type {
        display: flex;
        flex-direction: row;

        svg {
          margin-right: 7px;
        }
      }
    }

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      color: #242831;
      font-family: 'DM Sans', sans-serif;
    }

    span {
      font-family: 'Source Sans Pro', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      color: #6b6b6b;
    }

    p {
      font-family: 'DM Sans', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #242831;
    }

    :not(:last-of-type) {
      margin-bottom: 15px;
    }
  `,
};
