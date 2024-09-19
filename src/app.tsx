import { ThemeProvider } from "contexts/theme-context";
import { PokemonTeamProvider } from "contexts/pokemon-team-context";
import { Pokedex } from "components/pokedex";
import MyTeam from "components/MyTeam/MyTeam";

export function App() {
  return (
    <main>
      <ThemeProvider>
        <PokemonTeamProvider>
          <Pokedex />
          <MyTeam />
        </PokemonTeamProvider>
      </ThemeProvider>
    </main>
  );
}
