"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { FaBoxArchive, FaDeleteLeft } from "react-icons/fa6";
import { HiMiniBellSnooze } from "react-icons/hi2";
import { IoMdText } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { TiVideo } from "react-icons/ti";

import { toast, ToastContainer } from "react-toastify";
import { TimeLineListContext } from "@/Context/Context";

const FriendDetail = ({ friends, friendId }) => {
    const selectedFriend = friends.find((friend) => friend.id == parseInt(friendId));
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = selectedFriend;
    // console.log(name)

    const [timelineList, setTimelineList] = useContext(TimeLineListContext);

    const handleCall = () => {
        setTimelineList([{ name, type: "call", time: `${new Date().toDateString()}` }, ...timelineList]);
        toast.success(`Calling ${name}`);
        // console.log(timelineList)
    };
    const handleText = () => {
        setTimelineList([{ name, type: "text", time: `${new Date().toDateString()}` }, ...timelineList]);
        // console.log(timelineList)
        toast.success(`Text sent to ${name}`);
    };
    const handleVideo = () => {
        setTimelineList([{ name, type: "video", time: `${new Date().toDateString()}` }, ...timelineList]);
        // console.log(timelineList)
        toast.warning(`Video calling ${name}`);
    };

    return (
        <div className="container mx-auto my-20 border border-gray-200 rounded-xl grid md:grid-cols-3 gap-6">
            <div className="text-center p-3">
                <div className="space-y-3 shadow-md rounded-xl">
                    <Image className="rounded-full mx-auto" src={picture} alt={name} height={80} width={80}></Image>
                    <h3 className="font-semibold text-xl">{name}</h3>
                    <h4 className="text-[12px] font-medium text-white my-4">
                        {status === "overdue" ? (
                            <span className="bg-[#EF4444] py-1.5 px-2 rounded-full">Overdue</span>
                        ) : status === "almost due" ? (
                            <span className="bg-[#EFAD44] py-1.5 px-2 rounded-full">Almost Due</span>
                        ) : status === "on-track" ? (
                            <span className="bg-[#244D3F] py-1.5 px-2 rounded-full">On-Track</span>
                        ) : (
                            ""
                        )}
                    </h4>
                    <h4 className="text-[12px] font-medium my-2">
                        <div>
                            {tags.map((tag, index) => (
                                <span className="bg-[#CBFADB] py-1.5 px-2 rounded-full ml-1" key={index}>
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </h4>
                    <p>
                        <small className="italic">{bio}</small>
                    </p>
                    <p className="text-sm text-[#64748B] pb-3">Email: {email}</p>
                </div>
                <div className="space-y-3 mt-3">
                    <button className="btn font-medium w-full">
                        <HiMiniBellSnooze></HiMiniBellSnooze> Snooze 2 weeks
                    </button>
                    <button className="btn font-medium w-full">
                        <FaBoxArchive></FaBoxArchive> Archive
                    </button>
                    <button className="btn font-medium w-full text-red-500">
                        <FaDeleteLeft></FaDeleteLeft>Delete
                    </button>
                </div>
            </div>
            <div className=" col-span-2 p-3">
                <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
                    <div className="shadow rounded-xl p-4 space-y-2">
                        <h2 className="font-semibold text-[#244D3F] text-3xl">{days_since_contact}</h2>
                        <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
                    </div>
                    <div className="shadow rounded-xl p-4 space-y-2">
                        <h2 className="font-semibold text-[#244D3F] text-3xl">{goal}</h2>
                        <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
                    </div>
                    <div className="shadow rounded-xl p-4 space-y-2">
                        <h2 className="font-semibold text-[#244D3F] text-3xl">{next_due_date}</h2>
                        <p className="text-[18px] text-[#64748B]">Next Due</p>
                    </div>
                </div>
                <div className="shadow rounded-xl mb-6">
                    <div className="flex justify-between p-6">
                        <div className="space-y-4">
                            <h3 className="font-medium text-[#244D3F]">Relationship Goal</h3>
                            <p className="text-[#64748B]">
                                Connect every <span className="font-bold text-black">{goal} days</span>
                            </p>
                        </div>
                        <button className="btn">Edit</button>
                    </div>
                </div>
                <div className="p-6 shadow rounded-xl space-y-4">
                    <h3>Quick Check-In</h3>
                    <div className="flex justify-between ">
                        <div onClick={handleCall} className="btn p-7">
                            <TbPhoneCall></TbPhoneCall>Call
                        </div>
                        <div onClick={handleText} className="btn p-7">
                            <IoMdText></IoMdText>Text
                        </div>
                        <div onClick={handleVideo} className="btn p-7">
                            <TiVideo></TiVideo> Video
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default FriendDetail;
