"use client";
import { useState } from "react";
import Description from "@/components/jobs/Description";
import Apply from "@/components/jobs/Apply";
import JobHeader from "@/components/jobs/JobHeader";

export default function Jobs() {
  const [isApply, setIsApply] = useState<boolean>(true);


  return (

    <div className="py-40 px-4  ">
        <div className="bg-gradient-to-br border border-white-200 rounded-2xl py-20">
      <JobHeader isApply={isApply } setIsApply={setIsApply} />
      {isApply ? <Apply /> : <Description />}
      </div>
    </div>
  );
}