import { FC } from "react";

type TLSummaryProps = {
    content: string;
};

const TLSummary: FC<TLSummaryProps> = ({ content }) => {
    return <div id="tl-summary">
        {content}
    </div>;
};

export default TLSummary;
