"use client"
import { TimeLineListContext } from "@/lib/providers";
import { useContext } from "react";

const TimeLinePage = () => {
    const [timelineList, setTimelineList] = useContext(TimeLineListContext)
    console.log(timelineList)
    return (
        <div className="container mx-auto my-20">
            <h1 className="font-bold text-5xl mb-6">Timeline</h1>
            
        </div>
    );
};

export default TimeLinePage;