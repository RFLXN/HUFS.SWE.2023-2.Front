import "./page.module.css";

export default function MatchPage({ params }: { params: { matchId: string } }) {
    const { matchId } = params;
    return (
        <main>
            {params.matchId}
        </main>
    );
}
