import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [previousPathname, setPreviousPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== previousPathname) {
      setIsNavigating(true);
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 300);

      return () => clearTimeout(timer);
    }

    setIsNavigating(false);
    setPreviousPathname(pathname);
  }, [pathname, previousPathname]);

  return { isNavigating };
}
