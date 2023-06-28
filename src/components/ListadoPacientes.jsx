import Pacientes from "./Pacientes";

function ListadoPacientes ({pacientes, setPaciente,eliminarPaciente}) {
    
    return (
        <div className="w-1/2 lg:w-2/5 h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                     <h2 className="font-black text-3xl text-center mb-5">Listado Pacientes</h2>
                    <p className="text-xl nt-5 mb-10 text-center">Administra tus {""}
                    <span className="text-indigo-600 font-bold">Pacientes</span>    
                    </p>
                    { pacientes.map(paciente => (
                        <Pacientes 
                            key = {paciente.id}
                            paciente = {paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente ={eliminarPaciente}
                        />
                    ))}
                </>
                 
            ) : (
                <>
                 <h2 className="font-black text-3xl text-center mb-5">No hay pacientes</h2>
                <p className="text-xl nt-5 mb-10 text-center">
                Comienza agregando tus pacientes {""}
                <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>    
                </p>
            
                </>
            )}
           
            
        </div>
    );
}
export default ListadoPacientes
