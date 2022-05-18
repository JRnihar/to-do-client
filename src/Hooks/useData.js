import { useEffect, useState } from "react";

const useData = () => {
    const [lists, setList] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-mountain-71827.herokuapp.com/list')
            .then(res => res.json())
            .then(data => setList(data));
    }, [lists])
    return [lists, setList]
}

export default useData;