import React from 'react';

const MyCloud = (props) => (
    <div { ...props } className="tag-item-wrapper">
        <div>
            { props.text }
        </div>
        <div className="tag-item-tooltip">
            Me has encontrado!
        </div>
    </div>
);

export default MyCloud;
