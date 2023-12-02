import { FC, ReactNode } from "react";
import Row from "@/component/Row";

type ListCardContainerProps = {
    cards: Iterable<ReactNode>;
};

const ListCardContainer: FC<ListCardContainerProps> = ({ cards }) => {
    return <Row>
        {Array.from(cards).map((card, i) =>
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2" key={i} style={{ marginBottom: "1rem" }}>
                {card}
            </div>)}
    </Row>;
};

export default ListCardContainer;
