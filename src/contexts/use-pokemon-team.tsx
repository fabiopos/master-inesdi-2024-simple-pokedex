import { useContext } from "react";
import { PokemonTeamContext } from "./pokemon-team-context";

export function usePokemonTeam() {
  return useContext(PokemonTeamContext);
}