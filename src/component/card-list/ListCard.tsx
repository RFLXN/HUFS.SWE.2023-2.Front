import { FC, MouseEventHandler } from "react";
import ListCardBase from "@/component/card-list/ListCardBase";

type ListCardProps = {
    img: string;
    name: string;
    href: string;
};

const ListCard: FC<ListCardProps> = ({ img, name, href }: ListCardProps) => {
    const image = <img src={img} className="card-img-top w-75" alt={name} />;

    return <ListCardBase image={image} name={name} href={href} />;
};

export default ListCard;
