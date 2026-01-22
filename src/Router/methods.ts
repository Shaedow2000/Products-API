import type { Response, Request } from "express";

type dict = {
  [ key: string ]: string | number | boolean;
}

const GETAll = async ( req: Request, res: Response ): Promise< dict | void > => {}

const GET = async ( res: Response, _title: string ): Promise< dict | void > => {}

const DELETE = async ( res: Response, _title: string ): Promise< dict | void > => {}

const POST = async ( res: Response ): Promise< dict | void > => {}

const PATCH = async ( res: Response ): Promise< dict | void > => {}

export {
  GETAll,
  GET,
  DELETE,
  POST,
  PATCH
}
