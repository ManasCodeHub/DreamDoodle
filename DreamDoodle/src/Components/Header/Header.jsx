
const Header = () => {
  return (
    <div className="flex p-4 text-xl sticky">
      <ul className="flex gap-3 mx-5 text-center align-middle items-center w-full">
        <li className="flex flex-1">
          <img src="/logo.svg" alt="logo" className="cursor-pointer" />
        </li>
        <li>
          <a href=""className="hover:bg-gray-200 px-2 py-1 rounded-md transition ease-in-out duration-300 ">Home</a>
        </li>
        <li>
          <a href="" className="hover:bg-gray-200 px-2 py-1 rounded-md transition ease-in-out duration-300 " >Features</a>
        </li>
        <li>
          <a href="" className="hover:bg-gray-200 px-2 py-1 rounded-md transition ease-in-out duration-300 ">About</a>
        </li>
        <li>
        <div class="h-6 w-0.5 rounded-sm rotate-0 bg-gray-300"></div>
        </li>
        <li>
          <a href="" className="hover:bg-gray-200 px-2 py-1 rounded-md transition ease-in-out duration-300 ">Log in</a>
        </li>
        <li>
          <button className="bg-black text-white p-1 px-3 text-center rounded-md hover:bg-gray-700 transition ease-in-out duration-300 font-semibold shadow-lg shadow-gray-200 text-md text-lg">
            Start Writing
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
