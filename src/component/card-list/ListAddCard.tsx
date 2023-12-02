import { FC } from "react";
import ListCardBase from "@/component/card-list/ListCardBase";
import "bootstrap-icons/icons/plus.svg";
import PlusIcon from "@/component/img/PlusIcon";

type ListAddCardProps = {
    name: string
    href: string;
};
const ListAddCard: FC<ListAddCardProps> = ({ name, href }) => {
    const icon = <PlusIcon className="card-img-top h-75 w-75" width={150} height={150} />;

    return <ListCardBase image={icon} name={name} href={href} />;
};

export default ListAddCard;
