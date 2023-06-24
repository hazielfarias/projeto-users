import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading/loading.service';
import { tap, catchError, throwError, finalize, mergeMap, of } from 'rxjs';
import { MessageService } from '../services/message/message.service';

export function ApiInterceptor(req: HttpRequest<unknown>,
  next: HttpHandlerFn) {
  const loadingService = inject(LoadingService);
  const messageService = inject(MessageService)
  loadingService.startLoading();

  return next(req)
    .pipe(
      mergeMap((response) => {
        return of(response).pipe(
          catchError((error) => {
            const err = new Error(error.message);
            messageService.show('Ocorreu um erro. Erro: ' + error.statusText)
            return throwError(() => err);
          }), finalize(() => loadingService.stopLoading())
        )
      })

    )
}
