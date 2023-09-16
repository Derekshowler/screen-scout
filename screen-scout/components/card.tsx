import styled from 'styled-components';

const CardContainer = styled.div`
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    margin: 10px;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 300px;  // or whatever height you want for the image
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #555;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  padding: 10px;
  font-size: 16px;
  text-align: center;
`;

interface CardProps {
  title: string;
  backdropPath: string;
}

const Card: React.FC<CardProps> = ({ title, backdropPath }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;

  return (
    <CardContainer>
      {backdropPath ? (
        <CardImage src={imageUrl} alt={title} />
      ) : (
        <Placeholder>{title}</Placeholder>  // If you're using the styled placeholder approach
      )}
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default Card;