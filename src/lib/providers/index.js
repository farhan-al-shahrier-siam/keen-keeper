"use client";

import { createContext, useState } from "react";

export const TimeLineListContext = createContext([]);

const Providers = ({ children }) => {
    const [timelineList, setTimelineList] = useState([]);

    return (
        <div>
            <TimeLineListContext value={[timelineList, setTimelineList]}>
                {children}
            </TimeLineListContext>
        </div>
    );
};

export default Providers;
