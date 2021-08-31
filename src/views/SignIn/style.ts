import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  background: #8c52e5;
  width: 100%;
  height: 100vh;

  .card{
      display: grid;
      background: #f9f9f9f9;
      max-width: 300px;
      border-radius: 12px;
      padding: 30px;

      a { 
          text-decoration: none;
          text-align:center;
          color: #8c52e5;
          font-family: "Roboto", sans-serif;
          margin: 10px 0;
          transition: all 0.6s;
          &:hover{
	        transform: scale(1.03);
          }
        }

      h5 {
          font-family: 'Roboto', sans-serif;
          text-align: center;
          font-size: 22px;
          color: #8c52e5
      }
      form{
          input{
              width: 100%;
              margin: 5px 0 0 0;
              height: 32px;
              border-radius: 5px;
              border: 1px solid #e2e2e2e2;
              padding: 0 5px 0 5px;
          }
          input[type="submit"]{
              font-weight: 700;
              cursor: pointer;
              border: 1px solid #e2e2e2e2;
              background: #68de5a;
              padding: 5px;
              border-radius: 5px;
              transition: 0.6s;
              &:hover{
                  background-color: #8c52e5;
                  color: #f9f9f9f9
              }
          }
      }
  }
`;
