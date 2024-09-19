import type { Pokemon } from "models";

import "./pokemon-card.css";

type Props = {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
};

export function PokemonCard({ pokemon, onClick }: Props) {
  return (
    <article className="pokemon-card" role="listitem" onClick={()=> onClick(pokemon)}>
      <>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p>
      </>
    </article>
  );
}
