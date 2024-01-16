import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggler } from "./ui/ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <div className="bg-[#0160FE] w-fit">
                <img
                src="https://www.shareicon.net/data/128x128/2016/06/22/612440_dropbox_512x512.png"
                alt="logo"
                className="invert"
                height={50}
                width={50}
                />
            </div>
            <h1 className="font-bold text-xl">Dropbox</h1>
        </Link>
        <div className="px-5 flex space-x-2 items-center">
            <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
            <SignedOut>
                <SignInButton afterSignUpUrl="/dashboard" mode="modal" />
            </SignedOut>
        </div>
    </header>
  );
}
export default Header;
