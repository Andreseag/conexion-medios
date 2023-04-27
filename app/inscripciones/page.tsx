"use client";
import FormFifaContest from "@/app/inscripciones/components/FormFifaContest/FormFifaContest";
import { useState } from "react";
import InscriptionSuccess from "./components/InscriptionSuccess/InscriptionSuccess";
import { InscriptionRegister } from "./models";
import InscriptionPending from "./components/InscriptionPending/InscriptionPending";

function Fifa() {
  const [isInscribedSuccess, setIsInscribedSuccess] = useState<boolean>(false);
  const [isInscribedPending, setIsInscribedPending] = useState<boolean>(false);
  const [inscriptionData, setInscriptionData] = useState<InscriptionRegister>({
    email: "",
    code: "",
  });

  return (
    <>
      {!isInscribedPending && !isInscribedPending && (
        <FormFifaContest
          setIsInscribedSuccess={setIsInscribedSuccess}
          setInscriptionData={setInscriptionData}
          setIsInscribedPending={setIsInscribedPending}
        />
      )}
      {isInscribedPending && <InscriptionPending />}
      {isInscribedSuccess && (
        <InscriptionSuccess inscriptionData={inscriptionData} />
      )}
    </>
  );
}

export default Fifa;
