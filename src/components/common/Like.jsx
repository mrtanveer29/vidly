import React from 'react';

const Like = (props) => {
    let className=(props.isLiked)?"fa fa-heart":"fa fa-heart-o";
    return (
        <i onClick={props.onToggleLike} style={{cursor: "pointer"}} className={className} aria-hidden="true"></i>
    );
};

export default Like;
