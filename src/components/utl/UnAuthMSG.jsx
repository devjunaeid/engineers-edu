"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TbAlertTriangleFilled } from "react-icons/tb";

function UnAuthMSG({ url }) {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(router.push(url), 1000);
  }, [])
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-10 bg-red-200 border border-red-500 rounded-md md:w-1/4">
        <TbAlertTriangleFilled className="w-12 h-12" />
        <h2 className="text-2xl font-bold">You are not Authenticated</h2>
        <p>redireacting...</p>
      </div>
    </div>
  );
}

export default UnAuthMSG;
