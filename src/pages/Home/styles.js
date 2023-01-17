import styled from 'styled-components'

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
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 41px;

    .buttontext {
      width: 207px;
      height: 48px;
      
      border-radius: 8px;

      padding: 21px;

      color: black;
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;
