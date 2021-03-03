import React from 'react'


const SearchField = () => {
    return(
        <div className="ui container">
            <div className="ui input">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="ui selection dropdown">
                <input type="hidden" name="Character"/>
                <i className="dropdown icon"></i>
                <div className="default text">Region</div>
                <div className="menu">
                    <div className="item" data-value="1">US</div>
                    <div className="item" data-value="0">EU</div>
                </div>
        </div>
</div>
    )
}

export default SearchField