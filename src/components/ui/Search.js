import React, { useState }from 'react';

const Search = ({ getQuery }) =>{
    const [text, setText ] = useState('');

    const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }


    return (
        <section className="search">
            <form>
                <input
                type="text"
                classsName="from-control"
                placeholder="Search characters"
                value={text}
                onChange={(e)=> onChange(e.target.value)}
                outoFocus
                />
            </form>
        </section>
    )

}

export default Search;

