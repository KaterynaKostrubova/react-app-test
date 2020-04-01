import React from "react";

class MoviesPagination extends React.Component {

    render(){
        const {page, total_pages, updateMoviesPagination} = this.props;

        const handleNext = (value) => {
            if (value < total_pages){
                return(event) => {
                    updateMoviesPagination(++value)
                }
            }
        };

        const handlePrev = (value) => {
            if(value > 1){
                return(event) => {
                    updateMoviesPagination(--value)
                }
            }
        };

        const handleStatic = (value) => {
            return(event) => {
                updateMoviesPagination(value)
            }

        };

        return(
            <div className="d-flex justify-content-center">
                <button type="button" id='prev' className='btn btn-sm btn-dark' onClick={handlePrev(page)}>
                    PREV</button>
                <button type="button" id='first' className='btn text-muted' onClick={handleStatic(1)}>
                    1</button>
                <div className="btn btn-outline-info">
                    -{page}-
                </div>
                <button type="button" id='last' className='btn text-muted' onClick={handleStatic(total_pages)}>
                    {total_pages}</button>
                <button type="button" id='next' className='btn btn-sm btn-dark' onClick={handleNext(page)}>
                    NEXT</button>
            </div>
        )
    }
}

export default MoviesPagination