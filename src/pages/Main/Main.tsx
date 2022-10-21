import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Star } from "svg";

const Main: React.FC<{
  setNumber: (num: number) => void;
  number: number | null;
}> = (props) => {
  const navigate = useNavigate();
  const onSubmit = () => {
    if (props.number) {
      navigate("/result");
    }
  };

  return (
    <Card>
      <Circle active={false}>
        <Star />
      </Circle>
      <Question>How did we do?</Question>
      <Info>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Info>
      <Panel>
        <Circle
          active={props.number === 1}
          className="circle"
          onClick={() => props.setNumber(1)}
        >
          <CircleNum>1</CircleNum>
        </Circle>
        <Circle
          active={props.number === 2}
          className="circle"
          onClick={() => props.setNumber(2)}
        >
          <CircleNum>2</CircleNum>
        </Circle>
        <Circle
          active={props.number === 3}
          className="circle"
          onClick={() => props.setNumber(3)}
        >
          <CircleNum>3</CircleNum>
        </Circle>
        <Circle
          active={props.number === 4}
          className="circle"
          onClick={() => props.setNumber(4)}
        >
          <CircleNum>4</CircleNum>
        </Circle>
        <Circle
          active={props.number === 5}
          className="circle"
          onClick={() => props.setNumber(5)}
        >
          <CircleNum>5</CircleNum>
        </Circle>
      </Panel>
      <Button onClick={onSubmit}>submit</Button>
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
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const CircleNum = styled.span`
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.17px;
`;

type CircleTypes = {
  active: boolean;
};

const Circle = styled.span(
  (props: CircleTypes) => `
  width: 42px;
  height: 42px;
  background-color: ${props.active ? "#7C8798" : "#262e38"};
  color: ${props.active ? "#FFFFFF" : "#7c8798"};
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  @media (min-width: 768px){
    width: 50px;
    height: 50px;
  }
`
);

const Question = styled.p`
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: white;
  margin-top: 16px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 35px;
    margin-top: 30px;
  }
`;

const Info = styled.p`
  font-family: "Overpass", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #969fad;
  margin-top: 10px;
  max-width: 279px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 24px;
    max-width: 340px;
  }
`;

const Panel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

const Button = styled.button`
  width: 279px;
  height: 45px;
  border-radius: 22px;
  background-color: #fc7614;
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.87px;
  color: #ffffff;
  margin-top: 24px;
  text-transform: uppercase;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #fc7614;
  }
  @media (min-width: 768px) {
    margin-top: 32px;
    width: 340px;
    font-size: 15px;
    letter-spacing: 2px;
  }
`;

export default Main;
