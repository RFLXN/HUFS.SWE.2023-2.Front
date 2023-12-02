import type { League } from "@/db/entity/league";
import { Team } from "@/db/entity/team";

abstract class LeagueAdapter {
    public abstract getLeague(id: string): League | Promise<League>;

    public abstract searchLeagueByName(name: string): League[] | Promise<League[]>;

    public abstract getLeagueTeams(id: string): Team[] | Promise<Team[]>;
}

export { LeagueAdapter };
