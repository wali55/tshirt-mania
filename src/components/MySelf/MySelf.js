import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ornaments}) => {
    return (
        <div>
            <h3>MySelf</h3>
            <p>House: {house}</p>
            <Special house={house} ornaments={ornaments}></Special>
        </div>
    );
};

export default MySelf;