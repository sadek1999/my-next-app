import React from 'react';

const product  = ({params ,searchParams}) => {
    console.log(searchParams)
    return (
        <div>
            <h1>This is dynamic product page  </h1>
        </div>
    );
};

export default product ;