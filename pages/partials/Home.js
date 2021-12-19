import Modal from '../../component/Modal'
import { SyncOutlined } from '@ant-design/icons'

const Home = ({ order }) => {


    return (
        <main id="main">
            {/* ======= About Section ======= */}
            <section id="order" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>Input Order</h2>
                        <p>Please press the button below if you want to make an order</p>
                        <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Click Me
                        </button>
                        {!order ? (<SyncOutlined spin className='d-flex justify-content-center display-1 text-primary p-5' />) : (
                            <table className='table mt-3 table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Consignee Name</th>
                                        <th>Consignee Number</th>
                                        <th>Consignee Address</th>
                                        <th>Payment Type</th>
                                        <th>Pickup Contact Name</th>
                                        <th>Pickup Contact Number</th>
                                        <th>Pickup Address</th>
                                        <th>Pickup Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.map((data, index) => (
                                        <tr>
                                            <td key={index}>{data.order_id}</td>
                                            <td>{data.consignee_name}</td>
                                            <td>{data.consignee_number}</td>
                                            <td>{data.consignee_address}</td>
                                            <td>{data.payment_type}</td>
                                            <td>{data.pickup_contact_name}</td>
                                            <td>{data.pickup_contact_number}</td>
                                            <td>{data.pickup_address}</td>
                                            <td>{data.pickup_country}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        <Modal />

                    </div>
                </div>
            </section>{/* End About Section */}
            {/* ======= About Section ======= */}
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>hi my name is ial, i am a web developer who has successfully completed several client projects, i am an honest and hard worker, i have a hobby of reading and sports</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/profile-img.jpg" className="img-fluid" alt />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content mt-5" data-aos="fade-left">
                            <h3> Web Developer.</h3>
                            <p className="fst-italic">
                                my profile
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>7 Dec 1999</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+628 9563 9359 516</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Curup, Bengkulu</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>22</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Bechelor Degree</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>ialilham77@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End About Section */}

            {/* ======= Skills Section ======= */}
            <section id="skills" className="skills section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>
                    <div className="row skills-content">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="progress">
                                <span className="skill">PHP <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Microsoft Office <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Photoshop <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Skills Section */}
            {/* ======= Resume Section ======= */}
            <section id="resume" className="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>Resume</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>ILHAM ALMALIK</h4>
                                <p><em>Web Developer with 1+ years of experience designing and developing Web</em></p>
                                <ul>
                                    <li>Curup, Bengkulu</li>
                                    <li>+628 9563 59516</li>
                                    <li>ialilham77@gmail.com</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bechelor Degree of Informatic Engineering</h4>
                                <h5>2017 - 2021</h5>
                                <p><em>University Putra Indonesia "YPTK" Padang</em></p>
                                <p>
                                    I managed to graduate quickly and get excellent results, when I was on campus I got an achievement scholarship</p>
                            </div>
                            <div className="resume-item">
                                <h4>SMA 2 Rejang Lebong</h4>
                                <h5>2014 - 2017</h5>
                                <p>I am an active person at school and I really like sports</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Programmer IT</h4>
                                <h5>July 2021 - Present</h5>
                                <p><em>Badan Perencanaan Pembangunan Daerah Agam </em></p>
                                <ul>
                                    <li>Develop and Maintain Local Government Website</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Designing a Useful Government E-Planning Website to Facilitate Local Government Work</li>
                                    <li>Designing a local government calendar</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Web Developer Trainee</h4>
                                <h5>Sept 2020 - Dec 2020</h5>
                                <p><em>Mediatama Web Indonesia Padang</em></p>
                                <ul>
                                    <li>Website Design and Development</li>
                                    <li>accept client project</li>
                                    <li>Teaches Basic Website Development to Lesson Children</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-12 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>Curup, kab. Rejang Lebong, Bengkulu</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>ialilham77@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+628 5381 680323</p>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.566685950639!2d102.6226369141413!3d-3.4549742974853204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e31252402b78f09%3A0x6ce2123d0a0ee674!2sArlys%20Corps%20(Penyedia%20jasa%20pembuatan%20aplikasi%20%26%20website)!5e0!3m2!1sid!2sid!4v1639809020664!5m2!1sid!2sid" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Home
