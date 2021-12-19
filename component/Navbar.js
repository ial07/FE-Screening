import { useContext } from 'react'
import Link from 'next/link';
import { UserContext } from '../context';
import { useRouter } from 'next/router'

const Navbar = () => {
    const [state, setState] = useContext(UserContext)
    const router = useRouter()

    const logOut = () => {
        window.localStorage.removeItem('session')
        setState(null)
        router.push('/login')
    }
    return (


        <div>
            {/* ======= Mobile nav toggle button ======= */}
            <i className="bi bi-list mobile-nav-toggle d-xl-none" />
            {/* ======= Header ======= */}
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile mt-5">
                        <h1 className="text-light"><a href="index.html">ILHAM ALMALIK</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://www.facebook.com/ial.ilham" className="facebook"><i className="bx bxl-facebook" /></a>
                            <a href="https://www.instagram.com/ial_ilham/" className="instagram"><i className="bx bxl-instagram" /></a>
                            <a href="https://www.linkedin.com/in/ilham-almalik-109255227/" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            {state === null ? (
                                <li>
                                    <Link href='/login'>
                                        <a className='nav-link scrollto'><i className="bx bx-log-in" />Login</a>
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                                    <li><a href="#order" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Order</span></a></li>
                                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                                    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
                                    <li><a className='nav-link scrollto' onClick={logOut}><i className="bx bx-log-out" />LogOut</a></li>
                                </>
                            )}
                        </ul>
                        <div>

                        </div>
                    </nav>{/* .nav-menu */}
                </div>
            </header > {/* End Header */}
        </div >

    )
}

export default Navbar
