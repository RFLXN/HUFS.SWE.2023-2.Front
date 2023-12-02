import { LeagueAdapter as ALeagueAdapter } from "@/db/adapter/league";
import { League } from "@/db/entity/league";
import { LeagueData, TeamData } from "@/db/actual/test/dataset";
import { Team } from "@/db/entity/team";

class LeagueAdapter extends ALeagueAdapter {
    public async getLeague(id: string): Promise<League> {
        return LeagueData[0];
    }

    public async searchLeagueByName(name: string): Promise<League[]> {
        return LeagueData.filter(league => league.name.toLowerCase().indexOf(name.toLowerCase()) != -1);
    }

    public async getLeagueTeams(id: string): Promise<Team[]> {
        return TeamData.filter(team => team.leagues.includes(id));
    }
}

export { LeagueAdapter };
