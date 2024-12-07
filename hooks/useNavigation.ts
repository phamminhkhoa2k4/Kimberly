import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useNavigation() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    console.log("kakak",pathname);
    
    if (pathname == "/") {
      setIsNavigating((prev) => !prev);
    }

     if (pathname !== "/") {
       setIsNavigating((prev) => !prev);
     }
    setIsNavigating((prev) => !prev);
  }, [pathname]);

  return { isNavigating };
}
