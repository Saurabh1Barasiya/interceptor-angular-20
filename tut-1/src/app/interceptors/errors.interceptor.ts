import { HttpEventType, HttpInterceptorFn } from "@angular/common/http";
import { catchError, map, tap } from "rxjs";

export const errorInterceptor:HttpInterceptorFn = (req,next)=>{
    console.log("request ja rahi hai");
    return next(req).pipe(
        tap(()=>{
            console.log("response aa raha h ");
        }),

        tap((res)=>{
            console.log(res.type)

            // res.type = 0 => request server ke pass ja chuki hai.
            // res.type = 1 => file is uploading (processing).
            // res.type = 2 => server se header to mil gaya (status code etc) but body nahi    mili hai.

            // res.type = 3 => data download ho raha hai.
            // res.type = 4 => pura response mil gaya hai.

        }),

        tap((res)=>{
            // console.log(HttpEventType.Sent);  // 0
            // console.log(HttpEventType.UploadProgress);    // 1
            // console.log(HttpEventType.ResponseHeader);    // 2
            // console.log(HttpEventType.DownloadProgress);  // 3
            // console.log(HttpEventType.Response);         // 4
            // console.log(HttpEventType.User);             // 5

            if(res.type == HttpEventType.Response){
                console.log(res.status)
            }
        }),
    )
}