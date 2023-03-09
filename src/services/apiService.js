const apiService = () => {
    const _apiKey = 'https://rickandmortyapi.com/api/character';

    const getCharacters = async () => {
        const result = await fetch(_apiKey).then(res => res.json());
        return result.results.map(char => _transformCharacter(char));
    }

    const getCharacter = async (id) => {
        const result = await fetch(`${_apiKey}/${id}`).then(res => res.json());
        return _transformCharacter(result.results);
    }

    const _transformCharacter = (char) => {
        return {
            id : char.id,
            name: char.name,
            status: char.status,
            specie: char.species,
            gender: char.gender,
            img: char.image,
            origin: char.origin.name,
            type: char.type ? char.type : 'unknown'
        }
    }

    return {getCharacters, getCharacter}
}

export default apiService;
