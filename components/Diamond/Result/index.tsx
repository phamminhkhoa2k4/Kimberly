import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";



const Result = () => {
    const [openSheet,setOpenSheet] = useState<boolean>(false);
    const [openSubSheet, setOpenSubSheet] = useState<boolean>(false);


    useEffect(() => {
      const updateStateBasedOnScreen = () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        setOpenSheet(isMobile);
      };

      updateStateBasedOnScreen();

      window.addEventListener("resize", updateStateBasedOnScreen);

      return () => {
        window.removeEventListener("resize", updateStateBasedOnScreen);
      };
    }, []);
    return (
      <section className="mx-auto w-3/4 pt-10 border-t mb-10 hidden lg:block">
        <div className="grid grid-cols-7 border rounded-t-md overflow-hidden">
          <div className="font-medium text-sm te py-2  text-[#20475d] border-r text-center bg-slate-400">
            Hình Dạng
          </div>
          <div className="font-medium text-sm te py-2  text-[#20475d] border-r text-center bg-slate-400">
            Trọng Lượng (Cts)
          </div>
          <div className="font-medium text-sm te py-2  text-[#20475d] border-r text-center bg-slate-400">
            Cấp Màu
          </div>
          <div className="font-medium text-sm te py-2  text-[#20475d] border-r text-center bg-slate-400">
            Độ Tinh Khiết
          </div>
          <div className="font-medium text-sm te py-2  text-[#20475d] border-r text-center bg-slate-400">
            Kích Thước (Mn)
          </div>
          <div className="font-medium text-sm te py-2  text-[#20475d] border-r text-center bg-slate-400">
            Nét Cắt
          </div>
          <div className="font-medium text-sm te py-2  text-[#20475d]  text-center bg-slate-400">
            Giá (VND)
          </div>
        </div>
        <Collapsible>
          <CollapsibleTrigger className="w-full">
            <div className="grid grid-cols-7 ">
              <div className="flex items-center justify-center py-2">
                <Image
                  src={
                    "https://file.hstatic.net/200000355853/file/round-transparent.png"
                  }
                  alt=""
                  className="object-cover object-center w-10 h-10"
                  height={200}
                  width={200}
                />
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                1.42
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                G
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                VVS1
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                7.2X7.2
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                Excellent
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                402.333.444 <span className="underline">đ</span>
              </div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex items-start gap-10">
              <div>
                <Image
                  src={
                    "https://product.hstatic.net/200000355853/product/round-diamond_631621719a7d4599b55d3f5c716bd8de_grande.png"
                  }
                  alt=""
                  className="object-center object-cover w-[375px] h-[375px]"
                  height={600}
                  width={600}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-base font-bold my-10 px-4">
                  482,535,400<span className="underline">đ</span>
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                    Giác cắt: <span className="font-bold">Excellent</span>
                  </div>
                  <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                    Cấp màu: <span className="font-bold">G</span>
                  </div>
                  <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                    Độ tinh khiết: <span className="font-bold">VVS1</span>
                  </div>
                  <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                    Trọng lượng: <span className="font-bold">1.42</span>
                  </div>
                  <div className="flex items-center gap-2 w-full py-2 px-4">
                    Kiểm định GIA
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="w-full">
            <div className="grid grid-cols-7 bg-slate-200">
              <div className="flex items-center justify-center py-2">
                <Image
                  src={
                    "https://file.hstatic.net/200000355853/file/round-transparent.png"
                  }
                  alt=""
                  className="object-cover object-center w-10 h-10"
                  height={200}
                  width={200}
                />
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                1.42
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                G
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                VVS1
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                7.2X7.2
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                Excellent
              </div>
              <div className="py-4 text-sm text-neutral-700 text-center h-10">
                402.333.444 <span className="underline">đ</span>
              </div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex items-start gap-10">
              <div>
                <Image
                  src={
                    "https://product.hstatic.net/200000355853/product/round-diamond_631621719a7d4599b55d3f5c716bd8de_grande.png"
                  }
                  alt=""
                  className="object-center object-cover w-[375px] h-[375px]"
                  height={600}
                  width={600}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-base font-bold my-10 px-4">
                  482,535,400<span className="underline">đ</span>
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                    Giác cắt: <span className="font-bold">Excellent</span>
                  </div>
                  <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                    Cấp màu: <span className="font-bold">G</span>
                  </div>
                  <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                    Độ tinh khiết: <span className="font-bold">VVS1</span>
                  </div>
                  <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                    Trọng lượng: <span className="font-bold">1.42</span>
                  </div>
                  <div className="flex items-center gap-2 w-full py-2 px-4">
                    Kiểm định GIA
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetContent className="w-full overflow-y-auto">
            <div className="w-[650px] ">
              <div className="flex items-center  px-5 py-4 ">
                <div className="font-medium text-base w-6/12 ">Kết Quả</div>
                <IoCloseSharp
                  className="hover:scale-95 h-5 w-5"
                  onClick={() => setOpenSheet(false)}
                />
              </div>
              <div className="grid grid-cols-7 border w-full">
                <div className="font-medium text-xs text-nowrap px-2 w-full py-2 flex items-center justify-center text-[#20475d] border-r text-center bg-slate-400">
                  Hình Dạng
                </div>
                <div className="font-medium text-xs text-wrap px-2 w-full py-2 flex items-center justify-center  text-[#20475d] border-r text-center bg-slate-400">
                  Trọng Lượng (Cts)
                </div>
                <div className="font-medium text-xs text-nowrap px-2 w-full py-2 flex items-center justify-center  text-[#20475d] border-r text-center bg-slate-400">
                  Cấp Màu
                </div>
                <div className="font-medium text-xs text-nowrap px-2 w-full py-2 flex items-center justify-center text-[#20475d] border-r text-center bg-slate-400">
                  Độ Tinh Khiết
                </div>
                <div className="font-medium text-xs text-wrap px-2 w-full py-2 flex items-center justify-center  text-[#20475d] border-r text-center bg-slate-400">
                  Kích Thước (Mn)
                </div>
                <div className="font-medium text-xs text-nowrap px-2 w-full py-2 flex items-center justify-center text-[#20475d] border-r text-center bg-slate-400">
                  Nét Cắt
                </div>
                <div className="font-medium text-xs text-wrap px-2 w-full py-2 flex items-center justify-center text-[#20475d]  text-center bg-slate-400">
                  Giá (VND)
                </div>
              </div>
              <Sheet open={openSubSheet} onOpenChange={setOpenSubSheet}>
                <SheetTrigger className="w-full">
                  <div className="grid grid-cols-7 ">
                    <div className="flex items-center justify-center py-2">
                      <Image
                        src={
                          "https://file.hstatic.net/200000355853/file/round-transparent.png"
                        }
                        alt=""
                        className="object-cover object-center w-10 h-10"
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      1.42
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      G
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      VVS1
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      7.2X7.2
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      Excellent
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      402.333.444 <span className="underline">đ</span>
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent className="w-full">
                  <div className="flex items-center justify-between px-5 bg-slate-300 py-4">
                    <div className="font-bold">Chi Tiết</div>
                    <IoCloseSharp
                      className="h-5 w-5 hover:scale-95"
                      onClick={() => setOpenSubSheet(false)}
                    />
                  </div>
                  <div className="flex flex-col items-start ">
                    <div className="flex justify-center">
                      <Image
                        src={
                          "https://product.hstatic.net/200000355853/product/round-diamond_631621719a7d4599b55d3f5c716bd8de_grande.png"
                        }
                        alt=""
                        className="object-center object-cover w-[375px] h-[350px]"
                        height={600}
                        width={600}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="text-base font-bold my-0 px-4">
                        482,535,400<span className="underline">đ</span>
                      </div>
                      <div className="flex flex-col gap-1 w-full ">
                        <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                          Giác cắt: <span className="font-bold">Excellent</span>
                        </div>
                        <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                          Cấp màu: <span className="font-bold">G</span>
                        </div>
                        <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                          Độ tinh khiết: <span className="font-bold">VVS1</span>
                        </div>
                        <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                          Trọng lượng: <span className="font-bold">1.42</span>
                        </div>
                        <div className="flex items-center gap-2 w-full py-2 px-4">
                          Kiểm định GIA
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Sheet open={openSubSheet} onOpenChange={setOpenSubSheet}>
                <SheetTrigger className="w-full">
                  <div className="grid grid-cols-7 bg-slate-300 ">
                    <div className="flex items-center justify-center py-2">
                      <Image
                        src={
                          "https://file.hstatic.net/200000355853/file/round-transparent.png"
                        }
                        alt=""
                        className="object-cover object-center w-10 h-10"
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      1.42
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      G
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      VVS1
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      7.2X7.2
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      Excellent
                    </div>
                    <div className="py-4 text-xs text-nowrap text-neutral-700 text-center h-10">
                      402.333.444 <span className="underline">đ</span>
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent className="w-full">
                  <div className="flex items-center justify-between px-5 bg-slate-300 py-4">
                    <div className="font-bold">Chi Tiết</div>
                    <IoCloseSharp
                      className="h-5 w-5 hover:scale-95"
                      onClick={() => setOpenSubSheet(false)}
                    />
                  </div>
                  <div className="flex flex-col items-start ">
                    <div className="flex justify-center">
                      <Image
                        src={
                          "https://product.hstatic.net/200000355853/product/round-diamond_631621719a7d4599b55d3f5c716bd8de_grande.png"
                        }
                        alt=""
                        className="object-center object-cover w-[375px] h-[350px]"
                        height={600}
                        width={600}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="text-base font-bold my-0 px-4">
                        482,535,400<span className="underline">đ</span>
                      </div>
                      <div className="flex flex-col gap-1 w-full ">
                        <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                          Giác cắt: <span className="font-bold">Excellent</span>
                        </div>
                        <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                          Cấp màu: <span className="font-bold">G</span>
                        </div>
                        <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                          Độ tinh khiết: <span className="font-bold">VVS1</span>
                        </div>
                        <div className="border-b flex items-center gap-2 w-full py-2 px-4">
                          Trọng lượng: <span className="font-bold">1.42</span>
                        </div>
                        <div className="flex items-center gap-2 w-full py-2 px-4">
                          Kiểm định GIA
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    );
}


export default Result;



