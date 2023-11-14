import { prisma } from "@/libs/prisma.js";
export async function getAllPersonas() {
  const lista = await prisma.persona.findMany();
  return lista;
}

export async function createPersona(rut_persona, email, fecha_nacimiento, activo, telefono,archivo) {
  const result = await prisma.persona.create({
    data: {
      rut_persona: rut_persona,
      email: email,
      fecha_nacimiento: new Date(fecha_nacimiento),
      activo: activo,
      telefono: telefono,
      archivo:archivo
    }});
  return true;
}

export async function updatePersona() {
  //const data = await prisma.test.findMany();
}

export async function deletePersona() {
  //const data = await prisma.test.findMany();
}
