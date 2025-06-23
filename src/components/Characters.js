
export default function Characters(props) {
  const { characters, setCharacters } = props;
  const resetCharacters = () => {
    setCharacters(null);
  } 

  if (!characters) {
    return <h2>Cargando personajes...</h2>;
  }
  if (characters.length === 0) {
    return <h2>No hay personajes disponibles</h2>;
  }
  const characterList = characters.map((character,index) => (
    <><div key={index} className='character-container'>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <h3>{character.name}</h3>
        <h6>
          {character.status === 'Alive' ? (
            <>
              <span className="alive" />
              Vivo
            </>
          ) : (
            <>
              <span className="dead" />
              Muerto
            </>
          )}
        </h6>
        <p>
          <span className="text-grey">Episodios: </span>
          <span>{character.episode.length}</span>
        </p>
        <p>
          <span className="text-grey">Especie: </span>
          <span>{character.species}</span>
        </p>
      </div>
    </div>
    </>
  ));

  return (
    <div className='characters'>
      <h1>Personajes</h1>
      <span className='back-home' onClick={resetCharacters}>Volver al Inicio</span>
      <div className='container-characters'>
        {characterList}
      </div>
      <span className='back-home' onClick={resetCharacters}>Volver al Inicio</span>
    </div>
  );
}