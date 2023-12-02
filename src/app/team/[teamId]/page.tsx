import "./page.module.css";
import { getTeam } from "@/db/provider";
import Row from "@/component/Row";
import TLInfo from "@/component/tl/TLInfo";
import ListCardContainer from "@/component/card-list/ListCardContainer";
import { createCardList } from "@/function/card-list";

async function getTeamData(teamId: string) {
    const db = await getTeam();
    return db.getTeam(teamId);
}

async function getTeamLeagues(teamId: string) {
    const db = await getTeam();
    return db.getTeamLeagues(teamId);
}

export default async function TeamPage({ params }: { params: { teamId: string } }) {
    const { teamId } = params;
    const { name, summary, logo } = await getTeamData(teamId);

    const leagues = await getTeamLeagues(teamId);
    const cards = createCardList([
        ...(leagues.map(league => ({
            name: league.name,
            img: league.logo,
            href: `/league/${league.id}`
        })))
    ]);

    return <>
        <Row>
            <TLInfo name={name} summary={summary} logo={logo}/>
            <div id="team-leagues" className="col-12" style={{ marginBottom: "3rem" }}>
                <h3 style={{ marginBottom: "1rem" }}>Leagues</h3>
                <ListCardContainer cards={cards}/>
            </div>
            <div id="team-Calendar" className="col-12">
                <h3 style={{ marginBottom: "1rem" }}>Calendar</h3>
            </div>
        </Row>
    </>;
}
