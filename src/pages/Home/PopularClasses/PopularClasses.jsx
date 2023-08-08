import useClasses from "../../../hooks/useClasses";
import ClassCart from "../../CLasses/ClassCart";

const PopularClasses = () => {
    const [classData] = useClasses();
    const popularClasses = classData.slice(0, 6);

    return (
        <>
            <h2 className="text-4xl font-bold text-center  mt-24 mb-12">Popular <span className="text-orange-400">Classes</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 my-8">
                {
                    popularClasses.map(data => <ClassCart key={data._id} data={data} />)
                }
            </div>
        </>
    );
};

export default PopularClasses;