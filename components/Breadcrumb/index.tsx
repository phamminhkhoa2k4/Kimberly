import { BreadcrumbType } from "@/types/breadcrumb";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
type Props = {
  breadcrumbs: BreadcrumbType[];
};
const Breadcrumb = ({ breadcrumbs }: Props) => {
  return (
    <>
      <div className="flex items-center  gap-1 lg:gap-2 lg:mx-auto mx-4 lg:w-3/4">
        <Link href="/">
          <IoHomeOutline className="hover:scale-110 text-[#20475d] h-4 w-4 lg:h-5 lg:w-5" />
        </Link>
        {breadcrumbs.map((breadcrumb, index) => (
          <div className="flex items-center lg:gap-2 gap-1" key={index}>
            <IoIosArrowForward className="lg:w-5 lg:h-5 h-4 w-4" />
            <Link
              href={breadcrumb.url!}
              className="hover:tracking-wider text-sm lg:text-base  text-[#20475d]"
            >
              {breadcrumb.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Breadcrumb;
