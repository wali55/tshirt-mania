import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister'

const Father = ({house, ornaments}) => {
    return (
        <div>
            <h3>Father</h3>
            <p>House: {house}</p>
            <div style={{display: 'flex'}}>
                <MySelf house={house} ornaments={ornaments}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;