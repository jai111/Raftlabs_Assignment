/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { omitBy } from 'lodash-es';
import { CSVLink } from 'react-csv';
import SearchBar from 'material-ui-search-bar';

import { parseCsvFile } from '../../utils/csvParser';

import {
    Author, Book, BookMagazine, Magazine
} from '../../types/Library';
import StickyHeadTable from '../../components/Table/Table';

import './Library.scss';

function Library() {
    const [_authorsData, setAuthorsData] = useState<Author[]>([]);
    const [booksData, setBooksData] = useState<Book[]>([]);
    const [magazinesData, setMagazinesData] = useState<Magazine[]>([]);
    const [searched, setSearched] = useState<string>('');
    const [searchedRows, setSearchedRows] = useState<BookMagazine[]>([]);

    useEffect(() => {
        parseCsvFile<Author>(`${process.env.PUBLIC_URL}/files/authors.csv`).then(data => {
            const updatedData = data.map(author => ({
                ...author,
                email: author.email.trim()
            }));
            setAuthorsData(updatedData);
        });

        parseCsvFile<Book>(`${process.env.PUBLIC_URL}/files/books.csv`).then(data => {
            const updatedData = data.map(book => ({
                ...book,
                authorsList: book.authors.split(',').map(author => author.trim().toLowerCase())
            }));
            setBooksData(updatedData);
        });

        parseCsvFile<Magazine>(`${process.env.PUBLIC_URL}/files/magazines.csv`).then(data => {
            const updatedData = data.map(magazine => ({
                ...magazine,
                authorsList: magazine.authors.split(',').map(author => author.trim().toLowerCase())
            }));
            setMagazinesData(updatedData);
        });
    }, []);

    const requestSearch = (searchedVal: string) => {
        const filteredRowsBooks: BookMagazine[] = booksData
            .filter(row => row.isbn.split('-').join('').toLowerCase().includes(searchedVal.toLowerCase())
            || row.authorsList?.find(author => author.includes(searchedVal.toLowerCase())))
            .map(row => ({
                title: row.title,
                isbn: row.isbn,
                authors: row.authors,
                publishedAt: '',
                description: row.description
            }));

        const filteredRowsMagazines: BookMagazine[] = magazinesData
            .filter(row => row.isbn.split('-').join('').toLowerCase().includes(searchedVal.toLowerCase())
            || row.authorsList?.find(author => author.includes(searchedVal.toLowerCase())))
            .map(row => ({
                title: row.title,
                isbn: row.isbn,
                authors: row.authors,
                publishedAt: row.publishedAt,
                description: ''
            }));

        setSearchedRows(
            [...filteredRowsBooks, ...filteredRowsMagazines]
                .sort((a, b) => (a.title > b.title) ? 1 : -1)
        );

        setSearched(searchedVal);
    };

    const cancelSearch = () => {
        setSearched('');
        setSearchedRows([]);
    };

    return (
        <div className="library">
            <div className="exports">
                {
                    booksData.length > 0 ? (
                        <CSVLink
                            data={booksData.map(book => omitBy(book, (_, key) => key === 'authorsList'))}
                            headers={Object.keys(booksData[0]).filter(key => key !== 'authorsList')
                                .map(key => ({ label: key, key }))}
                            filename="books.csv"
                        >
                            Export Books to CSV
                        </CSVLink>
                    ) : null
                }
                {
                    magazinesData.length > 0 ? (
                        <CSVLink
                            data={magazinesData.map(magazine => omitBy(magazine, (_, key) => key === 'authorsList'))}
                            headers={Object.keys(magazinesData[0]).filter(key => key !== 'authorsList')
                                .map(key => ({ label: key, key }))}
                            filename="magazines.csv"
                        >
                            Export Magazines to CSV
                        </CSVLink>
                    ) : null
                }
            </div>

            <div className="searchContanier">

                <SearchBar
                    value={searched}
                    onChange={searchVal => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                />

                {
                    (searched && searchedRows.length > 0) ? (
                        <div className="tables">
                            <h2>Searched Details (Sorted on Title)</h2>
                            <StickyHeadTable data={searchedRows.map(book => omitBy(book, (_, key) => key === 'authorsList'))} />
                        </div>
                    ) : (searched ? (<h3>No results found</h3>) : null)
                }

                {
                    searched ? null : (<h3>Enter (ISBN or Author's email) in search box</h3>)
                }
            </div>

            <div className="tables">
                <h2>Books</h2>
                <StickyHeadTable data={booksData.map(book => omitBy(book, (_, key) => key === 'authorsList'))} />
            </div>

            <div className="tables">
                <h2>Magazines</h2>
                <StickyHeadTable data={magazinesData.map(book => omitBy(book, (_, key) => key === 'authorsList'))} />
            </div>

        </div>
    );
}

export default Library;
