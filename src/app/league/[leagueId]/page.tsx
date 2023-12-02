import "./page.module.css";
import Row from "@/component/Row";
import TLInfo from "@/component/tl/TLInfo";
import { getLeague } from "@/db/provider";
import ListCardContainer from "@/component/card-list/ListCardContainer";
import { createCardList } from "@/function/card-list";
import TLCalendar from "@/component/tl/calendar/TLCalendar";

async function getLeagueData(leagueId: string) {
    const db = await getLeague();
    return db.getLeague(leagueId);
}

async function getLeagueTeams(leagueId: string) {
    const db = await getLeague();
    return db.getLeagueTeams(leagueId);
}

export default async function LeaguePage({ params }: { params: { leagueId: string } }) {
    const { leagueId } = params;
    const { name, summary, logo } = await getLeagueData(leagueId);

    const teams = await getLeagueTeams(leagueId);
    teams.map(team => ({
        name: team.name, img: team.logo, href: `/team/${team.id}`
    }));
    const cards = createCardList([
        ...(teams.map(team => ({
            name: team.name, img: team.logo, href: `/team/${team.id}`
        })))
    ]);

    return <>
        <Row>
            <TLInfo name={name} summary={summary} logo={logo}/>
            <div id="league-teams" className="col-12" style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: "1rem" }}>Teams</h3>
                <ListCardContainer cards={cards}/>
            </div>
            <div id="league-Calendar" className="col-12">
                <h3 style={{ marginBottom: "1rem" }}>Calendar</h3>
                <TLCalendar/>
            </div>
        </Row>
    </>;
}
