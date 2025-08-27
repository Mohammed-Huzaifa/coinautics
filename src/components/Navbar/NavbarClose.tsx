import { ChevronRight } from "lucide-react";

export default function NavbarClose() {
  return (
    <div
      className="
        flex items-center justify-between
        bg-gradient-to-r from-[#1A1A40] to-[#1A1A40]
        rounded-full px-6 py-1
        text-white shadow-md
      "
    >
      <ChevronRight className="w-8 h-5 text-white" />
      <button className="bg-white text-black text-sm px-8 py-1 rounded-full hover:opacity-90">
        Request a Demo
      </button>
    </div>
  );
}
