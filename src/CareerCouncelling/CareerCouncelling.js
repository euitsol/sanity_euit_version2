import React from 'react'
import { useForm } from 'react-hook-form';
import councelingImage from '../images/counselling-Image.png'
import './CareerCouncelling.css'

function CareerCouncelling() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const courses = ['Web Design', 'Web Design and Development', 'Graphyic Design', 'Wordpress Theme Customization', 'OOP PHP & MySql', 'CodeIgniter Framework', 'Laravel Framework', 'App Development', '3D Animation', 'UI/UX Design', 'Photography', 'Motion Graphic', 'Video Editing', 'Networking', 'MTCNA', 'Motion Graphic', 'Video Editing', 'Networking', 'MTCNA', 'CCNA', 'RHCSA/RHCHE', 'Digital Markrting', 'SEO', 'Social Marketing', 'Communicative English', 'Microsoft Office']
    console.log(errors);
  return (
    <div>
        <div className='career-councelling'>
            <div>
                <div className='career-councelling-title'>
                    <p>Career</p>
                    <h1>Councelling</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='person-info'>
                        <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
                        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 11})} />
                        <select {...register("Title", { required: true })}>
                            {
                                courses.map(course=><option value={course}>{course}</option>)
                            }
                        </select>
                    </div>
                    <input className='user-message' type='text' placeholder='type your message'></input>
                    <input className='submit' type="submit" />
                </form>
            </div>
            <img src={councelingImage} alt='career councelling'></img>
        </div>
    </div>
  )
}

export default CareerCouncelling