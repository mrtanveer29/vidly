import React from 'react';

function ListGroup(props) {
    
    return (
        <div>
            <ul className="list-group">
                {props.items.map(item=><li
                key={item[props.valueField]} 
                onClick={()=>props.onItemSelect(item)} 
                style={{'cursor':'pointer'}} 
                className={props.selectedGenre===item?"list-group-item active":"list-group-item"}>{item[props.textField]}</li>)}
            </ul>
        </div>
    );
}
ListGroup.defaultProps={
    valueField:"_id",
    textField:"name"
}
export default ListGroup;
