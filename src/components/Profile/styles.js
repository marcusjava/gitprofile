import styled from "styled-components/macro";

export const Profile = styled.div`
  background-color: #3b4252;
  padding: 1.5rem;
  color: #eceff4;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const Stats = styled.div`
  grid-area: stats;
  display: flex;
  justify-content: space-between;

  gap: 15px;
  margin: 30px 0;
`;

export const Avatar = styled.img`
  grid-area: avatar;
  width: 300px;
`;

export const Button = styled.button`
  grid-area: button;
  background-color: #eceff4;
  cursor: pointer;
  color: #3b4252;
  width: 192px;
  height: 50px;
  border-radius: 5px;
  margin: 30px 0;
  font-size: 20px;

  &:hover {
    background-color: #898d95;
  }
`;

export const SubTitle = styled.h2`
  grid-area: subtitle;
  color: #eceff4;
  font-size: 28px;
  font-style: italic;
  max-width: 400px;
  text-align: left;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    ${Profile} {
      width: 100%;
      display: grid;
      grid-template-areas:
        "avatar title title title title subtitle"
        "avatar bio bio bio bio bio"
        "avatar info info info info info"
        "avatar stats stats stats stats stats";

      flex-direction: row;
    }
    ${Info} {
      flex-direction: row;
      width: 100%;
    }

    ${Stats} {
      justify-content: flex-start;
    }

    ${Button} {
      display: none;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    ${Profile} {
      width: 100%;
      padding: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    ${Info} {
      flex-direction: column;
      justify-content: center;
      margin-left: 15px;
      width: 400px;
    }
    ${Stats} {
      flex-direction: column;
      justify-content: center;
      margin-left: 15px;
      width: 400px;
    }

    ${Avatar} {
      width: 100%;
    }

    ${Button} {
      display: none;
    }
  }
`;

export const StatsItem = styled.span`
  font-size: 1.2rem;
`;

export const Title = styled.h1`
  grid-area: title;
  color: #eceff4;
  font-size: 40px;
  font-style: italic;
  line-height: 50px;
  max-width: 400px;
  text-align: left;
`;

export const Text = styled.p`
  grid-area: bio;
  font-size: 18px;
  line-height: 28px;
  max-width: 400px;
  text-align: left;
`;

export const SpanSmall = styled.span``;

export const InfoItem = styled.span`
  font-size: 1.6rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &hover {
    text-decoration: underline;
  }
`;
