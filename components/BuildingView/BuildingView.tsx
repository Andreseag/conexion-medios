import Image from "next/image";
import ConexionLogo from "../../public/logo-l.png";

function BuildingView() {
  return (
    <div className="flex flex-col items-center">
      <Image src={ConexionLogo} alt="Conexión Medios" width="600" />
      <svg
        fill="none"
        className="w-16 h-16 animate-spin fill-red-500"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
          fillRule="evenodd"
        />
      </svg>
      <p className="text-xl">Sitio web en construcción...</p>
    </div>
  );
}

export default BuildingView;
