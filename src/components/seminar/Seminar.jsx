"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSeminars } from "@/server/actions/actions";

function Seminar() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-seminars"],
    queryFn: () => getSeminars(),
  });
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-amber-400 text-md text-black md:text-xl">
            <tr>
              <th></th>
              <th>Topic</th>
              <th>Platfrom</th>
              <th>Date</th>
              <th>Time</th>
              <th>Register</th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-lg">
          {isLoading ? (<tr>Loading...</tr>) : (data?.map((item, index) => (
                <tr key={item.id} className="hover:bg-amber-100">
                  <th>{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.platfrom}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <Link className="btn" href={item.link}>
                      Join
                    </Link>
                  </td>
                </tr>
              )))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Seminar;
