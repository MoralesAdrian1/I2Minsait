import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useDatosP } from "../context/datosPContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
import { Select } from "../components/ui/Select";
dayjs.extend(utc);

export function DatosPFormPage() {
  const { createDatosP, getDatosP, updateDatosP } = useDatosP();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateDatosP(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createDatosP({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/datosP");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadDatosP = async () => {
      if (params.id) {
        const datosP = await getDatosP(params.id);
        setValue("telefono", datosP.telefono);
        setValue(
            "date",
            datosP.date ? dayjs(datosP.date).utc().format("YYYY-MM-DD") : ""
          );
        setValue("sexo", datosP.sexo);
        setValue("cp", datosP.cp);
        setValue("pais", datosP.pais);
        setValue("estado", datosP.estado);
        setValue("ciudad", datosP.ciudad);
      }
    };
    loadDatosP();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="telefono">telefono</Label>
        <Input
          type="number"
          name="telefono"
          placeholder="Teléfono"
          {...register("telefono")}
          autoFocus
        />
        {errors.telefono && (
          <p className="text-red-500 text-xs italic">Please enter a telefono.</p>
        )}
        
        <Label htmlFor="date">Fecha de Nacimiento</Label>
        <Input type="date" name="date" {...register("date")} />

        <Label htmlFor="sexo">Sexo</Label>
<select
  name="sexo"
  {...register("sexo")}
  autoFocus
  className="tu-clase-de-estilo-para-select" // Añade tus clases de estilo aquí
>
  <option value="">Seleccione...</option> {/* Opción predeterminada */}
  <option value="Femenino">Femenino</option> {/* Opción 1 */}
  <option value="Masculino">Masculino</option> {/* Opción 2 */}
  <option value="Otro">Otro</option> {/* Opción 3, puedes añadir más opciones según necesites */}
</select>
{errors.sexo && (
  <p className="text-red-500 text-xs italic">Please enter a sexo.</p>
)}

        <Label htmlFor="cp">Código Postal</Label>
        <Input
          type="number"
          name="cp"
          placeholder="cp"
          {...register("cp")}
          autoFocus
        />
        {errors.cp && (
          <p className="text-red-500 text-xs italic">Please enter a cp.</p>
        )}
 <Label htmlFor="pais">País</Label>
<select
  name="pais"
  {...register("pais")}
  autoFocus
  className="tu-clase-de-estilo-para-select" // Añade tus clases de estilo aquí
>
  <option value="">Seleccione Su País</option> {/* Opción predeterminada */}
  <option value="México">México</option> {/* Opción 1 */}
  <option value="Otro">otro</option> {/* Opción 2 */}
</select>
{errors.pais && (
  <p className="text-red-500 text-xs italic">Please enter a País.</p>
)}

        <Label htmlFor="estado">Estado</Label>
        <Input
          type="text"
          name="estado"
          placeholder="estado"
          {...register("estado")}
          autoFocus
        />
        {errors.estado && (
          <p className="text-red-500 text-xs italic">Please enter a estado.</p>
        )}

<Label htmlFor="ciudad">Ciudad</Label>
        <Input
          type="text"
          name="ciudad"
          placeholder="ciudad"
          {...register("ciudad")}
          autoFocus
        />
        {errors.ciudad && (
          <p className="text-red-500 text-xs italic">Please enter a ciudad.</p>
        )}

        

        
        <Button href="/datosP" >Save</Button>
      </form>
    </Card>
  );
}
