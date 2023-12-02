import "./page.module.css";
import ListCardContainer from "@/component/card-list/ListCardContainer";
import { createCardList } from "@/function/card-list";
import { getUser } from "@/db/provider";

async function getFavoriteList(userId: string) {
    const db = await getUser();
    const user = await db.getUser(userId);
    return user.favorite;
}

export default async function Home() {
    const favorite = await getFavoriteList("1");

    const leagues = favorite.leagues.map(league => ({
        name: league.name, img: league.logo, href: `/league/${league.id}`
    }));
    const leagueCards = createCardList([
        ...leagues,
        { name: "add", href: "#" }
    ]);

    const teams = favorite.teams.map(team => ({
        name: team.name, img: team.logo, href: `/team/${team.id}`
    }));
    const teamCards = createCardList([
        ...teams,
        { name: "add", href: "#" }
    ]);

    return (
        <>
            <div id="title" className="text-center" style={{
                marginTop: "5rem",
                marginBlock: "5rem"
            }}>
                <h1 className="display-1">EZports</h1>
                <h2 className="text-body-secondary">(대충 캐치프레이즈 영역)</h2>
            </div>

            <div style={{ marginBottom: "4rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Favorite Leagues/Contests</h2>
                <ListCardContainer cards={leagueCards}/>
            </div>

            <div style={{ marginBottom: "4rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Favorite Teams</h2>
                <ListCardContainer cards={teamCards}/>
            </div>
        </>
    );
}
