import Tilde from '../../icons/Tilde'
import './CardBasic.css'

export default function CardBasic() {
  return (
    <div className='card-container'>
      <h4 className='title-card'>Basico</h4>
      <div className='text'>
        <p><span className='number-card'>$15</span>/mes</p>
        <p>Este plan es ideal para tus primeras impresiones</p>
      </div>
      <div className='border-card'></div>
      <div className='div-card'>
        <Tilde />
        <p className='p-card'>1 Servicio de feedback</p>
      </div>
      <div className='div-card'>
        <Tilde />
        <p className='p-card'>1 Servicio de acompañamiento en maquetado web</p>
      </div>
      <div className='div-card'>
        <Tilde />
        <p className='p-card'>1 Soporte</p>
      </div>
      <div className='button-container'>
        <a className="button-card" href="">Obtener plan</a>
      </div>
    </div>
  )
}
