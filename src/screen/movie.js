import React from 'react';
import Card from '../component/card';

const moviesData = [
  {
    title: 'The Shawshank Redemption',
    subtitle: '1994 ‧ Drama/Crime ‧ 2h 22m',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
    rating: 9.3
  },
  {
    title: 'The Godfather',
    subtitle: '1972 ‧ Drama/Crime ‧ 2h 58m',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    rating: 9.2
  },
  {
    title: 'Breaking Bad',
    subtitle: 'TV Series ‧ 2008–2013 ‧ 45min',
    description: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    image: 'https://www.tallengestore.com/cdn/shop/products/BreakingBad-BryanCranston-Heisenberg-TVShowPoster9.jpg?v=1683604400',
    rating: 9.5
  },
  {
    title: 'The Wire',
    subtitle: '2002-2008 ‧ Drama/Crime/Thriller ‧ 59min',
    description: "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
    image: 'https://m.media-amazon.com/images/I/61cJb+LQ47L._AC_UF894,1000_QL80_.jpg',
    rating: 9.3
  },
];

function MovieScreen() {
  return (
    <div className="Movies">
      <h1>Movie List</h1>
      <div className="movie-list">
        {moviesData.map((movie, index) => (
          <Card key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieScreen;