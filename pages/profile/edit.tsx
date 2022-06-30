import type { NextPage } from "next";

const Edit: NextPage = () => {
  return (
    <div className="space-y-4 py-10 px-4">
      <div className="flex items-center space-x-3">
        <div className="h-14 w-14 rounded-full bg-slate-500" />
        <label
          htmlFor="picture"
          className="cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-semibold text-gray-700 shadow-sm ring-orange-500 ring-offset-2 hover:ring-2 focus:ring-2"
        >
          Change photo
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            +82
          </span>
          <input
            id="phone"
            type="number"
            required
            className="w-full appearance-none rounded-md rounded-l-none border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
        </div>
      </div>
      <button className="mt-5 w-full rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
        Update profile
      </button>
    </div>
  );
};

export default Edit;
