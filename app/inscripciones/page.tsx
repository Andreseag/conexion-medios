"use client";
import FormFifaContest from "@/app/inscripciones/components/FormFifaContest/FormFifaContest";
import { useState } from "react";
import InscriptionSuccess from "./components/InscriptionSuccess/InscriptionSuccess";
import { InscriptionRegister } from "./models";

function Fifa() {
  const [isInscribed, setIsInscribed] = useState<boolean>(false);
  const [inscriptionData, setInscriptionData] = useState<InscriptionRegister>({
    email: "",
    code: "",
  });

  return (
    <>
      {isInscribed ? (
        <InscriptionSuccess inscriptionData={inscriptionData} />
      ) : (
        <FormFifaContest
          setIsInscribed={setIsInscribed}
          setInscriptionData={setInscriptionData}
        />
      )}
    </>
  );
}

export default Fifa;
