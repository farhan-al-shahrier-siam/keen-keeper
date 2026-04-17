"use client"
import { createContext, useState } from "react";


 export const TimeLineListContext = createContext([]);

const Context = ({children}) => {

    const [timelineList, setTimelineList] = useState([]);

    return (
        <TimeLineListContext value={[timelineList, setTimelineList]}>
            {children}
        </TimeLineListContext>
    );
};

export default Context;