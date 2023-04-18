function FormFifaContest() {
  return (
    <div className='FormFifaContest mx-6'>
      <div className="FormFifaContest__header mb-4">
        <h3 className="text-2xl text-slate-800 font-bold text-center">!Agrega los datos de inscripción¡</h3>
        <p className="text-center text-slate-600">Debes agregar tu información para ser parte del tornero de FIFA y ganar hasta <span className="font-bold text-red-500">$1.200.000</span></p>
      </div>
      <form action="">
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Nombre</label>
          <input className='border rounded h-9 px-2' id="name" type="text" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Sexo</label>
          <select className='border rounded h-9 px-2' name="" id="">
            <option value="">Selecciona una opción</option>
            <option value="">Hombre</option>
            <option value="">Mujer</option>
            <option value="">Otro</option>
          </select>
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Edad</label>
          <input className='border rounded h-9 px-2' id="name" type="number" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Correo</label>
          <input className='border rounded h-9 px-2' id="name" type="email" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Tipo de documento</label>
          <select className='border rounded h-9 px-2' name="" id="">
            <option value="">Selecciona una opción</option>
            <option value="">Cédula de ciudadanía</option>
            <option value="">Tarjeta de identidad</option>
            <option value="">Cedula de extranjería</option>
          </select>
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Número de documento</label>
          <input className='border rounded h-9 px-2' id="name" type="email" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Teléfono de contacto</label>
          <input className='border rounded h-9 px-2' id="name" type="number" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Número linea WhatsApp</label>
          <input className='border rounded h-9 px-2' id="name" type="number" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Dirección</label>
          <input className='border rounded h-9 px-2' id="name" type="number" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Ciudad</label>
          <input className='border rounded h-9 px-2' id="name" type="number" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Talla de camiseta</label>
          <input className='border rounded h-9 px-2' id="name" type="number" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Equipo Fifa 23 de preferencia</label>
          <input className='border rounded h-9 px-2' id="name" type="number" />
        </div>
        <div className='form-group flex flex-col mb-2'>
          <label className="text-sm" htmlFor="name">Número de referencia consignación de la inscripción</label>
          <input className='border rounded h-9 px-2' id="name" type="number" />
        </div>
        <a className="block text-red-600 font-medium hover:underline" href="" target="_blank">Descargar reglamento del torneo</a>
        <button className="bg" >Incribirme</button>
      </form>
    </div>
  )
}

export default FormFifaContest