"use client";
//import Toast from '../components/Toast';

export default function Form() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const rut_persona = e.target.rut_persona.value;
    const email = e.target.email.value;
    const fecha_nacimiento = e.target.fecha_nacimiento.value;
    const activo = e.target.activo.value === "on" ? true : false;
    const telefono = e.target.telefono.value;
    const archivo = e.target.archivo;

    const res = await fetch("/api/persona", {
      method: "POST",
      body: JSON.stringify({
        rut_persona,
        email,
        fecha_nacimiento,
        activo,
        telefono,archivo
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //const message = await res.json();
  };
  return (
    <form className="form-control" onSubmit={onSubmit}>
      <div className="form-control w-full max-w-xs mr-32 mt-10">
        <input
          type="text"
          placeholder="Rut"
          className="input input-bordered"
          id="rut_persona"
        />
      </div>
      <div className="form-control w-full  max-w-xs mr-32 mt-10">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered"
          id="email"
        />
      </div>
      <div className="form-control w-full max-w-xs mr-32 mt-10">
        <input
          type="number"
          placeholder="Teléfono"
          className="input input-bordered"
          id="telefono"
        />
      </div>
      <div className="form-control w-full max-w-xs mr-32 mt-10">
        <input
          type="text"
          placeholder="Fecha de Nacimiento"
          className="input input-bordered"
          id="fecha_nacimiento"
        />
      </div>

      <div className="form-control w-full max-w-xs mr-32 mt-10">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            id="activo"
          />
          <label htmlFor="activo">Activo</label>
        </label>
      </div>
      <input type="file" className="file-input w-full max-w-xs" id="archivo"/>
      <button
        className="btn btn-primary w-full max-w-xs mr-32 mt-10"
        id="btnForm"
      >
        Ingresar
      </button>
    </form>
  );
}
