import { useDatosP } from "../../context/datosPContext";
import { Button, ButtonLink, Card } from "../ui";

export function DatosPCard({ datosP }) {
  const { deleteDatosP } = useDatosP();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">Datos Personales</h1>
        <div style={{ backgroundColor: '#070F2B' }} className="flex gap-x-2 items-center">
          <Button onClick={() => deleteDatosP(datosP._id)}>Delete</Button>
          <ButtonLink to={`/datosP/${datosP._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{datosP.telefono}</p>
    </Card>
  );
}
