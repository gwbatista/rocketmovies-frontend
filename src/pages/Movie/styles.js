import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 40px auto 0;

  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;

    margin-top: 25px;
    
    > h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;

      margin-right: 20px;
    }

    .icons {
      color: ${({ theme }) => theme.COLORS.PINK};

      padding-top: 12px;

      font-size: 25px;
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 8px;

    margin: 24px 0 40px;

    > img {
        width: 16px;
        height: 16px;

        border-radius: 35px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
    }

    .ficlock {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .itens {
    margin-bottom: 40px;

    > span {
    background-color: rgba(255, 133, 155, 0.05);

    padding: 8px 16px;
    margin-right: 8px;

    border: none;
    border-radius: 8px;

    font-weight: 400;
    font-size: 12px;
    }
  }

  .text {
    font-weight: 400;
    font-size: 16px;

    text-align: justify;
  }
  
  
`;