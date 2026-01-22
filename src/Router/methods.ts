import type { Response } from "express";
import { ProductModel } from "../Model/product.ts";
import { response } from "../Helpers/methods.ts";

const GETAll = async ( res: Response ): Promise< Response > => {
  const data: object = await ProductModel.find( {}, { '__v': false } );

  console.log( `[ GET ]|=> Fetched all data;` );

  return res.status( 200 ).json( response( 200, 'GET', data ) )
}

const GET = async ( res: Response, title: string ): Promise< Response > => {
  const data = await ProductModel.find( { title }, { '__v': false } );

  let code: number;

  if ( data.length === 0 ) {
    console.log( `[ GET ]|=> Data with title: { ${ title } } was not found;` ); 
    
    code = 404;
  } else {
    console.log( `[ GET ]|=> Fetched data with title: { ${ title } };` );
    
    code = 200;
  }

  return res.status( code ).json( response( code, 'GET', data ) );
}

const DELETE = async ( res: Response, title: string ): Promise< Response > => {
  const deleted = await ProductModel.deleteOne( { title } );

  let code: number;

  if ( deleted.deletedCount === 0 ) {
    console.log( `[ DELETE ]|=> Data with title: { ${ title } } was not found;` );

    code = 404;
  } else {
    console.log( `[ DELETE ]|=> Deleted data with title: { ${ title } };` );
    
    code = 200;
  }

  return res.status( code ).json( response( code, 'DELETE', [] ) );
}

const POST = async ( res: Response ): Promise< void > => {}

const PATCH = async ( res: Response ): Promise< void > => {}

export {
  GETAll,
  GET,
  DELETE,
  POST,
  PATCH
}
