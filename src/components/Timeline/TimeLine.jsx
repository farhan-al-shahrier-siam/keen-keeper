"use client";
import { useContext, useEffect, useState } from "react";
import Empty from "../Empty/Empty";
import Context, { TimeLineListContext } from "@/Context/Context";

const TimeLine = () => {
    const [sortingType, setSortingType] = useState("");

    const [timelineList, setTimelineList] = useContext(TimeLineListContext);

    const [sortedData, setSortedData] = useState(timelineList);
    // console.log(timelineList);

    useEffect(() => {
    if (sortingType === "call") {
        const filtered = timelineList.filter(
            (friend) => friend.type === sortingType
        );
        setSortedData(filtered);
    } else if(sortingType === "text"){
        const filtered = timelineList.filter(
            (friend) => friend.type === sortingType
        );
        setSortedData(filtered);
    } else if(sortingType === "video"){
        const filtered = timelineList.filter(
            (friend) => friend.type === sortingType
        );
        setSortedData(filtered);
    } else {
        setSortedData(timelineList);
    }
}, [sortingType, timelineList]);
    // console.log(sortedData);

    if (sortedData.length === 0) {
        return <Empty></Empty>;
    }

    return (
        <div className="container mx-auto my-20">
            <h1 className="font-bold text-5xl mb-6">Timeline</h1>

            <div className="dropdown dropdown-end flex justify-end">
                <div tabIndex={0} role="button" className="btn m-1">
                    Sort By: {sortingType}
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setSortingType("call")}>
                        <a>call</a>
                    </li>
                    <li onClick={() => setSortingType("text")}>
                        <a>text</a>
                    </li>
                    <li onClick={() => setSortingType("video")}>
                        <a>video</a>
                    </li>
                </ul>
            </div>

            <div className="grid gap-6">
                {sortedData.map((friend, index) => {
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
