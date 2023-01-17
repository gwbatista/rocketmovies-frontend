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
  margin: 0 auto;

  display: flex;
  flex-direction: column;

`;

export const Form = styled.form`
  max-width: 1100px;
  margin: 38px 0;

  h1 {
  margin-top: 24px;
  margin-bottom: 40px;

  font-size: 36px;
  }

  .firstDiv {
    display: flex;
    gap: 40px;

    margin-bottom: 40px;
  }

  TextArea {
    margin-bottom: 40px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-size: 20px;
    font-weight: 400;

    margin-bottom: 24px;
  }

  .secondDiv {
    display: flex;
    justify-content: flex-start;
    gap: 24px;

    padding: 16px;
    margin-bottom: 40px;

    border-radius: 10px;

    background-color: black;
  }

  .button {
    display: flex;
    gap: 40px;

    Button:first-child {
      background-color: black;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

`;

