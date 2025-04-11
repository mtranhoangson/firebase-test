import { Request as ExpressRequest, Response as ExpressResponse, Router as ExpressRouter } from 'express';

declare module 'express' {
  interface Request extends ExpressRequest {
    user?: {
      id: string;
      role: string;
    };
  }
  interface Response extends ExpressResponse {}
  interface Router extends ExpressRouter {}
}

export { Request, Response, Router } from 'express'; 