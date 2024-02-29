import { createContext, useState } from "react";
import { createDatosPRequest,
        getAllDatosPRequest,
        getDatosPRequest,
        updateDatosPRequest,
        deleteDatosPRequest

} from "../api/datosP";
const datosPContext = createContext();

export const useDatosP =()=>{
    const context = useContext(datosPContext);
    if (!context) throw new Error("useDatosP must be used within a DatosPProvider");
    return context;
}

export function datosPProvider({children}){
    const [datosP, setDatosP]= useState([]);

    const getAllDatosP = async ()=>{
        try {
            const res = await getAllDatosPRequest();
            setDatosP(res.data);
        } catch (error) {
            console.log(error);
        }
        

    }

    const createDatosP = async(datosP)=>{
       const res = await createDatosPRequest(datosP)
    }
    return (
        <datosPContext.Provider 
        value={{
            datosP,
            createDatosP,
            getAllDatosP,
        }}>
            {children}
        </datosPContext.Provider>
    );
}