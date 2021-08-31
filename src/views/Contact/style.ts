import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #32FF;
  color: #fff;

  .link-button {
      text-decoration: none;
      color: #32FF;
      background-color: #fff;
      margin-top: 10px;
      border-radius: 5px;
      border: solid #000000 1px;
  }

  .form-wrapper{
      display: grid;
      text-align: center;
      .card{
          background-color: #fff;
          padding: 22px;
          border-radius: 12px;
          
          form {
              display: grid;

              input{
                  margin: 5px 0 0;
              }
          }
      }
  }
`;
