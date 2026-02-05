"use client";

import { useEffect ,useRef} from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ReloadRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const hasRun=useRef(false);
  useEffect(() => {
  if(hasRun.current){
    return;
  }
  hasRun.current=true;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isReload = navigation?.type === 'reload';

    // If it's a reload and not already on home page, redirect to home
    if (isReload && pathname !== '/') {
      router.replace('/');
    }
  }, [pathname,router]);

  return null;
}