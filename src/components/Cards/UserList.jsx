import React from "react";

function UserList({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.user_img} alt="User Profile" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{item.user_name}</div>
                  <div className="text-sm opacity-50">{item.role}</div>
                </div>
              </td>
              <td>
                {item.user_id}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}

export default UserList;
