import styled from 'styled-components';

export const Style = {
  Container: styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      width: 100%;
      height: 45px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      background-color: white;
      font-family: 'DM Sans', sans-serif;
    }

    article.fd-section {
      height: calc(100% - 75px);

      h2 {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #242831;
        margin-bottom: 30px;
      }

      article {
        display: flex;
        width: 100%;
        height: 50px;
        padding: 0 25px;
        background: #f9f9f9;
        margin-bottom: 10px;
        align-items: center;
        cursor: pointer;
        border: 1px solid #f9f9f9;
        transition: border 0.25s linear;

        p {
          font-family: 'Source Sans Pro', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 140%;
          color: #36393e;
        }

        svg {
          margin-right: 15px;
        }

        &:hover {
          border: 1px solid black;
        }
      }
    }
  `,
};
