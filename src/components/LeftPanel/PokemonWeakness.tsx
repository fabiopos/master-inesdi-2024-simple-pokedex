import { usePokemonTypes } from "hooks/use-pokemon-types";
import { PokemonType } from "models";
import { useMemo } from "react";

interface PokemonWeaknessProps {
  types: PokemonType[];
}
export default function PokemonWeakness({ types }: PokemonWeaknessProps) {
  const { isLoading, pokemonDetail } = usePokemonTypes(types);

  const weaknesses = useMemo(() => {
    return (
      pokemonDetail
        ?.flatMap((x) => x.damage_relations.double_damage_from)
        .flatMap((x) => x.name) ?? []
    );
  }, [pokemonDetail]);

  const names = useMemo(() => {
    if (!weaknesses) return [];
    return [...new Set(weaknesses)];
  }, [weaknesses]);

  if (isLoading) return "Loading weakness...";

  return (
    <>
      <strong>Waeknesses</strong>
      <div className="pokemon-weakness-container">
        {(names ?? []).map((name, idx) => (
          <div key={`weakness-${idx}`} className="pokemon-weakness">
            <span>{name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
