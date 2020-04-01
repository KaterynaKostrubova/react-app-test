import React from "react";

class MovieTabs extends React.Component {

    // componentWillReceiveProps(nextProps, nextState){
    //     console.log("nextProps", nextProps.sort_by);
    //     console.log("prevProps", this.props.sort_by);
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.sort_by !== this.props.sort_by){
            return  true;
        } else{
            return false;
        }

    }

    render() {
        const { sort_by, updateSortBy } = this.props;

        const handleClick = value => {
            return event => {
                updateSortBy(value);
            }
        };

        const getClassLink = (value) => {
            return `nav-link ${sort_by === value ? 'active' : ''}`
        };

        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div className={getClassLink('popularity.desc')}
                         onClick = {handleClick('popularity.desc')}
                    >
                        Popularity
                    </div>
                </li>
                <li className="nav-item">
                    <div className={getClassLink('revenue.desc')}
                         onClick = {handleClick('revenue.desc')}
                    >
                        Revenue
                    </div>
                </li>
                <li className="nav-item">
                    <div className={getClassLink('vote_average.desc')}
                         onClick = {handleClick('vote_average.desc')}
                    >
                        Vote avetage
                    </div>
                </li>
            </ul>

        )
    }
}

export default MovieTabs

//, popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc