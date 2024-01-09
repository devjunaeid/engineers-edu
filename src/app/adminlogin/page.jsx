"use client";
import { useRouter } from "next/navigation";

function page() {
  const status = "unauthenticated";
  const router = useRouter();
  if (status == "authenticated") {
    return router.push("/admin");
  }
  return (
    <div className="w-full min-h-[90vh] grid grid-cols-1 grid-rows-1 place-content-center">
      <form className="flex flex-col w-1/4 m-auto gap-2 bg-black rounded-md px-4 py-10">
        <label htmlFor="username" className="text-white font-lg">Enter Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-lg"
        />
        <label htmlFor="passwd" className="text-white font-lg">Password:</label>
        <input
          id="passwd"
          type="password"
          placeholder="Enter your Password..."
          className="input input-bordered w-full max-w-lg"
        />
        <button className="btn mt-6 bg-amber-400 border-none">LogIn</button>
      </form>
    </div>
  );
}

export default page;
