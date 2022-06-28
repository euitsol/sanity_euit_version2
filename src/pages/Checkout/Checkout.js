import React, { useEffect, useState } from 'react'
import CountrySelector from '../../components/CountrySelector/CountrySelector'
import Title from '../../components/title/Title'
import useCourses from '../../Hooks/useCourses';
import { getStoredCart } from '../../utilities/localstorage';
import Loading from '../Loading/Loading';
import './Checkout.css'

function Checkout() {
    const [courses, loading, error, course_prod] = useCourses();
  const [cart, setCart] = useState([]);
  console.log(cart)
  useEffect(()=>{
    const cartitem = getStoredCart();
    const savedCart = [];
    for (const slug in cartitem){
      const addedData = course_prod?.find(course=>course?.slug?.current === slug);
      let qty = cartitem[slug];
      if(addedData){
        addedData.quantity = qty;
        savedCart.push(addedData);
      };
      setCart(savedCart);
    };
        
  }, [course_prod]);
  let totalBill = cart.reduce(function(prev, current) {
    return prev + +current.course_price
  }, 0);


  if(loading){
    return <Loading></Loading>
  }
  if(error){
    return <p>error loading page</p>
  }
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
                <br></br>
                <div class="table-users">
   
                <table cellspacing="0">
                    <tr>
                        <th>Photo</th>
                        <th>Product name</th>
                        <th>Price</th>
                    </tr>


                        {
                            cart.map((product, i)=><tr>
                                <td><img className='checkout-img' src={product.image.asset.url} alt="" /></td>
                                <td>{product.course_name}</td>
                                <td>{product.course_price}</td>
                            </tr>)
                        }


                </table>
            <h3 style={{textAlign:'right', margin:'10px', borderTop:'2px solid #e1e1e1'}}>Total: ${totalBill}</h3>
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
