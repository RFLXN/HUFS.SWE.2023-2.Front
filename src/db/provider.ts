import { LeagueAdapter } from "@/db/adapter/league";
import { TeamAdapter } from "@/db/adapter/team";
import { UserAdapter } from "@/db/adapter/user";

const targetDB = "test";

async function importModule(moduleName: string) {
    return import(`./actual/${targetDB}/${moduleName}`);
}

async function getLeague() {
    const targetModule = await importModule("league");
    const adapter = targetModule.LeagueAdapter;
    return (new adapter()) as LeagueAdapter;
}

async function getTeam() {
    const targetModule = await importModule("team");
    const adapter = targetModule.TeamAdapter;
    return (new adapter()) as TeamAdapter;
}

async function getUser() {
    const targetModule = await importModule("user");
    const adapter = targetModule.UserAdapter;
    return (new adapter()) as UserAdapter;
}

export { getLeague, getTeam, getUser };
