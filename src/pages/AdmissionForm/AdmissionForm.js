import React from 'react'
import './AdmissionForm.css'

function AdmissionForm() {
    const courses = ['Web Design', 'Web Design and Development', 'Graphyic Design', 'Wordpress Theme Customization', 'OOP PHP & MySql', 'CodeIgniter Framework', 'Laravel Framework', 'App Development', '3D Animation', 'UI/UX Design', 'Photography', 'Motion Graphic', 'Video Editing', 'Networking', 'MTCNA', 'Motion Graphic', 'Video Editing', 'Networking', 'MTCNA', 'CCNA', 'RHCSA/RHCHE', 'Digital Markrting', 'SEO', 'Social Marketing', 'Communicative English', 'Microsoft Office']
    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  return (
    <div>
      <div className='admission-now-title'>Admission Now</div>
      <section className='admision-form'>
        <div className='admission-top-title'>Personal & Contact Information</div>
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
            {/* date of birtha nd nid number */}
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
            {/* gender and blood group */}
            <div className='double-input'>
                <div></div>
                <div className='select-group'>
                    <p>Blood Group</p>
                    <select>
                        {
                            bloodGroups.map((group, i)=><option value={group} key={i}>{group}</option>)
                        }
                    </select>
                </div>
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
            </div>

            {/* select course and guardians phone */}
            <div className='double-input'>
                <div className='select-group'>
                    <p>Select course</p>
                    <select>
                        {
                            courses.map((course, i)=><option value={course} key={i}>{course}</option>)
                        }
                    </select>
                </div>
                <label>
                    <p>Guardian's Phone</p>
                    <input type="text" placeholder="Guardian's Phone" />
                </label>
            </div>

            {/* course duration and course type */}
            <div className='double-input'>
                <div className='select-group'>
                    <p>Course Duration</p>
                    <select>
                        <option>3 months</option>
                        <option>4 months</option>
                       
                    </select>
                </div>
                <div className='select-group'>
                    <p>Course Type</p>
                    <select>
                        <option>Industrial</option>
                        <option>Professioanl</option>
                       
                    </select>
                </div>
            </div>

            <br></br>
            <input type="submit" value="Submit" className='submit-button' />
        </form>
      </section>
    </div>
  )
}

export default AdmissionForm
