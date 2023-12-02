import { TeamAdapter as ATeamAdapter } from "@/db/adapter/team";
import { Team } from "@/db/entity/team";
import { LeagueData, TeamData } from "@/db/actual/test/dataset";
import { League } from "@/db/entity/league";

class TeamAdapter extends ATeamAdapter {
    public async getTeam(id: string): Promise<Team> {
        return TeamData[0];
    }
    
    public async searchTeamByName(name: string): Promise<Team[]> {
        return TeamData.filter(team => team.name.toLowerCase().indexOf(name.toLowerCase()) != -1);
    }

    public async getTeamLeagues(id: string): Promise<League[]> {
        return LeagueData.filter(league => league.teams.includes(id));
    }
}

export { TeamAdapter };
