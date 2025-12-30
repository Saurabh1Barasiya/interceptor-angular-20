import { HttpInterceptorFn } from "@angular/common/http";

export const authInerceptor: HttpInterceptorFn = (req, next) => {

    let token = true;
    if (token) {
        let cloneReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            }
        })
        return next(cloneReq);
    }

    return next(req);
} 