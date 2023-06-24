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

  const statusCodeDict = {
    0: 'Erro desconhecido',
    200: 'OK',
    201: 'Criado',
    202: 'Aceito',
    204: 'Sem Conteúdo',
    400: 'Requisição Inválida',
    401: 'Não Autorizado',
    403: 'Proibido',
    404: 'Não Encontrado',
    500: 'Erro Interno do Servidor',
  };

  return next(req)
    .pipe(
      catchError((error) => {
        const err = new Error(error.message);
        console.error(error);
        messageService.show('Ocorreu um erro. Erro: ' + statusCodeDict[error.status as keyof typeof statusCodeDict]);
        return throwError(() => err);
      }), finalize(() => loadingService.stopLoading())
    )
}
