import type { Response, Request } from "express";
import { ProductModel } from "../Model/product.ts";

type methods = 'GET' | 'DELETE' | 'POST' | 'PATCH';

const response = ( status: number, method: methods, data: object ): object => {
  return {
    'status': status,
    'method': method,
    'data': {
      'product': data
    }
  }
}

const GETAll = async ( res: Response ): Promise< Response > => {
  const data: object = await ProductModel.find( {}, { '__v': false } );

  return res.status( 200 ).json( response( 200, 'GET', data ) )
}

const GET = async ( res: Response, _title: string ): Promise< void > => {}

const DELETE = async ( res: Response, _title: string ): Promise< void > => {}

const POST = async ( res: Response ): Promise< void > => {}

const PATCH = async ( res: Response ): Promise< void > => {}

export {
  GETAll,
  GET,
  DELETE,
  POST,
  PATCH
}
