import { NextResponse } from "next/server";
import {getAllPersonas,createPersona} from "./services.js"

export async function GET(request: Request) {
  const listaPersonas = await getAllPersonas();
  
  return NextResponse.json({ lista: listaPersonas }, { status: 200 });
}

export async function POST(request: Request) {
  const { rut_persona, email, fecha_nacimiento, activo, telefono } =
  await request.json();
  const result = await createPersona(rut_persona, email, fecha_nacimiento, activo, telefono);
  return NextResponse.json({ respuesta: `Creado con éxito: ${result}` }, { status: 200 });
}



/* export async function PUT(request: Request) {
  return NextResponse.json({ metodo: "PUT" }, { status: 200 });
}
export async function DELETE(request: Request) {
  return NextResponse.json({ metodo: "DELETE" }, { status: 200 });
}
export async function UPDATE(request: Request) {
  return NextResponse.json({ metodo: "UPDATE" }, { status: 200 });
}
 */