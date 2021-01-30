export default class PokemonService {
  _apiBase = "https://pokeapi.co/api/v2";
  debugger;
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok || Math.random() > 0.75) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPokemons() {
    const res = await this.getResource(`/pokemon/`);
    return res.results.map(this._transformPokemons);
  }

  // async getPokemon(id) {
  //   const pokemon = await this.getResource(`/pokemon/${id}/`);
  //   return this._transformPokemon(pokemon);
  // }

  async getPokemon(pokemonName) {
    const pokemon = await this.getResource(`/pokemon/${pokemonName}/`);
    return this._transformPokemon(pokemon);
  }

  _transformPokemons = (pokemon) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = pokemon.url.match(idRegExp)[1];

    return {
      id,
      name: pokemon.name,
    };
  };

  _transformPokemon = (pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      experience: pokemon.base_experience,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      abilities: pokemon.abilities,
      stats: pokemon.stats,
    };
  };
}