import { Observable } from 'rxjs';

import {
  IBaseResponse,
  IHttpDeleteQueryCall,
  IHttpGetQueryCall,
  IHttpPostQueryCall,
  IHttpPutQueryCall,
  IHttpQueryOptions,
  IHttpPatchQueryCall,
} from './http.models';

export interface IHttpService {

  post<TError extends any, TRawData extends any>(
    call: IHttpPostQueryCall<TError>,
    options?: IHttpQueryOptions
  ): Observable<IBaseResponse<TRawData>>;

  get<TError extends any, TRawData extends any>(
    call: IHttpGetQueryCall<TError>,
    options?: IHttpQueryOptions
  ): Observable<IBaseResponse<TRawData>>;

  put<TError extends any, TRawData extends any>(
    call: IHttpPutQueryCall<TError>,
    options?: IHttpQueryOptions
  ): Observable<IBaseResponse<TRawData>>;

  patch<TError extends any, TRawData extends any>(
    call: IHttpPatchQueryCall<TError>,
    options?: IHttpQueryOptions
  ): Observable<IBaseResponse<TRawData>>;

  delete<TError extends any, TRawData extends any>(
    call: IHttpDeleteQueryCall<TError>,
    options?: IHttpQueryOptions
  ): Observable<IBaseResponse<TRawData>>;
}
