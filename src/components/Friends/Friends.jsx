import Friend from "./Friend";

const Friends = async() => {
    const data = await fetch("http://localhost:3000/friends.json")
    const friends = await data.json()
    // console.log(friends)
    return (
        <div className="container mx-auto my-10">
            <h3 className="font-semibold text-2xl mb-4">Your Friends</h3>
            <div className="grid p-2 grid-cols-1 md:grid-cols-4 gap-6">
                {
                    friends.map(friend=> <Friend friend={friend} key={friend.id}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;