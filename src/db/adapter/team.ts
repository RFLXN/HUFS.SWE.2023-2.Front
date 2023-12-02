import type { Team } from "@/db/entity/team";
import { League } from "@/db/entity/league";

abstract class TeamAdapter {
    public abstract getTeam(id: string): Team | Promise<Team>;

    public abstract searchTeamByName(name: string): Team[] | Promise<Team[]>;

    public abstract getTeamLeagues(id: string): League[] | Promise<League[]>;
}

export { TeamAdapter };
