export default class PokemonService {
  _apiBase = "https://pokeapi.co/api/v2";

  async getResource(url) {
    // debugger
    const res = await fetch(`${this._apiBase}${url}`);

    // if (!res.ok || Math.random() > 0.85) {
    //   throw new Error(`Could not fetch ${url}, received ${res.status}`);
    // }
    return await res.json();
  }

  async getAllPokemons() {
    const res = await this.getResource(`/pokemon/`);
    return res.results.map(this._transformPokemons);
  }

  async getPokemon(pokemonName) {
    const pokemon = await this.getResource(`/pokemon/${pokemonName}/`);
    return this._transformPokemon(pokemon);
  }

  async getAbility(abilityName) {
    const ability = await this.getResource(`/ability/${abilityName}/`);
    return this._transformAbility(ability);
  }

  async getType(typeName) {
    const type = await this.getResource(`/type/${typeName}/`);
    return this._transformType(type);
  }

  _transformType = (type) => {
    return {
      id: type.id,
      name: type.name,
      class: type.move_damage_class,
      generation: type.generation
    };
  };

  _transformAbility = (ability) => {
    return {
      id: ability.id,
      name: ability.name,
      effect: ability.effect_entries,
    };
  };

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