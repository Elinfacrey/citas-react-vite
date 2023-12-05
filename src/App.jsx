import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = localStorage.getItem('pacientes');
      console.log(pacientesLS,"pancientesLS")
    }
    obtenerLS(); 
  }, []);

  const eliminarPaciente = (id) => {
    console.log("Eliminando paciente ," + id);
    const pacientesActualizados = pacientes.map(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario
            paciente={paciente}
            setPacientes={setPacientes}
            pacientes={pacientes}
          />
          <ListadoPacientes
            setPaciente={setPaciente}
            pacientes={pacientes}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </>
  );
}

export default App;
