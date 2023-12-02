"use client";

import { FC, MouseEventHandler, ReactNode } from "react";
import { useRouter } from "next/navigation";

type ListCardProps = {
    image: ReactNode;
    name: string;
    href: string;
};

const ListCardBase: FC<ListCardProps> = ({ image, name, href }: ListCardProps) => {
    const router = useRouter();
    const onClick: MouseEventHandler<HTMLDivElement> = async(event) => {
        event.preventDefault();
        router.push(href);
    };

    return <div className="card text-center h-100" onClick={onClick} style={{ cursor: "pointer", minHeight: "15rem" }}>
        <div className="h-100 w-100 d-inline-flex justify-content-center align-items-center" style={{ padding: "1rem" }}>
            {image}
        </div>
        <div className="card-body">
            <p className="card-text">{name}</p>
        </div>
    </div>;
};

export default ListCardBase;
