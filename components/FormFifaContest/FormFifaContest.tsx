import React, { useState } from "react";
import "./FormFifaContest.scss";
import { PickerDropPane } from "filestack-react";

const YOUR_API_KEY = "A4rzxhybTwSR4XGdZmuoQz";
// import { useState } from "react";

// interface FormValues {
//   name: string;
//   sex: string;
//   email: string;
//   document: string;
//   "document-number": string;
//   "phone-number": string;
//   "whatsapp-phone": string;
//   address: string;
//   city: string;
//   "shirt-size": string;
//   "fifa-team": string;
//   "payment-reference": string;
// }

function FormFifaContest() {
  // const [formValues, setFormValues] = useState<FormValues>({
  //   name: "",
  //   sex: "",
  //   email: "",
  //   document: "",
  //   "document-number": "",
  //   "phone-number": "",
  //   "whatsapp-phone": "",
  //   address: "",
  //   city: "",
  //   "shirt-size": "",
  //   "fifa-team": "",
  //   "payment-reference": "",
  // });

  const [isMount, setMount] = useState<boolean>(false);

  const sendForm = async (event: any) => {
    event.preventDefault();
    const API = "https://sheetdb.io/api/v1/vn9sgxcek470x";
    const data = new FormData(event.target);

    fetch(API, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then(() => {
        const formDOMElement: HTMLFormElement | null = document.getElementById(
          "sheetdb-form"
        ) as HTMLFormElement;
        formDOMElement?.reset();
      });
  };

  useState(() => {
    setMount(true);
  });

  return (
    isMount && (
      <div className="FormFifaContest mx-2 md:mx-6 mt-6 md:mt-12 max-w-2xl">
        <div className="FormFifaContest__header mb-8 text-center">
          <h3 className="text-2xl mb-3 text-slate-800 font-bold text-center">
            !Agrega los datos de inscripción¡
          </h3>
          <p className="text-center text-slate-600">
            Agrega tu información para ser parte del tornero de FIFA y ganar
            hasta
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
              <option value="Cedula de extranjería">
                Cedula de extranjería
              </option>
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
            <div className="cursor-pointer">
              <PickerDropPane
                apikey={YOUR_API_KEY}
                onSuccess={(res: any) => console.log(res)}
                onUploadDone={(res: any) => console.log(res)}
              />
            </div>
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
    )
  );
}

export default FormFifaContest;
