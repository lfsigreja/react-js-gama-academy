import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  background: #8c52e5;
  .wrapper {
      display: grid;
    
      .card {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f3f3f3;
          border-radius: 22px;
          padding: 22px;
          margin: 22px 0;
          img {
              border-radius: 100%;
              width: 100px;
              height: 80px;
          }
          .contentInfo {
              display: grid;
              margin-left: 15px;
          }
      }
    }



`
