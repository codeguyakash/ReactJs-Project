function Comment({ item }) {
    return (
        <div className="col-md-6 col-sm-12 col-lg-3 mb-5">
            <div className="card shadow" >
                <div className="card-body">
                    <h5 className="card-title">ID : {item.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Email : {item.email}</h6>
                    <p className="card-text text-justify">{item.body}</p>
                </div>
            </div>
        </div>
    )
}
export default Comment