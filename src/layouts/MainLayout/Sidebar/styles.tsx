import styled from 'styled-components';

export const Style = {
  Container: styled.aside`
    width: 85px;
    position: fixed;
    top: 0;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);

    p {
      margin-top: 10px;
      font-family: 'DM Sans', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      text-align: center;
      color: rgba(0, 0, 0, 0.3);
      transition: color 0.25s linear;
    }

    .sidebar-logo {
      height: 71px;
      width: 100%;
      background: #29b712;
      display: grid;
      place-items: center;
    }

    .sidebar-routes {
      margin: 25px 0;
    }

    .sidebar-actions {
      margin-top: auto;
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        text-transform: uppercase;
      }
    }
  `,
};
