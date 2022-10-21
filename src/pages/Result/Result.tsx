import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Thanks } from "svg";

const Result: React.FC<{ number: number | null }> = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.number) {
      navigate("/");
    }
  }, [navigate, props.number]);

  return (
    <Card>
      <Thanks />
      <ResultInfo>You selected {props.number} out of 5</ResultInfo>
      <ThanksSpan>Thank you!</ThanksSpan>
      <Description>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Description>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 15px;
  background-image: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const ResultInfo = styled.div`
  padding: 5px 12px 5px 12px;
  font-family: "Overpass", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  background-color: #262e38;
  border-radius: 22px;
  color: #fc7614;
  margin-top: 30px;
`;

const ThanksSpan = styled.span`
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: white;
  margin-top: 30px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 35px;
    margin-top: 30px;
  }
`;

const Description = styled.p`
  font-family: "Overpass", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #969fad;
  margin-top: 10px;
  max-width: 279px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 24px;
    max-width: 340px;
  }
`;

export default Result;
