import Body from "@/components/Body";
import Link from "next/link";


type Props  = {
    children : React.ReactNode;
}

const LayoutAdmin = ({children} : Props) => {
    return (
      <>
        <Body>
          <section>
            <nav className="flex justify-center">
              <div className="flex items-center py-5 gap-10 text-[#20475d] font-bold text-lg">
                <Link href={"/admin/product"} className="px-5 py-2 rounded-lg hover:bg-slate-300 hover:text-white">Sản Phẩm</Link>
                <Link href={"/admin/diamond"} className="px-5 py-2 rounded-lg hover:bg-slate-300 hover:text-white">Kim Cương Viên</Link>
                <Link href={"/admin/promotion"} className="px-5 py-2 rounded-lg hover:bg-slate-300 hover:text-white">Khuyến Mãi</Link>
                <Link href={"/admin/news"} className="px-5 py-2 rounded-lg hover:bg-slate-300 hover:text-white">Sự Kiện</Link>
                <Link href={"/admin/collection"} className="px-5 py-2 rounded-lg hover:bg-slate-300 hover:text-white">Bộ Sưu Tập</Link>
              </div>
            </nav>
            <div>{children}</div>
          </section>
        </Body>
      </>
    );
}


export default LayoutAdmin;