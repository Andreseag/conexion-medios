import { useEffect, useState } from "react";
import "./FormFifaContest.scss";
import { InscriptionRegister } from "../../models";
const FILE_STACK_API_KEY = "A4rzxhybTwSR4XGdZmuoQz";

interface Props {
  setIsInscribed: React.Dispatch<React.SetStateAction<boolean>>;
  setInscriptionData: React.Dispatch<React.SetStateAction<InscriptionRegister>>;
}

function FormFifaContest({ setIsInscribed, setInscriptionData }: Props) {
  const sendForm = async (event: any) => {
    event.preventDefault();
    const API = "https://sheetdb.io/api/v1/vn9sgxcek470x";
    const data = new FormData(event.target);
    data.append("data[numero-registro]", `${inscriptionCodeGenerator()}`);
    const email: string = data.get("data[email]") as string;
    const code: string = data.get("data[numero-registro]") as string;

    fetch(API, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then(() => {
        const formDOMElement: HTMLFormElement | null = document.getElementById(
          "inscription-fifa-form"
        ) as HTMLFormElement;
        formDOMElement?.reset();
        setIsInscribed(true);
        setInscriptionData({
          email,
          code,
        });
      });
  };

  const sendInscriptionFile = () => {
    const client = (window as any).filestack.init(FILE_STACK_API_KEY);
  };

  const inscriptionCodeGenerator = (): number => {
    const min: number = 1000;
    const max: number = 9999;
    const floatRandom: number = Math.random();

    const difference: number = max - min;

    // random between 0 and the difference
    const random: number = Math.round(difference * floatRandom);

    const randomWithinRange: number = random + min;

    return randomWithinRange;
  };

  return (
    <div className="FormFifaContest mx-2 md:mx-6 mt-6 md:mt-12 max-w-2xl">
      <div className="FormFifaContest__header mb-8 text-center">
        <h3 className="text-2xl mb-3 text-slate-800 font-bold text-center">
          !Agrega los datos de inscripción¡
        </h3>
        <p className="text-center text-slate-600">
          Agrega tu información para ser parte del tornero de FIFA y ganar hasta
        </p>
        <span className="font-bold text-red-500 text-xl">$1.200.000</span>
      </div>
      <form
        className="FormFifaContest__form"
        id="inscription-fifa-form"
        onSubmit={sendForm}
      >
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="name">
            Nombre
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[name]"
            id="name"
            type="text"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="sex">
            Sexo
          </label>
          <select
            className="border rounded h-9 px-2"
            name="data[sex]"
            id="sex"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="age">
            Edad
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[age]"
            id="age"
            type="number"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="email">
            Correo
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[email]"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="document">
            Tipo de documento
          </label>
          <select
            className="border rounded h-9 px-2"
            name="data[document]"
            id="document"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
            <option value="Cedula de extranjería">Cedula de extranjería</option>
          </select>
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="document-number">
            Número de documento
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[document-number]"
            id="document-number"
            type="number"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="phone-number">
            Teléfono de contacto
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[phone-number]"
            id="phone-number"
            type="number"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="whatsapp-phone">
            Número linea WhatsApp
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[whatsapp-phone]"
            id="whatsapp-phone"
            type="number"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="address">
            Dirección
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[address]"
            id="address"
            type="text"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="city">
            Ciudad
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[city]"
            id="city"
            type="text"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="shirt-size">
            Talla de camiseta
          </label>
          <select
            className="border rounded h-9 px-2"
            name="data[shirt-size]"
            id="shirt-size"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm" htmlFor="fifa-team">
            Equipo Fifa 23 de preferencia
          </label>
          <input
            className="border rounded h-9 px-2"
            name="data[fifa-team]"
            id="fifa-team"
            type="text"
            required
          />
        </div>
        <div className="form-group flex flex-col mb-2">
          <label className="text-sm">Imagen de soporte de pago</label>
          <div></div>
        </div>
        <a
          className="block text-sm text-slate-800 hover:text-slate-500 mb-4 underline font-medium hover:underline"
          href="https://drive.google.com/file/d/1ZqsuM4bmuf5SP6uYzRP7HUaGX6Q5DVrd/view?usp=sharing"
          target="_blank"
        >
          Descargar reglamento del torneo
        </a>
        <button
          form="inscription-fifa-form"
          className="w-full h-11 bg-red-500 hover:bg-red-600 text-white"
        >
          Incribirme
        </button>
      </form>
    </div>
  );
}

export default FormFifaContest;
