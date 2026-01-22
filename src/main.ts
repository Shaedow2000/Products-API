import process from 'node:process';
import express from 'express';
import type { Express } from 'express';
import cors from 'cors';
import 'dotenv/config';

// Main app/Server
const app: Express = express();

// Middlewares
app.use( cors() );

// Conts
const PORT: number = Number( process.env.PORT ) || 1111;

// Start Server
app.listen( PORT, (): void => {
  console.log( `=!= Server started on http://localhost:${ PORT } =!=` )
} );
