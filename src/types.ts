import { Request, Response } from "express"

export interface TestData {
    some: string
}

export interface Request<T> extends Request {
    body: T
}

export interface Response<T> extends Response {
    send: (body: T) => Response
}