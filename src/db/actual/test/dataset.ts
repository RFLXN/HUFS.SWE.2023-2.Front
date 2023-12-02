import { League } from "@/db/entity/league";
import { Team } from "@/db/entity/team";
import { User } from "@/db/entity/user";

const LeagueData: League[] = [
    {
        name: "LCK",
        summary: "LCK",
        logo: "/img/LoL_LCK.svg",
        id: "1",
        teams: ["1"]
    }
];

const TeamData: Team[] = [
    {
        name: "T1",
        summary: "T1",
        logo: "/img/T1.png",
        id: "1",
        leagues: ["1"]
    }
];

const UserData: User[] = [
    {
        id: "1",
        favorite: {
            teams: TeamData,
            leagues: LeagueData
        }
    }
];

export { TeamData, LeagueData, UserData };
