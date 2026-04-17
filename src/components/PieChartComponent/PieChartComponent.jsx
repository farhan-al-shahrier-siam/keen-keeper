"use client";
import Context, { TimeLineListContext } from "@/Context/Context";

import { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PieChartComponent = () => {
    const [timelineList, setTimelineList] = useContext(TimeLineListContext);
    let call = 0;
    let text = 0;
    let video = 0;

    timelineList.forEach((friend) => {
        if (friend.type === "call") call++;
        else if (friend.type === "text") text++;
        else if (friend.type === "video") video++;
    });

    const data = [
        { name: "Call", value: call, fill: "#244D3F" },
        { name: "Text", value: text, fill: "#7E35E1" },
        { name: "Video", value: video, fill: "#37A163" },
    ];

    return (
        <div className="mt-20 container mx-auto">
            <h2 className="font-bold text-5xl">Friendship Analytics</h2>
            <div className="shadow-xl p-8">
                <p className="font-medium text-xl">By Interaction Type</p>
                <div className="w-full h-100 mx-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={data} dataKey="value" nameKey="name" innerRadius={80} outerRadius={120} paddingAngle={5} cornerRadius={10} isAnimationActive={true} />

                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* <div className="flex items-center justify-center gap-4 mb-5">
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-3 w-3 bg-[#7E35E1]"></div>
                        <p>Text</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-3 w-3  bg-[#244D3F]"></div>
                        <p>Call</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-3 w-3  bg-[#37A163]"></div>
                        <p>Video</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default PieChartComponent;
