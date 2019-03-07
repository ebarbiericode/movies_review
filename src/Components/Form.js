import React from 'react'

const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.loadMovie}>
                <input type="text" name="search" placeholder="Search"/>
                <button>Search!</button>
            </form>
        </div>
    )
}

export default Form