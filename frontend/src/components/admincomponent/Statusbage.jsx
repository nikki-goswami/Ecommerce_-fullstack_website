
'use client'

import { axiosbaseURL, notify } from '@/helper/helper';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Statusbage({ status, flag, url }) {
  const router = useRouter();

  // 1️⃣ Display text
  let display = "";
  if(flag === "status") display = status ? "Active" : "Inactive";
  if(flag === "is_top") display = status ? "Top" : "Not Top";
  if(flag === "is_best") display = status ? "Best" : "Not Best";
  if(flag === "is_home") display = status ? "Home" : "Not Home";

  // 2️⃣ Handler
  const statusHandler = () => {
    if(!url) return notify("URL missing", false);

    axiosbaseURL
      .patch(url, { field: flag }) // 3️⃣ Correct field sent to backend  falg ja rha h field ke andr backend mein
      .then((res) => {
        const msg = res?.data?.message || "Status Updated successfully"; // 4️⃣ Safe message
        notify(msg, res?.data?.success);
        if(res?.data?.success) router.refresh();
      })
      .catch((error) => {
        const msg = error?.response?.data?.message || "Something went wrong";
        notify(msg, false);
      });
  }

  // 5️⃣ Click binding fixed
  return (
    <span
      onClick={statusHandler}
      className={`px-3 cursor-pointer py-1 text-xs font-semibold rounded-full flex
        ${status
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
        }`}
    >
      {display} {/* 1️⃣ Display text */}
    </span>
  );
}
