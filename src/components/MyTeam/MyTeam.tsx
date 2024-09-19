import { usePokemonTeam } from "contexts/use-pokemon-team";
import PokemonItem from "./PokemonItem";
import c from "classnames";
import "./my-team.css";
import { useMemo } from "react";

export default function MyTeam() {
  const { pokemonTeam } = usePokemonTeam();
  const teamCount = useMemo(() => {
    return pokemonTeam.length;
  }, [pokemonTeam]);
  const isTeamReady = useMemo(() => teamCount >= 6, [teamCount]);
  return (
    <div className={c("team-root")}>
      <strong>Selected pokemons: {pokemonTeam.length}/6 - click a card to remove</strong>
      <div className={c("team-container", isTeamReady && "team-full")}>
        {pokemonTeam.map((x) => (
          <PokemonItem pokemon={x} />
        ))}
      </div>
    </div>
  );
}
