import { NextResponse } from "next/server";
import { } from "./services.js"
export async function GET(request: Request) {
    return NextResponse.json({ metodo: "message" }, { status: 200 });
}


export async function POST(request: Request) {
  const {parametro} = await request.json()
  console.log(parametro)
  return NextResponse.json({ metodo: "POST" }, { status: 200 });
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