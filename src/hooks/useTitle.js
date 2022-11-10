import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `CS Hub - ${title}`;
    }, [title])
}

export default useTitle;