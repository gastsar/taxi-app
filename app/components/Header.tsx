import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../../public/logo-taxi.png";
function Header() {
  return (
    <div>
      <header className="shadow-md flex justify-between items-center px-5 lg:px-10 py-1">
        <Image
          src={Logo}
          className="cursor-pointer"
          alt="logo"
          width={50}
          height={50}
        />
        <ul className="hidden md:flex items-center gap-4">
          <li className="text-sm cursor-pointer font-semibold text-[#333] hover:text-yellow-500">
            Home
          </li>
          <li className="text-sm cursor-pointer font-semibold text-[#333] hover:text-yellow-500">
            Trajets
          </li>
          <li className="text-sm cursor-pointer font-semibold text-[#333] hover:text-yellow-500">
            Services
          </li>
          <li className="text-sm cursor-pointer font-semibold text-[#333] hover:text-yellow-500">
            Aides
          </li>
        </ul>
        <div>
          <SignedOut>
            <div className="shadow-md p-2 rounded-sm text-sm cursor-pointer font-semibold text-[#333]/80 hover:text-[#333] flex items-center gap-2 hover:bg-yellow-500">
              <SignInButton />
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
    </div>
  );
}

export default Header;
