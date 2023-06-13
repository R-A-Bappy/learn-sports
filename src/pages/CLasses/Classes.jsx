import { useEffect, useState } from "react";
import ClassCart from "./ClassCart";



const Classes = () => {
    const [classData, setClassData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-11/12 md:w-10/12 mx-auto my-8">
            {
                classData.map(data => <ClassCart key={data._id} data={data} />)
            }
        </div>
    );
};

export default Classes;