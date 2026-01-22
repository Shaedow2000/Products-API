
type dict = {
  [ key: string ]: string | number | boolean;
}

const GETAll = async (): Promise< dict | void > => {}

const GET = async ( _title: string ): Promise< dict | void > => {}

const DELETE = async ( _title: string ): Promise< dict | void > => {}

const POST = async (): Promise< dict | void > => {}

const PATCH = async (): Promise< dict | void > => {}

export {
  GETAll,
  GET,
  DELETE,
  POST,
  PATCH
}
