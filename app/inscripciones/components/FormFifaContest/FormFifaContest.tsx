import { ChangeEvent, useState } from "react";
import classnames from "classnames";
import "./FormFifaContest.scss";
import { InscriptionRegister } from "../../models";
const FILE_STACK_API_KEY = "A4rzxhybTwSR4XGdZmuoQz";

interface Props {
  setIsInscribedSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setInscriptionData: React.Dispatch<React.SetStateAction<InscriptionRegister>>;
  setIsInscribedPending: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormFifaContest({
  setIsInscribedSuccess,
  setInscriptionData,
  setIsInscribedPending,
}: Props) {
  const [urlFile, setUrlFile] = useState<string>();
  const [uploadFilePending, setUploadFilePending] = useState<boolean>(false);
  const [registerPending, setRegisterPending] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file: File = event.target.files[0];
      sendInscriptionFile(file);
    }
  };

  const createFormData = async (data: FormData) => {
    data.append("data[numero-registro]", `${inscriptionCodeGenerator()}`);
    if (Boolean(urlFile)) {
      data.append("data[payment-image]", `${urlFile}`);
    }
    return data;
  };

  const showFileStackInput = () => {
    const YOUR_API_KEY = "A4rzxhybTwSR4XGdZmuoQz";
    const client = (window as any).filestack.init(YOUR_API_KEY);
    client.picker().open();
  };

  const sendForm = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const sendData = await createFormData(data);
    await sendRegisterInscription(sendData);
  };

  const sendRegisterInscription = (data: FormData) => {
    setRegisterPending(true);
    const email: string = data.get("data[email]") as string;
    const code: string = data.get("data[numero-registro]") as string;
    const API = "https://sheetdb.io/api/v1/vn9sgxcek470x";
    fetch(API, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then(() => {
        setRegisterPending(false);
        const formDOMElement: HTMLFormElement | null = document.getElementById(
          "inscription-fifa-form"
        ) as HTMLFormElement;
        formDOMElement?.reset();
        if (urlFile) {
          setIsInscribedSuccess(true);
        } else {
          setIsInscribedPending(true);
        }
        setInscriptionData({
          email,
          code,
        });
      })
      .catch((err: any) => {
        setRegisterPending(false);
        console.log(err);
      });
  };

  const sendInscriptionFile = (file: File) => {
    setUploadFilePending(true);
    const client = (window as any).filestack.init(FILE_STACK_API_KEY);

    client
      .upload(file, {})
      .then((res: any) => {
        setUploadFilePending(false);
        setUrlFile(res.url);
        return res.url;
      })
      .catch((err: any) => {
        setUploadFilePending(false);
        console.log(err);
      });
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
    <div className="FormFifaContest mx-3 md:mx-6 mt-6">
      <div className="FormFifaContest__header mb-8 text-center">
        <h3 className="text-2xl mb-3 text-slate-800 font-bold text-center">
          !Agrega los datos de inscripción¡
        </h3>
        <p className="text-center text-slate-600">
          Agrega tu información para ser parte del torneo de FIFA y gana
        </p>
        <span className="font-bold text-red-500 text-xl">$1.500.000</span>
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
          <div
            className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-4"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-3">Consignación bancolombia</p>
                <ul className="list-disc">
                  <li className="text-sm">
                    Cuenta ahorros bancolombia:{" "}
                    <span className="font-bold">30500001193</span>
                  </li>
                  <li className="text-sm">
                    Titular:{" "}
                    <span className="font-bold">Conexión Medios S.A.S</span>
                  </li>
                  <li className="text-sm">
                    Nit: <span className="font-bold">901557489-7</span>
                  </li>
                  <li className="text-sm">
                    Costo de inscripción:{" "}
                    <span className="font-bold">$390.000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <input type="file" onChange={handleFileChange} />
        </div>
        {/* <a
          className="block text-sm text-slate-800 hover:text-slate-500 mb-4 underline font-medium hover:underline"
          href="https://drive.google.com/file/d/1ZqsuM4bmuf5SP6uYzRP7HUaGX6Q5DVrd/view?usp=sharing"
          target="_blank"
        >
          Descargar reglamento del torneo
        </a> */}
        <button
          form="inscription-fifa-form"
          className={classnames(
            "w-full h-11 bg-red-500 hover:bg-red-600 text-white",
            {
              "opacity-25": uploadFilePending || registerPending,
            }
          )}
          disabled={uploadFilePending}
        >
          {uploadFilePending
            ? "Cargando imagen..."
            : registerPending
            ? "Enviando registro..."
            : "Incribirme"}
        </button>
      </form>
    </div>
  );
}

export default FormFifaContest;
