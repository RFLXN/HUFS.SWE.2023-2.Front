import { FC } from "react";

type SearchResultListProps = {
    searchResults: {
        name: string,
        href: string
    }[];
};

const SearchResultList: FC<SearchResultListProps> = ({ searchResults }) => {
    return <div className="list-group">
        {searchResults.map((result, i) =>
            <a className="list-group-item list-group-item-action" href={result.href} key={i}>
                <div className="d-flex w-100 justify-content-between">
                    <h6>{result.name}</h6>
                </div>
            </a>
        )}
    </div>;
};

export default SearchResultList;
