"use client";
import { ChangeEvent, FC, useState } from "react";
import { SearchResult } from "@/function/search";
import SearchResultList from "@/component/nav/SearchResultList";

const fetchSearch = async(s: string) => {
    const res = await fetch(`/api/search?s=${s}`);
    if (res.status != 200) return;
    return (await res.json()) as SearchResult;
};

const SearchModal: FC = () => {
    const [searchTarget, setSearchTarget] = useState("");
    const [searchResult, setSearchResult] = useState<SearchResult>();

    const onSearchInputChange = async(event: ChangeEvent<HTMLInputElement>) => {
        const res = await fetchSearch(event.target.value);
        if (res) setSearchResult(res);
    };

    return <div id="search-modal" className="modal fade" tabIndex={-1} aria-hidden={true}>
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text">
                            <i className="bi bi-search"></i>
                        </span>
                        <input type="search" id="search-modal-input" className="form-control" placeholder="Search"
                            onChange={onSearchInputChange}/>
                    </div>

                </div>
                <div className="modal-body">
                    <div id="search-league-list">
                        <h3>League</h3>
                        {searchResult && searchResult.leagues && searchResult.leagues.length > 0 ?
                            // when there is searched league
                            <div id="search-league-list-content">
                                <SearchResultList searchResults={searchResult.leagues.map(league => ({
                                    name: league.name,
                                    href: `/league/${league.id}`
                                }))}/>
                            </div> :
                            // when there is no searched league
                            <div id="search-league-list-content">
                                <p className="text-body-secondary">There is no leagues</p>
                            </div>
                        }
                    </div>
                    <hr/>
                    <div id="search-team-list">
                        <h3>Team</h3>
                        {searchResult && searchResult.teams && searchResult.teams.length > 0 ?
                            // when there is searched team
                            <div id="search-team-list-content">
                                <SearchResultList searchResults={searchResult.teams.map(team => ({
                                    name: team.name,
                                    href: `/team/${team.id}`
                                }))}/>
                            </div> :
                            // when there is no searched team
                            <div id="search-team-list-content">
                                <p className="text-body-secondary">There is no teams</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="modal-footer">
                    <p><small className="text-body-secondary">some footer here</small></p>
                </div>
            </div>
        </div>
    </div>;
};

export default SearchModal;
