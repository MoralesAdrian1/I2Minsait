import { useState } from "react";
import { useForm } from "react-hook-form"
import { useDatosP } from "../context/datosPContext";

function DatosPFormPage(){
    const{register, handleSubmit}=useForm();
    const {createDatosP} =useDatosP()

    const onSubmit= handleSubmit((data) =>{
        console.log(data);
    })
    return(
        <div>
            <form onSubmit={onSubmit}>
                <Input
                    type="number"
                    placeholder="Ingresa Tú número de Teléfono"
                    { ...register('teléfono')}
                    className="w-full bg-zinc-700 text-white px4 py-2 rounded-md"
                    autoFocus
                />
                 <Label htmlFor="date">Date</Label>
        <Input type="date" name="date" {...register("date")} />
        <Button>Save</Button>
            </form>
        </div>

    )
}
export default DatosPFormPage