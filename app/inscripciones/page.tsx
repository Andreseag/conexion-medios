"use client";
import FormFifaContest from "@/app/inscripciones/components/FormFifaContest/FormFifaContest";
import { useState } from "react";
import InscriptionSuccess from "./components/InscriptionSuccess/InscriptionSuccess";

function Fifa() {
  const [isInscribed, setIsInscribed] = useState<boolean>(false);

  return (
    <>
      {isInscribed ? (
        <InscriptionSuccess />
      ) : (
        <FormFifaContest setIsInscribed={setIsInscribed} />
      )}
    </>
  );
}

export default Fifa;
