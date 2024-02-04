import styled from "styled-components";

export const Container = styled.div`
  P {
    font-size: 13px;
    color: #B8B8D4;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px 0;
  }
  label {
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 16px 10px;
      border: 2px solid #25CD89;
      border-radius: 6px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background-color: #02044A;
    }
  }
  button {
    background-color: #25CD89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 16px 20px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 20px;
  }

  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 16px 20px;
    color: #B8B8D4;
  }
`;