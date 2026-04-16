import { FaPlus } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="mt-20 container mx-auto border-b border-gray-200">
            <div className="text-center space-y-4">
                <h1 className="font-bold text-5xl ">Friends to keep close in your life</h1>
                <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
                <button className="btn bg-[#244D3F] text-white mt-4"><FaPlus />Add a Friend</button>
            </div>
            <div className="grid p-2 md:p-0 grid-cols-2 md:grid-cols-4 gap-6 my-10">
                <div className="text-center border-2 border-gray-200 rounded-xl space-y-2 p-8">
                    <h3 className="font-semibold text-3xl">10</h3>
                    <p>Total Friends</p>
                </div>
                <div className="text-center border-2 border-gray-200 rounded-xl space-y-2 p-8">
                    <h3 className="font-semibold text-3xl">3</h3>
                    <p>On Track</p>
                </div>
                <div className="text-center border-2 border-gray-200 rounded-xl  space-y-2 p-8">
                    <h3 className="font-semibold text-3xl">6</h3>
                    <p>Need Attention</p>
                </div>
                <div className="text-center border-2 border-gray-200 rounded-xl  space-y-2 p-8">
                    <h3 className="font-semibold text-3xl">12</h3>
                    <p>Interactions This Month</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;