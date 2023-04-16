import Image from "next/image"
import ConexionLogo from "../public/logo-l.png"
import "./styles.module.scss"

export default function Home() {
  return (
    <>
      <div className="building-view">
        <Image 
          src={ConexionLogo}
          alt="Picture of the author"
          width="600"
        />
      </div>
    </>
  )
}
