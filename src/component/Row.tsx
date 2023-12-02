import { FC, ReactNode } from "react";

type RowProps = {
    children: ReactNode,
    id?: string
};

const Row: FC<RowProps> = ({ children, id }: { children: ReactNode, id?: string }) => {
    if (id && id != "") return <div className="row" id={id}>{children}</div>;

    return <div className="row">
        {children}
    </div>;
};

export default Row;
