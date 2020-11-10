import React from 'react';

function Cards(props){
    return(
        <React.Fragment>
            <div className="container">
                <div className="card">
                    <img className="card-img-top" src={props.imgSource} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.message}</p>
                        <a href={props.link} className="btn btn-primary stretched-link" target='_blank'>Watch now</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cards;
