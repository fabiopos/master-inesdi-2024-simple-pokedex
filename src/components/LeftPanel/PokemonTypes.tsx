import { PokemonType } from "models";

interface PokemonTypesProps {
  types: PokemonType[];
}
export default function PokemonTypes({ types }: PokemonTypesProps) {
  return (
    <>
      <strong>Pokemon Type</strong>
      {types.map((x) => (
        <div
          key={`pokemon-type-item-${x.slot}`}
          className="screen type-display"
        >
          {x.type.name}
        </div>
      ))}
    </>
  );
}
