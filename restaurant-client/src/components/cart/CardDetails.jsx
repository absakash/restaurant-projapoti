import React from "react";

const CardDetails = ({ dat }) => {
  const { price, strCategoryThumb } = dat;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {/* <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th> */}
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={strCategoryThumb}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>{price}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default CardDetails;
