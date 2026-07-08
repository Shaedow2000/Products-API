import type { Request, Response } from "express";
import { ProductModel } from "../Model/product.ts";
import { response } from "../Helpers/methods.ts";

const GETAll = async ( _req: Request, res: Response ): Promise< Response > => {
  const data: object = await ProductModel.find( {}, { '__v': false } );

  console.log( `[ GET ]|=> Fetched all data;` );

  return res.status( 200 ).json( response( 200, 'GET', { 'products': data } ) );
}

const GET = async ( req: Request, res: Response ): Promise< Response > => {
  const title: string = req.params.title.toString();

  const data = await ProductModel.find( { title }, { '__v': false } );

  let code: number;

  if ( data.length === 0 ) {
    console.log( `[ GET ]|=> Data with title: { ${ title } } was not found;` ); 
    
    code = 404;
  } else {
    console.log( `[ GET ]|=> Fetched data with title: { ${ title } };` );
    
    code = 200;
  }

  return res.status( code ).json( response( code, 'GET', { 'product': data } ) );
}

const DELETE = async ( req: Request, res: Response ): Promise< Response > => {
  const title: string = req.params.title.toString();

  const deleted = await ProductModel.deleteOne( { title } );

  let code: number;

  if ( deleted.deletedCount === 0 ) {
    console.log( `[ DELETE ]|=> Data with title: { ${ title } } was not found;` );

    code = 404;
  } else {
    console.log( `[ DELETE ]|=> Deleted data with title: { ${ title } };` );
    
    code = 200;
  }

  return res.status( code ).json( response( code, 'DELETE', { 'product': [] } ) );
}

const POST = async ( req: Request, res: Response ): Promise< Response > => {
  try {
    const newData = req.body;
  
    const newProduct = new ProductModel( newData );
    await newProduct.save();

    return res.status( 201 ).json( response( 201, 'POST', newProduct ) );

  } catch ( err: any | unknown ) {
    console.log( `[ ERROR ]|=> ${ err.message }` );

    return res.status( 400 ).json( response( 400, 'POST', { 'error': err.message } ) );
  } 
}

const PATCH = async ( req: Request, res: Response ): Promise< Response > => {
  const title: string = req.params.title.toString();
  const data = req.body;
  
  const _updatedProduct = await ProductModel.updateOne( { title }, { $set: data } );
  const prod = await ProductModel.find( { title }, { '__v': false } );

  let code: number;

  if ( prod.length === 0 ) {
    console.log( `[ PATCH ]|=> Data with title: { ${ title } } was not found;` );

    code = 404;
  } else {
    console.log( `[ PATCH ]|=> Updated data with title: { ${ title } };` );

    code = 200;
  }

  return res.status( code ).json( response( code, 'PATCH', { 'product': prod } ) );
}

export {
  GETAll,
  GET,
  DELETE,
  POST,
  PATCH
}
