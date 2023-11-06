import { useNavigate } from "react-router-dom";
import {
  Description,
  LinkVerify,
  VerifyWrapper,
  Wrapper,
} from "./VerifyLink.styled";

interface VerifyLinkProps {
  linkVerify: string;
}

const VerifyLink: React.FC<VerifyLinkProps> = ({ linkVerify }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <VerifyWrapper>
      <Wrapper>
        <Description>
          Congratulations on your successful registration, all you have to do is
          follow the link to activate your account
        </Description>
        <LinkVerify
          href={linkVerify}
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
        >
          Click here
        </LinkVerify>
      </Wrapper>
    </VerifyWrapper>
  );
};

export default VerifyLink;
