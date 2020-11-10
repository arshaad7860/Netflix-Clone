import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 165px 45px;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 500;
  margin: auto;
  max-width: 640px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
