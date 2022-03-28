import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqClone = req.clone();
    if ('accessToken' in localStorage) {
      reqClone = req.clone({
        headers: req.headers.set(
          'x-api-key',
          localStorage.getItem('accessToken')?.toString() || ''
        ),
      });
    }

    return next
      .handle(reqClone)
      .pipe(
        map((event: HttpEvent<any>) => {
          return event;
        })
      )
      .pipe(
        catchError((error: any) => {
          switch (error.status) {
            case 400:
              console.log('Deu pau');
              break;
            case 401:
              alert('Usuario ou senha inválidos');
              break;
            case 404:
              console.log('Existe não');
              break;
            case 500:
              console.log('Servidor deu pau');
              break;
          }
          throw throwError(error);
        })
      );
  }
}
