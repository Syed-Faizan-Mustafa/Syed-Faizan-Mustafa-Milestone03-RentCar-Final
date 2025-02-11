import Image from "next/image";
const AdminBtn = () => {
  return (
    <div>
      {/* Type Section */}
      <div className="p-4 bg-white">
        {/* Title Section */}
        <div className="ml-[16px] mt-3">
          <h3 className="font-bold text-xs w-[254px] text-[#94A7CB66] opacity-[1] justify-start leading-[15.12px] mb-4 mt-6">
            MAIN MENU
          </h3>
        </div>

        {/* Button Section */}
        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px]  ml-[16px] rounded-[10px] items-center ">
            {/* <img
              src="/Dashboard-01-home.png"
              alt="DashBoard_Home"
              width={24}
              height={24}
              className="filter grayscale hover:filter-none"
            /> */}
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(/Dashboard-01-home.png)`,
                WebkitMaskImage: `url(/Dashboard-01-home.png)`,
              }}
            ></div>
            Dashboard
          </button>
        </div>
        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-[8px] ml-[16px] rounded-[10px] items-center ">
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(Dashboard-02-car.png)`,
                WebkitMaskImage: `url(Dashboard-02-car.png)`,
              }}
            ></div>
            Car Rent
          </button>
        </div>
        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-[8px] ml-[16px] rounded-[10px] items-center ">
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(Dashboard-03-chart.png)`,
                WebkitMaskImage: `url(Dashboard-03-chart.png)`,
              }}
            ></div>
            Insight
          </button>
        </div>
        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-[8px] ml-[16px] rounded-[10px] items-center ">
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(/Dashboard-04-empty-wallet-change.png)`,
                WebkitMaskImage: `url(/Dashboard-04-empty-wallet-change.png)`,
              }}
            ></div>
            Reimburse
          </button>
        </div>
        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-[8px] ml-[16px] rounded-[10px] items-center ">
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(/Dashboard-05-message.png)`,
                WebkitMaskImage: `url(/Dashboard-05-message.png)`,
              }}
            ></div>
            Inbox
          </button>
        </div>

        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-[8px] ml-[16px] rounded-[10px] items-center ">
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(/calendar.png)`,
                WebkitMaskImage: `url(/calendar.png)`,
              }}
            ></div>
            Calendar
          </button>
        </div>
        {/* Preference Section*/}
        <div className="ml-[16px] mt-28">
          <h3 className="font-bold text-xs w-[254px] text-[#94A7CB66] opacity-[1] justify-start leading-[15.12px] mb-4 mt-6">
            Preferences
          </h3>
        </div>
        {/* setting buttons */}
        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-[8px] ml-[16px] rounded-[10px] items-center ">
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(/Dashboard-07-setting.png)`,
                WebkitMaskImage: `url(/Dashboard-07-setting.png)`,
              }}
            ></div>
            Settings
          </button>
        </div>

        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-[8px] ml-[16px] rounded-[10px] items-center ">
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(/Dashboard-08-info-circle.png)`,
                WebkitMaskImage: `url(/Dashboard-08-info-circle.png)`,
              }}
            ></div>
            Help & Center
          </button>
        </div>

        <div>
          <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-[8px] ml-[16px] rounded-[10px] items-center ">
            <div
              className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
              style={{
                maskImage: `url(/Dashboard-09-briefcase.png)`,
                WebkitMaskImage: `url(/Dashboard-09-briefcase.png)`,
              }}
            ></div>
            Dark Mode
            <div className="flex items-center space-x-5">
              <label className="flex flex-col items-center cursor-pointer">
                <input
                  type="radio"
                  name="pictureOption"
                  value="option1"
                  className="hidden peer"
                />
                <div className="transition-transform transform peer-hover:scale-110 peer-checked:scale-110 peer-checked:border-blue-500">
                  <Image
                    src="/Dashboard-10-dayMode.png"
                    alt="Option 1"
                    width={28}
                    height={28}
                    className="ml-10 w-[28px] h-[28px]"
                  />
                </div>
              </label>

              <label className="flex flex-col items-center transform cursor-pointer">
                <input
                  type="radio"
                  name="pictureOption"
                  value="option2"
                  className="hidden peer"
                />
                <div className="transition-transform transform peer-hover:scale-110 peer-checked:scale-150 rounded-full p-[2px] peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <Image
                    src="/Dashboard-11-nightMode.png"
                    alt="Option 2"
                    width={28}
                    height={28}
                    className="w-[15px] h-[15px]"
                  />
                </div>
              </label>
            </div>
          </button>
        </div>
      </div>
      <div>
        <button className="text-[#90A3BF] hover:bg-blue-500 hover:text-white flex gap-3 w-[254px] h-[56px] mt-12 ml-[16px] rounded-[10px] items-center ">
          <div
            className="w-[24px] h-[24px] bg-[#90A3BF] hover:bg-white mask mask-image"
            style={{
              maskImage: `url(/Dashboard-12-logout.png)`,
              WebkitMaskImage: `url(/Dashboard-12-logout.png)`,
            }}
          ></div>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default AdminBtn;
