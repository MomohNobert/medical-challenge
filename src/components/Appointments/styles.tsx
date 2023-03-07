import styled from 'styled-components';

interface Option {
  option: string;
}

interface P {
  active: boolean;
}

export const Style = {
  Container: styled.div`
    width: 100%;
    height: 65%;

    section.treatment-info {
      background: #f8f8f8;
      border-radius: 10px;

      .ti-header {
        border-bottom: 1px solid #6b6b6b33;
        padding: 15px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 140%;
          color: #242831;
          font-family: 'DM Sans', sans-serif;
        }

        button {
          height: 45px;
          border: 1px solid #d9d9d93c;
          border-radius: 5px;
          background-color: white;
          font-family: 'DM Sans', sans-serif;
          padding: 0 15px;
        }
      }
    }

    article.ti-content {
      padding: 20px 25px;
    }
  `,
  Routes: styled.section<Option>`
    height: 45px;
    width: 600px;
    background: #f8f8f8;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    position: relative;
    cursor: pointer;

    ::after {
      content: '';
      width: 32%;
      height: 80%;
      background: #ffffff;
      border-radius: 5px;
      z-index: 5;
      position: absolute;
      transition: left 0.25s linear;
      left: ${({ option }) =>
        option === 'upcoming' ? '1%' : option === 'past' ? '34%' : '67%'};
    }
  `,
  P: styled.p<P>`
    width: 32%;
    font-family: 'DM Sans', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    text-align: center;
    color: #6b6b6b;
    z-index: 7;
    color: ${({ active }) => (active ? 'black' : '#6b6b6b')};
    transition: color 0.25s linear;
  `,
};
