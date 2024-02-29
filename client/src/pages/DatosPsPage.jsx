import {useForm} from 'react-hook-form'
import { useDatosP } from '../context/datosPContext';
import { useEffect } from 'react';
import { DatosPCard } from '../components/tasks/datosPCard';
function DatosPsPage(){
    const { datosP, getAllDatosP } = useDatosP();

  useEffect(() => {
    getAllDatosP();
  }, []);

  return (
    <>
      {datosP.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No tasks yet, please add a new task
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {datosP.map((datosP) => (
          <DatosPCardCard datosP={datosP} key={datosP._id} />
        ))}
      </div>
    </>
  );
}
export default DatosPsPage