
import { BreadcrumbType } from "@/types/breadcrumb";
import Link from "next/link";
import { IoDiamondOutline } from "react-icons/io5";
import { TbSlash } from "react-icons/tb";

type Props = {
  breadcrumbs: BreadcrumbType[];
};
const Breadcrumb = ({ breadcrumbs }: Props) => {
  return (
    <>
      <div className="flex items-center gap-2 mx-auto w-3/4">
        <IoDiamondOutline className="hover:scale-110 text-[#20475d]" />
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            <Link href="/">
                <TbSlash key={index} className="w-5 h-5" />
            </Link>
            <Link
              href={breadcrumb.url!}
              className="hover:tracking-wider hover:text-[#20475d]"
            >
              {breadcrumb.title}
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Breadcrumb;