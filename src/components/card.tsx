import React from "react";

export const Card = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img className="card-img-top" src="http://picsum.photos/200/200" width="100%" height="225" alt="Card" />
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    );
};