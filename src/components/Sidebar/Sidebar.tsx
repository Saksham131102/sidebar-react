import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../constants";
import { IconType } from "react-icons";

interface ILink {
  name: string;
  path: string;
  icon: IconType;
}

const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const { pathname } = useLocation();
  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all ${
          expanded ? "w-60" : "w-16"
        }`}
      >
        <div className="flex justify-between items-center p-4 pb-4">
          <div
            className={`text-2xl overflow-hidden transition-all ${
              expanded ? "w-60" : "w-0"
            }`}
          >
            Logo
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <FaChevronLeft className="text-xl" />
            ) : (
              <FaChevronRight className="text-xl" />
            )}
          </button>
        </div>

        <ul className="flex-1 bg-slate-200">
          {links.map((link: ILink) => {
            const isActive = link.path === pathname;
            return (
              <li
                key={link.name}
                className={`relative rounded-md group ${
                  isActive ? "bg-black" : "hover:bg-gray-300"
                }`}
              >
                <NavLink
                  to={link.path}
                  className={`flex gap-4 items-center py-4 ${
                    expanded ? "m-4" : "ml-2 my-4"
                  }`}
                >
                  <link.icon
                    className={`text-xl ${isActive && "text-white"} ${
                      !expanded && "ml-3"
                    }`}
                  />
                  <p
                    className={`text-lg font-semibold overflow-hidden transition-all ${
                      isActive && "text-white"
                    } ${!expanded && "w-0"}`}
                  >
                    {expanded ? link.name : ""}
                  </p>

                  {!expanded && (
                    <div
                      className={`
                        absolute left-full rounded-md px-2 py-1 ml-6
                        bg-gray-300 text-black text-md
                        invisible opacity-20 -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    `}
                    >
                      {link.name}
                    </div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="border-t flex p-3 items-center">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-60 ml-2" : "w-0"
            }`}
          >
            <div className="leading-4">
              <p className="text-md font-semibold">
                {expanded ? "John Doe" : ""}
              </p>
              <p className="text-xs text-gray-500">{expanded ? "Admin" : ""}</p>
            </div>
            <BsThreeDotsVertical className="text-xl" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
