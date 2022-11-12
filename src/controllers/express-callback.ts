import { Response } from "express";
import {
  ExpressRequestWithToken,
  HttpRequest,
  HttpResponse,
} from "../@types/http";

type Controller = (
  httpRequest: HttpRequest
) => Promise<HttpResponse | undefined>;

export default function makeExpressCallback(controller: Controller) {
  return function expressCallback(req: ExpressRequestWithToken, res: Response) {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: req.headers,
      cookies: req.headers.cookie,
      files: req.files,
      file: req.file,
    };

    controller(httpRequest)
      .then((httpResponse: HttpResponse | undefined) => {
        if (httpResponse !== undefined) {
          if (httpResponse.headers) {
            res.set(httpResponse.headers);
          }
          res.type("json");
          res.status(httpResponse.statusCode).send(httpResponse.body);
        }
      })
      .catch(() =>
        res.status(500).send({ error: "An unkown error occurred." })
      );
  };
}
