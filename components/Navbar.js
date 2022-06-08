
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "homePage", href: "/", current: true },
  { name: "News", href: "/LatestNews", current: false },
  { name: "About", href: "/About", current: false },
  { name: "Crypto", href: "/crypto", current: false },
  { name: "Privacy", href: "/PrivacyPolicy", current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white font-semibold italic h-20 shadow-lg shadow-gray-500/40">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start mt-6">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/Brackets.png"
                    alt="INews"
                  />
				  <h1 className="text-3xl" > <span className=" text-cyan-300">I</span>News</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-cyan-500  text-gray-900"
                            : "text-gray-500 hover:bg-cyan-500 hover:text-gray-900",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
