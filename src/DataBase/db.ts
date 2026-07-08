import process from 'node:process';
import * as mongoose from 'mongoose';

const URL: string = process.env.URL || '';

async function connectDB(): Promise< void > {
  await mongoose.connect( URL ).then( (): void => {
    console.log( '=!= Established connection with data base =!=' );
  } );
}

export { connectDB }
