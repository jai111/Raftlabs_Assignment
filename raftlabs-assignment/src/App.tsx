import React, { useState } from 'react';
import { Board } from './containers/Board';

import './App.scss';
import { Library } from './containers/Library';

function App() {
    const [page, setPage] = useState(0);

    return (
        <div className="app">
            <div className="header">.raftlabs</div>
            <div className="container">
                <div className="navigator">
                    <button
                        className={`assignmentNavigator ${page === 0 ? 'selected' : ''}`}
                        type="button"
                        onClick={() => setPage(0)}
                    >
                    Assignment 1
                    </button>
                |
                    <button
                        className={`assignmentNavigator ${page === 1 ? 'selected' : ''}`}
                        type="button"
                        onClick={() => setPage(1)}
                    >
                    Assignment 2
                    </button>
                </div>
                {
                    page === 0 ? (
                        <div className="assignment">
                            <Library />
                        </div>

                    ) : (
                        <div className="assignment">
                            <Board numsRows={8} numColumns={8} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default App;
