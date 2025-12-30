import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorInterceptor:HttpInterceptorFn = (req,next)=>{
    console.log("request send ho gayi h")
    return next(req).pipe(
        catchError((err:HttpErrorResponse)=>{

            console.log(err.status);
            console.log(err.message);

            if(err.status === 404){
                alert("Resource nahi mila!");
            }else if(err.status === 500){
                alert("server not working...");
            }else if(err.status === 0){
                alert("Unable to connect to server. Is JSON server running");
            }
            return throwError(()=>err);
        })
    )
}