import React from "react";

function MovieCard(props) {
  return (
    // <div class="row row-cols-2 row-cols-md-1 g-9">
    //   <div class="col">
    //     <div class="card h-100">
    //       <img src={props.item.imageUrl} className="card-img-top" alt="..." />
    //       <div class="card-body">
    //         <h5 class="card-title">{props.item.title}</h5>
    //         <p class="card-text">{props.item.description}</p>
    //       </div>
    //       <div class="card-footer">
    //         <small class="text-muted">Rating: {props.item.rating}</small>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="movie-card card">
      <div className="card-body">
        <img src={props.item.imageUrl} className="card-img-top" alt="..." />
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Rating: {props.item.rating}</li>
      </ul>
    </div>
  );
}

export default MovieCard;
