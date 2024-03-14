import { ArrowUpIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { formatNumber } from "../lib/utils/format-number";
import graph from "../assets/icons/graph.svg";

type Props = {
  title: string;
  amount: number;
  percent: string;
  text: string;
};

export default function Card({ title, amount, percent, text }: Props) {
  return (
    <div className="px-4 py-5 sm:p-6">
      <div className="flex justify-between">
        <dt className="text-xs leading-5 text-gray-500">{title}</dt>
        <ArrowUpRightIcon className="size-4" />
      </div>
      <dd className="mt-1 flex flex-col space-y-2.5 items-baseline justify-between md:block lg:flex">
        <div>
          <p className="flex items-baseline text-3xl font-semibold text-gray-800">
            {formatNumber(amount)}
          </p>
        </div>

        <div className="flex justify-between w-full">
          <p className="flex items-baseline text-xs text-gray-500">
            <span className="mt-auto text-green-500 font-semibold inline-flex">
              <ArrowUpIcon
                className="-ml-1 mr-0.5 size-4 flex-shrink-0 self-center"
                aria-hidden="true"
              />
              {percent}
            </span>
            &nbsp;
            <span className="mt-auto">{text}</span>
          </p>
          <img src={graph} alt="graph" decoding="async" />
        </div>
      </dd>
    </div>
  );
}
