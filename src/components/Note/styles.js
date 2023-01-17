import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled(Link)`
  width: 100%;
  background-color: rgba(255, 133, 155, 0.05);

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 25px;
  
  display: flex;
  flex-direction: column;
  gap: 15px;

  cursor: pointer;

  > h1 {
    flex: 1;
    text-align: left;

    font-size: 24px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
  }

  .icons {
    color: ${({ theme }) => theme.COLORS.PINK};
    width: 84px;
    height: 12px;

    margin-bottom: 15px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 16px;
    text-align: justify;

    margin-bottom: 15px;
  }
  
`;