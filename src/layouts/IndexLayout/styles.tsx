import styled from 'styled-components';

export const Style = {
  Container: styled.div`
    width: calc(100% - 85px);
    height: 100vh;
    margin-left: 85px;
    padding: 50px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .il-profile-section,
    .il-details-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .il-profile-section {
      width: 25%;
    }

    .il-details-section {
      width: 72.5%;
    }
  `,
};
