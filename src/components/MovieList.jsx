import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Pagination from './common/Pagination';
import paginate from '../utils/paginate'
import ListGroup from "./common/listGroup";
import MovieTable from './MovieTable';
import _ from "lodash";
class MovieList extends Component {
    state={
        pageSize:4,
        currentPage:1,
        movieList:[],
        genreList:[],
        sortColumn:{path:"_id",order:"asc"}
    }
    componentDidMount(){
        const genre=[{name:"All Genre"},...getGenres()];
        this.setState({movieList:getMovies(),genreList:genre});
    }
    
    handleDelete=(id)=>
    {
       let filtered=this.state.movieList.filter(mov=>mov._id!==id); 
       this.setState({movieList:filtered})
    }
    handleToggleLike=(movie)=>{
        let movies=[...this.state.movieList];
       const index=movies.indexOf(movie);
       movies[index].liked= !( movies[index].liked);
       this.setState({movieList:movies})

    }
    handlePageChange=(page)=>{
        this.setState({currentPage:page});
    }
    handleGenreSelect=(genre)=>{
        this.setState({selectedGenre:genre,currentPage:1});
    }
    handleSort=(sortColumn)=>{
        this.setState({sortColumn});
    }
    render() {
        const {movieList,genreList,pageSize,currentPage,selectedGenre,sortColumn}=this.state;
        const filteredMovie=selectedGenre && selectedGenre._id? movieList.filter(item=>item.genre.name===selectedGenre.name): movieList;
        const sortedMovie=_.orderBy(filteredMovie,[sortColumn.path],[sortColumn.order]);
        const splittedMovieList=paginate(sortedMovie,currentPage,pageSize);
    
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-2">
                    <h1>Filter</h1>
                    <ListGroup items={genreList} 
                        selectedGenre={selectedGenre} 
                        onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className="col-md-10"> 
                    <h1>There are {filteredMovie.length} Movies in the List</h1>
                   <MovieTable 
                        movies={splittedMovieList} 
                        onToggleLike={this.handleToggleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}/>
                        
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Pagination 
                        currentPage={currentPage} 
                        itemsCount={filteredMovie.length} 
                        pageSize={pageSize} 
                        onPageChange={this.handlePageChange}/>
                </div>
            </div>
            </div>
        );
    }
}


export default MovieList;