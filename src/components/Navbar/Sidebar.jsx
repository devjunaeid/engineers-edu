"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const info = [
  {
    title: "Home",
    url: "/admin",
  },
  {
    title: "Users",
    url: "/admin/users",
  },
  {
    title: "Seminars",
    url: "/admin/seminars",
  },
  {
    title: "Course",
    url: "/admin/course",
  },
];

function Sidebar() {
  const path = usePathname();

  return (
    <div>
      <div className="w-full bg-black rounded-md flex flex-col justify-center">
        {info.map((li, index) => (
          <Link
            key={index}
            href={li.url}
            className = {`${(li.url == path) ? "m-2 py-4 bg-amber-200 font-medium rounded-md text-center uppercase" : "m-2 py-4 text-white font-medium rounded-md text-center uppercase"}`}
          >
            {li.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
