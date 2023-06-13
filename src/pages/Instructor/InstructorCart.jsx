

const InstructorCart = ({ data }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={data.photoURL} className="w-full h-72" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: <span>{data.name}</span></h2>
                <p>Email: {data.email}</p>
            </div>
        </div>
    );
};

export default InstructorCart;