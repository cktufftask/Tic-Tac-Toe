import React from 'react'

function Footer(props) {
    return (
        <footer className="row footer">
                <div className="col-sm-12">{props.message}</div>  
        </footer>
    )
}
export default Footer

