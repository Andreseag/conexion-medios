import { InscriptionRegister } from "../../models";

interface Props {
  inscriptionData: InscriptionRegister;
}

function InscriptionSuccess({ inscriptionData }: Props) {
  return (
    <div className="inscription-success w-full mt-6">
      <div className="inscription-success__container flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Inscripción Exitosa
        </h3>
        <p>
          Tu suscripción fue realizada de forma correcta en las proximas horas
          llegara un correo de confirmación a
        </p>
        <span className="font-semibold underline mb-2">
          {inscriptionData.email}
        </span>
        <p className="mb-2">Tu código de resgistro es</p>
        <span className="bg-red-500 text-white font-semibold rounded-md px-3 py-1">
          {inscriptionData.code}
        </span>
      </div>
    </div>
  );
}

export default InscriptionSuccess;
