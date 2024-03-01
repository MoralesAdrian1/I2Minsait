import { createContext, useContext, useState } from "react";
import { createDatosPRequest,
        getAllDatosPRequest,
        getDatosPRequest,
        updateDatosPRequest,
        deleteDatosPRequest
 } from "../api/datosP";

const DatosPContext = createContext();

export const useDatosP = () => {
  const context = useContext(DatosPContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function DatosPProvider({ children }) {
  const [datosP, setDatosP] = useState([]);

  const getAllDatosP = async () => {
    const res = await getAllDatosPRequest();
    setDatosP(res.data);
  };

  const deleteDatosP = async (id) => {
    try {
      const res = await deleteDatosPRequest(id);
      if (res.status === 204) setDatosP(datosP.filter((datosP) => datosP._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createDatosP = async (datosP) => {
    try {
      const res = await createDatosPRequest(datosP);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDatosP = async (id) => {
    try {
      const res = await getDatosPRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDatosP = async (id, datosP) => {
    try {
      await updateDatosPRequest(id, datosP);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DatosPContext.Provider
      value={{
        datosP,
        getAllDatosP,
        deleteDatosP,
        createDatosP,
        getDatosP,
        updateDatosP,
      }}
    >
      {children}
    </DatosPContext.Provider>
  );
}
