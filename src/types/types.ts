type MyReducerAction = {
    type:string;
    payload?:number
}

type Count = {
    count:number;
}

type RequestData = {
    body?:Record<string,unknown>;
    headers?:[string,string][];
    params?:Record<string,string>;
}

type DoFetch = {
    doFetch:boolean
}

