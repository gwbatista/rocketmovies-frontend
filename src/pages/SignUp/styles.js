import styled from "styled-components";
import backgroundImg from '../../assets/backgroudn.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;  
    font-style: normal;
    font-weight: 400;

    color: #CAC4CF;

    margin-bottom: 48px;
    align-self: flex-start;
  }

  > h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 48px;
    align-self: flex-start;
  }  

  Button {
    margin-bottom: 42px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

`;