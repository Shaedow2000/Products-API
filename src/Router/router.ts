import { Router } from "express";
import type { Request, Response } from "express";

import { GETAll, GET, DELETE, POST, PATCH } from "./methods.ts";

const router: Router = Router()

// Get All route
router.route( '/api/products' )
  .get( ( _req: Request, res: Response ): void => {
    GETAll( res )
  } )

// Post route 
router.route( '/api/product' )
  .post( (): void => {} )

// Get Delete and Patch by title of the product
router.route( '/api/product/:title' )
  .get( ( req: Request, res: Response ): void => {
    const title: string = req.params.title.toString();
    GET( res, title );
  } )
  .delete( (): void => {} )
  .patch( (): void => {} )

export { router }
