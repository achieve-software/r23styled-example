import Image from "./styled/Image";
import StyledCard from "./styled/CardStyles";

const Card = ({ id, title, body, image }) => {
  return (
    <StyledCard odd={id % 2 && "row-reverse"}>
      <h2>{title}</h2>
      <p>{body}</p>

      <div>
        <Image src={`./images/${image}`} />
      </div>
    </StyledCard>
  );
};

export default Card;
