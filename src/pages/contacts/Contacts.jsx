import "./Contacts.css"

export const Contacts = () => {
  return (
    <main className='contact-main'>
      <div className='contact-primary'>
        <div className='contact-text'>
          <h2 className='contact-h2'>Contact Us</h2>
          <p className='contact-p'>Por favor, complete el formulario y nos pondremos en contacto con usted a la brevedad a través de su correo electrónico.</p>
        </div>
        <div className='others'>


          <div className='contact-form'>
            <div className='contact-container'>
              <form action="" className='form'>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' required autoComplete='additional-name' />

                <label htmlFor="email">Email</label>
                <input type="email" id='email' required autoComplete='additional-name' />

                <label htmlFor="message">Mensaje</label>
                <input type="text" id='message' required />
              </form>
              <button type="submit">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

