
import PieChartComponent from "@/components/PieChartComponent/PieChartComponent";

export const metadata = {
    title: "Keen-Keeper | Friendship Analytics",
    description: "In this page a single friend's detais is shown",
};


const StatsPage = () => {
    

    return (
        <div>
            <PieChartComponent></PieChartComponent>
        </div>
    );
};

export default StatsPage;