

const InstructorCart = ({ data }) => {
    console.log(data)
    return (
        // <div className="card w-full bg-base-100 shadow-xl h-[500px]">
        //     <figure><img src={data.photoURL} className="w-full h-full" alt="Shoes" /></figure>
        //     {/* <div className="card-body">
        //         <h2 className="card-title">Name: <span>{data.name}</span></h2>
        //         <p>Email: {data.email}</p>
        //     </div> */}
        // </div>
        <div className="w-full bg-base-100 shadow-xl relative">
            <figure><img src={data.photoURL} className="w-full h-[550px] rounded-xl hover:opacity-60" alt="Shoes" /></figure>
            <div className="absolute bottom-5 left-10 text-zinc-900 font-bold invisible hover:visible">
                <h2 className="text-2xl">Name: <span className="font-medium">{data.name}</span></h2>
                <p>Email: {data.email}</p>
            </div>
        </div>
    );
};

export default InstructorCart;