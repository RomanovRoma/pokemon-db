export default class PokeService {
  _apiBase = "https://pokeapi.co/api/v2";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPokemons() {
    const res = await this.getResource(`/pokemon/`);
    return res.results;
  }

  getPokemon(id) {
    return this.getResource(`/pokemon/${id}/`);
  }
}

const poke = new PokeService();

poke.getAllPokemons().then((pokemons) => {
  pokemons.forEach((res) => {
    console.log(res.name);
  });
});

poke.getPokemon(6).then((pokemon) => {
  console.log(pokemon.name);
});
