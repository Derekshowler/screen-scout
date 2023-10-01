import styled from 'styled-components';
import Link from 'next/link';

const CardContainer = styled.div`
  display: block;
  width: 250px;
  height: 280px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px;
  transition: transform 0.2s;
  text-decoration: none;  // Remove underline
  color: inherit;  // Use the parent's text color
  cursor: pointer;  // To indicate it's clickable

  & > a {
    text-decoration: none;  // Remove underline
    color: inherit;  // Use the parent's text color
  }

  &:hover {
    transform: scale(1.05);
    text-decoration: none;  // Ensure underline doesn't appear on hover
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 200px;  // or whatever height you want for the image
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #555;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;  // Adjust this value based on your design needs
  object-fit: cover;  // This will ensure the image covers the space without stretching
  display: block;  // This removes any space below the image
`;

const CardTitle = styled.h3`
  padding: 10px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
`;

interface CardProps {
    id: number;
    title: string;
    backdropPath: string;
    type: 'movie' | 'tv';  // This will help determine the URL structure
}

const Card: React.FC<CardProps> = ({ id, title, backdropPath, type }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;

  return (
    <Link href={`/${type}/${id}`} passHref>
      <CardContainer>
        {backdropPath ? (
          <CardImage src={imageUrl} alt={title} />
        ) : (
          <Placeholder>{title}</Placeholder>
        )}
        <CardTitle>{title}</CardTitle>
      </CardContainer>
    </Link>
  );
};

export default Card;