import SeminarView from "@/components/Cards/SeminarView";
import { getSeminars } from "@/server/actions/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Link from "next/link";

async function page() {
  const data = await getSeminars();
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="md:text-6xl font-bold uppercase text-center">
        All seminars
      </h1>
      <div className="mt-10 w-full">
        <SeminarView semi={data} />
      </div>
      <div className="flex justify-end my-4 w-full">
        <Link
          href={"/admin/seminars/create"}
          className="btn text-green-500 text-2xl"
        >
          Create
        </Link>
      </div>
    </div>
  );
}

export default page;
