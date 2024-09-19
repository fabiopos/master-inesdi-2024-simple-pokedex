import { Pokemon } from "models";
// import c from "classnames";
import { PokemonCard } from "components/pokemon-card";
import { usePokemonTeam } from "contexts/use-pokemon-team";

interface PokemonCardProps {
  pokemon: Pokemon;
}
export default function PokemonItem({ pokemon }: PokemonCardProps) {
  const { setPokemonTeam } = usePokemonTeam();
  const handleClick = (pokemon: Pokemon) => {
    setPokemonTeam((prev) => prev.filter((x) => x.id !== pokemon.id));
  };
  return (
    <div className="pokemon-item">
      <PokemonCard pokemon={pokemon} onClick={handleClick} />
    </div>
  );
}
