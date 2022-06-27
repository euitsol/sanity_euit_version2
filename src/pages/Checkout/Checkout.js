import React from 'react'
import CountrySelector from '../../components/CountrySelector/CountrySelector'
import Title from '../../components/title/Title'

function Checkout() {
  return (
    <div>
      <Title value='Checkout'></Title>
      <section className='admision-form'>
        <div className='admission-top-title'>Billing details</div>
        <form>
            {/* name input */}
            <label>
                <p>Full Name<sup className='star'>*</sup></p>
                <input type="text" placeholder='Name' required />
            </label>
            {/* fathers and mothers name */}
            <div className='double-input'>
                <label>
                    <p>Father's Name<sup className='star'>*</sup></p>
                    <input type="text" placeholder="Father's Name" required />
                </label>
                <label>
                    <p>Mother's Name<sup className='star'>*</sup></p>
                    <input type="text" placeholder="mother's Name" required />
                </label>
            </div>

            {/* present address */}
            <label>
                <p>Present Address<sup className='star'>*</sup></p>
                <input type="text" placeholder='Present Address' required />
            </label>

            {/* permanent address */}
            <label>
                <p>Permanent Address<sup className='star'>*</sup></p>
                <input type="text" placeholder='Permanent Address' required />
            </label>

            {/* institute/organization name */}
            <label>
                <p>Institute/Organization Name<sup className='star'>*</sup></p>
                <input type="text" placeholder='Institute/Organization Name' required />
            </label>
            {/* date of birth and nid number */}
            <div className='double-input'>
                <label>
                    <p>Date of Birth<sup className='star'>*</sup></p>
                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" required />
                </label>
                <label>
                    <p>NID/Birth/Passport No</p>
                    <input type="text" placeholder="NID/Birth/Passport No" />
                </label>
            </div>
            {/* nationality and occupation */}
            <div className='double-input'>
                <label>
                    <p>Nationality<sup className='star'>*</sup></p>
                    <input type="text" placeholder="Nationality" required />
                </label>
                <label>
                    <p>Occupation<sup className='star'>*</sup></p>
                    <input type="text" placeholder="Occupation" />
                </label>
            </div>
            {/* phone email */}
            <div className='double-input'>
                <label>
                    <p>Phone<sup className='star'>*</sup></p>
                    <input type="text" placeholder="Enter your Phone number" required />
                </label>
                <label>
                    <p>Email<sup className='star'>*</sup></p>
                    <input type="text" placeholder="Enter your Email id" required />
                </label>
                <div>
                    <p>Country<sup className='star'>*</sup></p>
                    <CountrySelector></CountrySelector>
                </div>
            </div>

            <br></br>
            <input type="submit" value="Submit" className='submit-button' />
        </form>
      </section>
    </div>
  )
}

export default Checkout
