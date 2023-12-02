import { FC } from "react";
import TLName from "@/component/tl/TLName";
import TLSummary from "@/component/tl/TLSummary";
import TLLogo from "@/component/tl/TLLogo";

type TLInfoProps = {
    name: string;
    summary: string;
    logo: string;
};

const TLInfo: FC<TLInfoProps> = ({ name, summary, logo }) => {
    return <>
        <div className="col-8 col-md-9" id="tl-info">
            <TLName name={name}/>
            <TLSummary content={summary}/>
        </div>
        <div className="col-4 col-md-3" id="tl-logo">
            <TLLogo img={logo} name={name}/>
        </div>
    </>;
};

export default TLInfo;
