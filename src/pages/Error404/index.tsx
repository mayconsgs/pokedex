import { Link } from "react-router-dom";
import error404 from "../../assets/img/error404.svg";
import Image from "../../assets/img/rocket.png";
import { Button } from "../../components/Button";
import { Typography } from "../../components/Typography";
import * as S from "./styles";

const Error404 = () => {
  return (
    <S.Background>
      <S.Container>
        <S.ImageAndTextContainer>
          <S.Text404 src={error404} />
          <S.Image src={Image} alt="Equipe Rocket" />
        </S.ImageAndTextContainer>

        <Typography textStyle="Title3" color="white">
          The rocket team{" "}
          <Typography color="dark" as="span">
            has won this time.
          </Typography>
        </Typography>

        <S.ButtonContainer>
          <Button as={Link} to="/" color="yellow">
            Return
          </Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Background>
  );
};

export default Error404;
