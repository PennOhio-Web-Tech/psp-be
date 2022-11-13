"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeExpressCallback(controller) {
    return function expressCallback(req, res) {
        const httpRequest = {
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
            .then((httpResponse) => {
            if (httpResponse !== undefined) {
                if (httpResponse.headers) {
                    res.set(httpResponse.headers);
                }
                res.type("json");
                res.status(httpResponse.statusCode).send(httpResponse.body);
            }
        })
            .catch(() => res.status(500).send({ error: "An unkown error occurred." }));
    };
}
exports.default = makeExpressCallback;
