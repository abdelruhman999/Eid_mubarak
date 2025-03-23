import { Base_Url } from "@/calls/constant";






export interface sendRequestKwargs {
    url:string,
    method?:"GET"|"POST"|"PUT"|"DELETE",
    params?:Record<string,string>,
    data?:BodyInit|null,
    headers?:object,
    cache?:RequestCache,
    next?:{
        revalidate:number
    }
}


export const sendRequest = async <T>({url,method,params,data , headers , cache ,  next}:sendRequestKwargs):Promise<T>=>{
    const response = await fetch(`${Base_Url}${url}${params ? "?" + new URLSearchParams(params).toString():""}` , {
        method: method,
        body: data , 
        credentials: 'include', // include cookies in the request
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        cache: cache,
        ...next
        
      });

    if(!response.ok){
        throw new Error(response.statusText);
    }

    return response.json();
}