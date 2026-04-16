import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[#244D3F] pt-20 pb-8 text-white">
            <div className="container mx-auto text-center space-y-2">
                <h1 className="font-extrabold text-3xl md:text-7xl">KeenKeeper</h1>
                <p className="font-extralight textarea-sm">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h4 className="mt-6">Social Links</h4>
                <div className="flex gap-2 items-center justify-center text-4xl pb-6 border-b border-[#FAFAFA]/25">
                    <AiFillInstagram />
                    <MdOutlineFacebook />
                    <AiFillTwitterCircle />
                </div>

                <div className="md:flex justify-between"> 
                    <div>
                        <p><small>© 2026 KeenKeeper. All rights reserved.</small></p>
                    </div>
                    <div className="md:flex justify-between gap-4">
                        <p><small>Privacy Policy</small></p>
                        <p><small>Terms of Service</small></p>
                        <p><small>Cookies</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;