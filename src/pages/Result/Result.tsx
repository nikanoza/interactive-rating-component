import styled from "styled-components";
import { Thanks } from "svg";

const Result: React.FC<{ number: number | null }> = () => {
  return <Card>
    <Thanks />
  </Card>;
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
  
`

export default Result;
