import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {
  console.log(pacientes.length, "pacientes length");

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold text-xl">
              Pacientes y Citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente.id} 
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente = {eliminarPaciente} 
            />
          ))}
        </>
      ) : (
        <>   <h2 className="font-black text-3xl text-center">
        No se han encontrado pacientes
      </h2>
      <p className="text-xl mt-5 mb-10">
        Empieza a registrar {""}
        <span className="text-indigo-600 font-bold text-xl">
          y se mostrarán en este lugar.
        </span>
      </p></>
      )}
    </div>
  );
};

export default ListadoPacientes;