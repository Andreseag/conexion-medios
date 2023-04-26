import { InscriptionRegister } from "../../models";

interface Props {
  inscriptionData: InscriptionRegister;
}

function InscriptionSuccess({ inscriptionData }: Props) {
  return (
    <div className="inscription-success">
      <div className="inscription-success__container">
        <p>
          Tu suscripción fue realizada de forma correcta en las proximas horas
          llegara un correo de confirmación a
          <span>{inscriptionData.email}</span>
          Tu código de resgistro es <span>{inscriptionData.code}</span>
        </p>
      </div>
    </div>
  );
}

export default InscriptionSuccess;
