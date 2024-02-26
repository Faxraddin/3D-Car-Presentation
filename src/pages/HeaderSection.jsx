import React from "react"

const HeaderSection = () => {
  return (
    <div className="w-full h-[720px] flex justify-center items-center mt-5">
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="text-center flex flex-col gap-0">
                <h3 className="text-4xl fontG">Faxraddin Yuzbashew</h3>
                <h1 className="text-[90px] text-gray-700 fontG">OPS: <span className="text-red-500">LIGHTNING</span></h1>
                <h3 className="text-[23px] fontG text-gray-700">An experience so Beautiful that even the God envy.</h3>
            </div>
            <div className="flex w-[70%] justify-between items-center">
                <div className="text-gray-700">
                    <h3 className="text-[25px]">Speed</h3>
                    <span className="text-gray-700 fontG"><span className="text-red-500 text-[33px]">210</span>KM/S</span>
                </div>
                <div className="text-gray-700">
                    <h3 className="text-[25px]">Type</h3>
                    <span className="text-gray-700 fontG"><span className="text-red-500 text-[33px]">Sports</span></span>
                </div>
                <div className="text-gray-700 ">
                    <h3 className="text-[25px]">MRPS* Starting at</h3>
                    <span className="text-gray-700 fontG"><span className="text-red-500 text-[33px]">$28,995</span></span>
                </div>
                <div className="text-gray-700 ">
                    <h3 className="text-[25px]">Fuel</h3>
                    <span className="text-gray-700 fontG"><span className="text-red-500 text-[33px]">Gasoline</span></span>
                </div>
                <div className="text-gray-700">
                    <h3 className="text-[25px]">Capacity</h3>
                    <span className="text-gray-700 fontG"><span className="text-red-500 text-[33px]">500</span>HACK</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default HeaderSection