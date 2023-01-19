import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`

  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 64px;

  padding: 24px 123px;

  > strong {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    width: 630px;
    height: 56px;

    padding: 24px 19px;

    border-radius: 10px;
    border-color: transparent;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-size: 14px;
  }

  `

export const Profile = styled.div`

  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;

    border: 1px solid #3E3B47;
    border-radius: 35px;
  }

  > div {
      display: flex;
      flex-direction: column;
      
      margin-right: 9px;
      line-height: 24px;

    strong {
      font-size: 14px;
    }

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      align-self: end;
    }
  }
`
export const Imagem = styled(Link)`
  > img {
    width: 64px;
    height: 64px;

    border: 1px solid #3E3B47;
    border-radius: 35px;
  }
`;