export default function Home() {
  return (
    <>
      <main>
        <div className=" flex justify-center mt-16">
          <div className="flex  flex-col gap-5 text-center w-3/5">
            <h1 className="text-7xl font-bold ">
              Dream, Capture, Connect. <br />
              With Dream Doodle.
            </h1>
            <span className="text-3xl font-medium mb-5">
              Your thought haven, where self-discovery unfolds effortlessly
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" bg-black text-white p-1 px-4 flex gap-2 text-center items-center rounded-md hover:bg-gray-700 transition ease-in-out duration-300 font-semibold shadow-lg shadow-gray-200 text-md text-lg">
            Start Writing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <img src="/picture.svg" alt="" />
        </div>
      </main>
    </>
  );
}
