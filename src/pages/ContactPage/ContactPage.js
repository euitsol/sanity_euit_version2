import { faClock, faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useForm } from 'react-hook-form';
import Map from '../../Map/Map';
import './ContactPage.css'

function ContactPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const courses = ['select', 'Web Design', 'Web Design and Development', 'Graphyic Design', 'Wordpress Theme Customization', 'OOP PHP & MySql', 'CodeIgniter Framework', 'Laravel Framework', 'App Development', '3D Animation', 'UI/UX Design', 'Photography', 'Motion Graphic', 'Video Editing', 'Networking', 'MTCNA', 'Motion Graphic', 'Video Editing', 'Networking', 'MTCNA', 'CCNA', 'RHCSA/RHCHE', 'Digital Markrting', 'SEO', 'Social Marketing', 'Communicative English', 'Microsoft Office']
  return (
    <div>
        <h1 className='contact-title'>Contact Us</h1>
        <div className='contact-us'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='person-info'>
                        <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
                        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 11})} />
                        <select {...register("Title", { required: true })}>
                            {
                                courses.map((course, index)=><option key={index} value={course}>{course}</option>)
                            }
                        </select>
                    </div>
                    <input className='user-message' type='text' placeholder='type your message'></input>
                    <input className='submit' type="submit" />
                </form>
            </div>
            <div className='contact-details'>
                <div className="address">
                    <FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon>
                    <h3 className='heading'>Address</h3>
                    <p>Your address here</p>
                </div>
                <div className="callus">
                    <FontAwesomeIcon className='icon' icon={faMobileScreenButton}></FontAwesomeIcon>
                    <h3 className='heading'>Call Us</h3>
                    <p>Your number here</p>
                    <p>Your number here</p>
                    <p>Your number here</p>
                </div>
                <div className="emailmail">
                    <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
                    <h3 className='heading'>Email</h3>
                    <p>Your email here</p>
                    <p>Your email here</p>

                </div>
                <div className="work-hour">
                    <FontAwesomeIcon className='icon' icon={faClock}></FontAwesomeIcon>
                    <h3 className='heading'>Work Hours</h3>
                    <p>Monday - Sunday 10AM - 09PM</p>
                </div>
            </div>

        </div>
        <Map></Map>
    </div>
  )
}

export default ContactPage