import { useState, useEffect } from "react";

export function useMobileStatus() {

    const [mobile, setMobile] = useState(false);

    useEffect(() => {

        function handleResize() {
            window.innerWidth < 640 ? setMobile(true) : setMobile(false)
        }

        handleResize();

        window.addEventListener('resize', handleResize())

        return () => {
            window.removeEventListener('resize', handleResize())
        }

    },[]);
    
    return mobile;

}