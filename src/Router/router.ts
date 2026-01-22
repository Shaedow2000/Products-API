import { Router } from "express";

import { GETAll, GET, DELETE, POST, PATCH } from "./methods.ts";

const router: Router = Router()

// Get All route
router.route( '/api/products' )
  .get( (): void => {} )

// Post route 
router.route( '/api/product' )
  .post( (): void => {} )

// Get Delete and Patch by title of the product
router.route( '/api/product/:title' )
  .get( (): void => {} )
  .delete( (): void => {} )
  .patch( (): void => {} )

export { router }
