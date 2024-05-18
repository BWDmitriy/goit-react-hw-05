const MovieCast = ({ cast }) => {
  return (
    <div>
      <h3>Cast:</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path? (
              <img 
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                alt={actor.name} 
                style={{width: '50px', marginRight: '10px'}}
              />
            ) : (
              <span> No image available </span>
            )}
            <span>{actor.name}</span>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;