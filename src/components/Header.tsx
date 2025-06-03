import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="py-8 px-4 md:px-16 sticky top-0 z-50 ">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={72} height={72} className="rounded-md" />
                    </Link>
                </div>
                <div className="flex items-center gap-8 mr-4">
                {/* <Link href="/blog" className="text-black text-xl dark:text-white">Blog</Link> */}
                <Link href="/contact" className="text-black text-xl dark:text-white">Contact Us</Link>
                </div>
               
            </div>

        </header>
    );
};

export default Header;