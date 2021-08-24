import React from 'react'

function ContactForm() {
    return (
        <div className='form-container'>
            <form>
                <label htmlFor="name" className='form-text'>Name</label>
                <input type="text" name="name" id="name" /> <br />
                <label htmlFor="Email" className='form-text'>Email</label>
                <input type="email" /> <br />
                <label htmlFor="message" className='form-text'>Message</label>
                <input type="text-area" /> <br />
                <input type="submit" value='Submit' className='submit' />
                
            </form>
        </div>
    )
}

export default ContactForm
