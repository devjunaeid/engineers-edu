import Sidebar from "@/components/Navbar/Sidebar";
import NextAuthProviderFn from "@/providers/nextAuth";

export default function Layout({ children }) {
  return (
    <NextAuthProviderFn>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden md:px-40">
        <div className="w-full flex-none md:w-72 pt-20">
          <Sidebar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </NextAuthProviderFn>
  );
}
