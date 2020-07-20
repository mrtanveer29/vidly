import React from 'react';
import Like from './common/Like';
import TableHead from "./common/TableHead";
import TableBody from './common/TableBody';
function MovieTable(props) {
    const {movies,onToggleLike,onDelete,onSort, sortColumn}=props
    const columns=[
        {name:"Name",path:"title"},
        {name:"Genre",path:"genre.name"},
        {name:"Strocks", path:"numberInStock"},
        {name:"Rating",path:"dailyRentalRate"},
        {name:"Preference", content:movie => <Like isLiked={movie.liked} onToggleLike={()=>onToggleLike(movie)}/> },
        {name:"Action", content: movie=> <a style={{color:'#fff'}} onClick={()=>onDelete(movie._id)} className="btn btn-danger btn-small" >Delete</a>}
    ]
    return (
        <table className="table">
            <TableHead columns={columns} onSort={onSort} sortColumn={sortColumn}/>
            <TableBody columns={columns} data={movies}/>
        </table>
    );
}

export default MovieTable;