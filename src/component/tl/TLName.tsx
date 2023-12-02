import { FC } from "react";

type TLNameProps = {
    name: string;
};

const TLName: FC<TLNameProps> = ({ name }) => {
    return <div id="tl-name">
        <h1>{name}</h1>
    </div>;
};

export default TLName;
