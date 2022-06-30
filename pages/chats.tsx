import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="divide-y-[1px] py-10">
      {[1, 2, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <div
          key={index}
          className="flex cursor-pointer items-center space-x-3 py-3 px-4"
        >
          <div className="h-10 w-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">
              내일 오후 2시에 모퉁이에서 만나요.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
