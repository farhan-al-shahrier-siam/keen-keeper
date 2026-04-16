import Image from "next/image";
import Link from "next/link";

const Friend = ({ friend }) => {
    const { name, days_since_contact, tags, status, picture } = friend;
    return (
        <Link href="/friend-details">
            <div className="text-center  rounded-2xl shadow-xl p-6 space-y-2">
                <Image className="rounded-full mx-auto" src={picture} alt={name} height={80} width={80}></Image>
                <h4 className="font-semibold text-2xl">{name}</h4>
                <p>{days_since_contact}d ago</p>
                <h4 className="text-[12px] font-medium my-2">
                    <div>
                        {tags.map((tag, index) => (
                            <span className="bg-[#CBFADB] py-1.5 px-2 rounded-full ml-1" key={index}>
                                {tag.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </h4>
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
            </div>
        </Link>
    );
};

export default Friend;
