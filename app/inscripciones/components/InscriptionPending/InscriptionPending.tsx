function InscriptionPending() {
  return (
    <div className="inscription-pending mt-6">
      <div className="inscription-pending__container flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Inscripción Pendiente
        </h3>
        <p className="mb-3">
          Tu inscripción fue realizada correctamente pero aún debes realizar el
          pago
        </p>
        <p>
          Comunicate al número{" "}
          <span className="font-semibold">+57 3217484241</span> vía{" "}
          <span className="font-semibold">WhatsApp</span> para continuar con el
          proceso de pago
        </p>
      </div>
    </div>
  );
}

export default InscriptionPending;
