"use client";
import { useContext } from "react";
import Empty from "../Empty/Empty";
import Context, { TimeLineListContext } from "@/Context/Context";


const TimeLine = () => {

    const [timelineList, setTimelineList] = useContext(TimeLineListContext);
    // console.log(timelineList);

    if(timelineList.length ===0){
        return(
            <Empty></Empty>
        )
    }

    return (
        <div className="container mx-auto my-20">
            <h1 className="font-bold text-5xl mb-6">Timeline</h1>
            <div className="grid gap-6">
                {timelineList.map((friend, index) => {
                    return (
                        <div key={index} className="flex gap-4 p-5 rounded-xl items-center shadow">
                            <div>
                                <h3 className="text-3xl">{friend.type === "call" ? "📞" : friend.type === "text" ? "💬" : "📹"}</h3>
                            </div>
                            <div className="">
                                <h3>
                                    <span className="font-extrabold">{friend.type === "call" ? "Call" : friend.type === "text" ? "Text" : "Video"}</span> with {friend.name}
                                </h3>
                                <p>
                                    <small>{friend.time}</small>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TimeLine;
