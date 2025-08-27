import { ChevronRight } from "lucide-react";

export default function NavbarOpen() {
  return (
    <div
      className="
        flex items-center gap-6
        bg-gradient-to-r from-[#1A1A40] to-[#1A1A40]
        rounded-full px-8 py-3
        text-white shadow-md
      "
    >
      <ChevronRight className="w-5 h-5 text-white" />
      <a href="#" className="text-sm hover:opacity-80 transition">Home</a>
      <a href="#" className="text-sm hover:opacity-80 transition">About Us</a>
      <a href="#" className="text-sm hover:opacity-80 transition">Blogs</a>
      <button className="bg-white text-black text-sm px-4 py-1 rounded-full hover:opacity-90">
        Request a Demo
      </button>
    </div>
  );
}
