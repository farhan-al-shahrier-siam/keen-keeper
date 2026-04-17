import Context from "@/Context/Context";

const Providers = ({ children }) => {
    return <Context>{children}</Context>;
};

export default Providers;
