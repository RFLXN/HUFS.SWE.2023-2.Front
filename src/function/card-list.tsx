import ListCard from "@/component/card-list/ListCard";
import ListAddCard from "@/component/card-list/ListAddCard";

interface BaseCardData {
    name: string, href: string;
}

interface CardData extends BaseCardData {
    img: string;
}

function createCardList(cards: (BaseCardData|CardData)[]) {
    return cards.map((card, i) => {
        if ("img" in card) {
            return <ListCard img={card.img} name={card.name} href={card.href} key={i} />;
        }
        return <ListAddCard name={card.name} href={card.href} key={i} />;
    });
}

export { createCardList };
export type { BaseCardData, CardData };

