import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container-wrapper flex h-[70px] items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
            ★
          </div>

          <h1 className="text-lg font-semibold">
            Review<span className="font-bold">RATE</span>
          </h1>
        </div>

        {/* Search */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-[320px] rounded border border-gray-300 px-3 pr-10 text-sm outline-none focus:border-purple-500"
          />

          <Search
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600"
          />
        </div>

        {/* Nav */}
        <div className="flex items-center gap-6 text-sm">
          <button className="hover:text-purple-600">
            SignUp
          </button>

          <button className="hover:text-purple-600">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}