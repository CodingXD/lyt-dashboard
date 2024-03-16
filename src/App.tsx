import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowUpIcon,
  EllipsisHorizontalIcon,
  EyeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import person from "./assets/images/person.png";
import logo from "./assets/images/logo.png";
import { navigation, userNavigation } from "./lib/data/navigation";
import { classNames } from "./lib/utils/classnames";
import { stats } from "./lib/data/metrics";
import Card from "./components/card";
import { Button } from "./components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { engagementData, engagementOptions } from "./lib/data/engagement";
import { genderData, genderOptions } from "./lib/data/gender";
import { ageGroupData, ageGroupOptions } from "./lib/data/age-groups";
import { locations } from "./lib/data/locations";
import { activities } from "./lib/data/post-activities";
import { formatNumber } from "./lib/utils/format-number";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="size-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <img className="h-8 w-auto" src={logo} alt="LYT" />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className="size-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                          <ArrowRightStartOnRectangleIcon
                            className="size-6 shrink-0"
                            aria-hidden="true"
                          />
                          Log-out
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden pb-4">
          <div className="flex justify-center h-16 shrink-0 items-center">
            <img className="h-5 w-auto" src={logo} alt="LYT" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-green-600 text-white"
                            : "text-gray-800 hover:text-white hover:bg-green-600",
                          "group flex gap-x-3 rounded-md px-6 py-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className="size-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md px-6 py-2 text-sm font-semibold leading-6 text-green-400 hover:text-green-500"
                >
                  <ArrowRightStartOnRectangleIcon
                    className="size-6 shrink-0"
                    aria-hidden="true"
                  />
                  Log-out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div
            className="h-6 w-px bg-gray-900/10 lg:hidden"
            aria-hidden="true"
          />

          <div className="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
            <p className="text-sm lg:block hidden">
              Metrics looking good, Snow!
            </p>
            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6 ml-auto">
              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <div className="group block flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block size-9 rounded-full"
                          src={person}
                          alt="Snow Olohijere"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-left font-medium text-gray-700 group-hover:text-gray-900">
                          Snow Olohijere
                        </p>
                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                          uch231@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <h1 className="text-lg">Performance Metrics</h1>
            <Button
              variant="link"
              onClick={() => console.log("Download Summary")}
            >
              Download Summary
            </Button>
          </div>

          <div>
            <dl className="mt-5 grid grid-cols-1 overflow-hidden rounded-lg md:grid-cols-3">
              {stats.map((item) => (
                <Card
                  key={item.name}
                  title={item.name}
                  amount={item.stat}
                  percent={item.change}
                  text={item.changeText}
                />
              ))}
            </dl>
          </div>

          <div className="grid md:grid-cols-2 items-baseline gap-4 mt-10">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-base font-medium">Engagement Rates</p>
                <Select defaultValue="weekly">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Bar
                options={engagementOptions}
                data={engagementData}
                className="mt-10"
              />

              <p className="mt-10 text-lg font-medium my-auto">Post Activity</p>

              <ul role="list" className="divide-y divide-gray-100">
                {activities.map(({ title, imageUrl, date, views }) => (
                  <li key={title} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="size-12 flex-none rounded bg-gray-50"
                        src={imageUrl}
                        alt={title}
                      />
                      <div className="max-w-72 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {title}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm whitespace-nowrap font-semibold my-auto leading-6 text-gray-900">
                      {date}
                    </p>
                    <p className="text-sm flex items-center font-semibold space-x-1 whitespace-nowrap my-auto leading-6 text-gray-900">
                      <EyeIcon className="size-3.5 bg-green-400 text-white rounded-full p-px" />
                      <span>{formatNumber(views)}</span>
                    </p>
                    <div className="flex shrink-0 items-center gap-x-6">
                      <Menu as="div" className="relative flex-none">
                        <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                          <span className="sr-only">Open options</span>
                          <EllipsisHorizontalIcon
                            className="size-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-50" : "",
                                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                                  )}
                                >
                                  View post
                                  <span className="sr-only">, {title}</span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-50" : "",
                                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                                  )}
                                >
                                  Message
                                  <span className="sr-only">, {title}</span>
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-base font-medium my-auto">
                Audience Demography
              </p>
              <div className="grid lg:grid-cols-3 gap-4 mt-10 items-start">
                <div>
                  <Doughnut data={genderData} options={genderOptions} />
                </div>
                <div className="lg:col-span-2">
                  <Bar options={ageGroupOptions} data={ageGroupData} />
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <p className="text-base font-medium my-auto">Top Locations</p>
                <Button variant="outline" className="px-6">
                  See More
                </Button>
              </div>
              <ul role="list" className="divide-y divide-gray-100">
                <li className="flex justify-between gap-x-6 py-3">
                  <p className="text-xs leading-6 text-gray-600">Country</p>
                  <div className="shrink-0 flex flex-col items-end">
                    <p className="text-xs leading-6 text-gray-600">Visitors</p>
                  </div>
                </li>
                {locations.map(({ country, percent, visitors }) => (
                  <li
                    key={country}
                    className="flex justify-between gap-x-6 py-3"
                  >
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {country}
                    </p>
                    <div className="shrink-0 flex flex-col items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {formatNumber(visitors, "standard")}
                      </p>
                      <p className="mt-1 flex items-center text-xs leading-5 text-green-500">
                        <span>
                          <ArrowUpIcon className="size-3" />
                        </span>
                        <span>{percent}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
