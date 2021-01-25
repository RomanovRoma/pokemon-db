export default class PokeService {
  _apiBase = "https://pokeapi.co/api/v2";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPokemons() {
    const res = await this.getResource(`/pokemon/`);
    return res.results.map(this._transformPokemon);
  }

  async getPokemon(id) {
    const pokemon = await this.getResource(`/pokemon/${id}/`);
    return this._transformPokemon(pokemon);
  }

  async getAllAbilities() {
    const res = await this.getResource(`/ability/`);
    return res.results.map(this._transformAbilitity);
  }

  async getAbility(id) {
    const ability = await this.getResource(`/ability/${id}`);
    return this._transformAbility(ability);
  }

  _transformPokemon = (pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      experience: pokemon.base_experience,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      abilities: pokemon.abilities,
    };
  };

  _transformAbility = (ability) => {
    return {
      id: ability.id,
      name: ability.name,
      effect: ability.effect_entries,
    };
  };
}