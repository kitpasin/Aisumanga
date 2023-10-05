"use client"

import { PulseLoader } from "react-spinners";
function loading() {
  return (
    <div className="w-full h-[calc(100vh-364px)] flex justify-center items-center">
        <PulseLoader color="#1976d2" />
    </div>
  )
}

export default loading