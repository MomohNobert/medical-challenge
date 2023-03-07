import styled from 'styled-components';

export const Style = {
  Container: styled.section`
    width: 100%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    article {
      width: 22.5%;
      border-bottom: 1px solid #6b6b6b33;
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 10px;

      p {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        color: #6b6b6b;
        margin-bottom: 6px;
      }

      span {
        font-family: 'DM Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #242831;
      }
    }
  `,
};
