import type { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div className="my-5">
        <label
          className="mb-1 block text-sm font-semibold text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <input
            id="name"
            type="text"
            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
        </div>
      </div>
      <div className="my-5">
        <label
          className="mb-1 block text-sm font-semibold text-gray-700"
          htmlFor="price"
        >
          Price
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
          <div className="pointer-events-none absolute right-0 flex items-center pr-3">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-gray-700">
          Description
        </label>
        <textarea
          rows={4}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
      </div>
      <button className="mt-4 w-full rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
        Go live
      </button>
    </div>
  );
};

export default Stream;
