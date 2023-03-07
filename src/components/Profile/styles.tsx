import styled from 'styled-components';

export const Style = {
  Container: styled.article`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img.profile-image {
      width: 92px;
      height: 92px;
      margin-bottom: 10px;
    }

    h1 {
      font-family: 'DM Sans', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      color: #242831;
    }

    p {
      font-family: 'Source Sans Pro', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      color: #6b6b6b;
    }

    .profile-detail {
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;

      ::after {
        content: '';
        height: 34px;
        width: 1px;
        background-color: #6b6b6b;
        opacity: 0.5;
        position: absolute;
      }

      article {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        p {
          font-family: 'DM Sans', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 140%;
          color: #242831;
        }

        span {
          font-family: 'Source Sans Pro', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 140%;
          text-align: center;
          color: #6b6b6b;
        }
      }
    }
  `,
};
