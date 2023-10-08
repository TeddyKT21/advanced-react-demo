import { useRef, useState } from "react";
import { useFetch } from "../customHooks/useFetch"

export default function CustomHookPage() {
    const [url, setUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [data, error, isLoading] = useFetch(url);
    console.log('recived data:',data);
    
  return (
    <div className="pageContainer">
        <input type="text" ref={inputRef}></input>
        <button onClick={() => setUrl(inputRef.current!.value)}>fetch data</button>
        {!!isLoading && <div>loading... </div>}
        {!!error && <div style={{backgroundColor:'red'}}>an error occured !</div>}
        {!!data  && <div>check console!</div>}
    </div>
  )
}
