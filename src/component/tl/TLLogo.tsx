import { FC } from "react";

type TLLogoProps = {
    img: string;
    name: string;
};

const TLLogo: FC<TLLogoProps> = ({ img, name }) => {
    return <div id="tl-logo">
        <img src={img} alt={name} className="img-thumbnail border-0"/>
    </div>;
};

export default TLLogo;
