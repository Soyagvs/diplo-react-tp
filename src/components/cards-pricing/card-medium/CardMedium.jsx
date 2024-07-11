import './CardMedium.css'
import Tilde from '../../icons/Tilde'

export default function CardMedium() {
  return (
    <div className='card-container2'>
      <h4 className='title-card2'>Emprendedor</h4>
      <div className='text2'>
        <p><span className='number-card2'>$149</span>/mes</p>
        <p>Este plan es ideal para aquellas personas emprendedoras</p>
      </div>
      <div className='border-card2'></div>
      <div className='div-card2'>
        <Tilde />
        <p className='p-card2'>Servicios de feedback</p>
      </div>
      <div className='div-card2'>
        <Tilde />
        <p className='p-card2'>2 Servicios de maquetado web</p>
      </div>
      <div className='div-card2'>
        <Tilde />
        <p className='p-card2'>2 Servicios de Branding</p>
      </div>
      <div className='div-card2'>
        <Tilde />
        <p className='p-card2'>Soporte</p>
      </div>
      <div className='button-container2'>
        <a className="button-card2" href="">Obtener plan</a>
      </div>
    </div>
  )
}
