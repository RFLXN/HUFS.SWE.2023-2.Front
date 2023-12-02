import { getLeague, getTeam } from "@/db/provider";
import { Team } from "@/db/entity/team";
import { League } from "@/db/entity/league";

async function search(s: string) {
    const teamDB = await getTeam();
    const leagueDB = await getLeague();

    const teams = await teamDB.searchTeamByName(s);
    const leagues = await leagueDB.searchLeagueByName(s);

    return { teams, leagues };
}

interface SearchResult {
    teams: Team[];
    leagues: League[];
}

export { search };
export type { SearchResult };
