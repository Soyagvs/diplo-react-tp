import './CardPremium.css'
import Tilde from '../../icons/Tilde'

export default function CardPremium() {
  return (
    <div className='card-container3'>
      <h4 className='title-card3'>Empresa</h4>
      <div className='text3'>
        <p><span className='number-card3'>$245</span>/mes</p>
        <p>Este plan es ideal para aquellas personas dedicadas a IT</p>
      </div>
      <div className='border-card3'></div>
      <div className='div-card3'>
        <Tilde />
        <p className='p-card3'>Servicios de feedback</p>
      </div>
      <div className='div-card3'>
        <Tilde />
        <p className='p-card3'>Servicios de maquetado web</p>
      </div>
      <div className='div-card3'>
        <Tilde />
        <p className='p-card3'>Servicios de Branding</p>
      </div>
      <div className='div-card3'>
        <Tilde />
        <p className='p-card3'>Soporte</p>
      </div>
      <div className='button-container3'>
        <a className="button-card3" href="">Obtener plan</a>
      </div>
    </div>
  )
}
