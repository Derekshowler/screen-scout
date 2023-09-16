import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Home() {
  return (
    <Container>
      <header>
        <h1>Screen Scout</h1>
      </header>

      <main>
        <SearchBar>
          <Input type="text" placeholder="Search movies or TV shows..." />
          <Button>Search</Button>
        </SearchBar>

        <section className="recommended-movies">
          <h2>Recommended Movies</h2>
          {/* Movie cards will go here */}
        </section>

        <section className="top-tv-shows">
          <h2>Top TV Shows</h2>
          {/* TV show cards will go here */}
        </section>
      </main>

      <footer>
        <p>© 2023 Screen Scout</p>
      </footer>
    </Container>
  );
}