import { NextResponse } from "next/server";
import { getName } from "./services.js"
export async function GET(request: Request) {
    const {value1,value2} = await request.json()
    return NextResponse.redirect(new URL('/', request.url));
}
export async function POST(request: Request) {

  const {value1,value2} = await request.json()

  return NextResponse.json({ "mensaje": `El traumado dice: ${value1} ${value2}` }, { status: 200 });
}
export async function PUT(request: Request) {
  return NextResponse.json({ metodo: "PUT" }, { status: 200 });
}
export async function DELETE(request: Request) {
  return NextResponse.json({ metodo: "DELETE" }, { status: 200 });
}
export async function UPDATE(request: Request) {
  return NextResponse.json({ metodo: "UPDATE" }, { status: 200 });
}
/* export async function GET(request:Request){
 
    return NextResponse.redirect(new URL('/new', request.url))
} */