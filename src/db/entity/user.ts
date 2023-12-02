import { Team } from "@/db/entity/team";
import { League } from "@/db/entity/league";

interface User {
    id: string,
    favorite: {
        teams: Team[];
        leagues: League[];
    };
}

export type { User };
