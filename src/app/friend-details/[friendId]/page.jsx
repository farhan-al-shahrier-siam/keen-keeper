import FriendDetail from "@/components/FriendDetail/FriendDetail";


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
