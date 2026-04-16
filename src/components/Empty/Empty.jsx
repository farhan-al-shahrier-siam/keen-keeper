import Link from "next/link";

const Empty = () => {
    return (
        <div className="container mx-auto my-20 space-y-4">
            
            <h1 className="font-bold text-5xl mb-6">Timeline</h1>
            <div className="p-40 text-center space-y-3">
                <h2 className="text-4xl font-bold">There is no History...</h2>
                <p>Go to home page...</p>
                <Link href="/"><button  className="btn ">Go back</button></Link>
            </div>
        </div>
    );
};

export default Empty;