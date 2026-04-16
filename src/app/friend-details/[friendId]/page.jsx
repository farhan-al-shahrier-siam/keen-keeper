import FriendDetail from "@/components/FriendDetail/FriendDetail";

export const metadata = {
    title: "Keen-Keeper | Friend-Details",
    description: "In this page a single friend's detais is shown",
};

const FriendIdPage = async ({ params }) => {
    const { friendId } = await params;

    const data = await fetch("http://localhost:3000/friends.json");
    const friends = await data.json();


    // console.log(friendId)
    return (
        <div>
            <FriendDetail friendId={friendId} friends={friends}></FriendDetail>
        </div>
    );
};

export default FriendIdPage;
