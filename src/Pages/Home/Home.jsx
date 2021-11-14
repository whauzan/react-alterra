import React from 'react'
import { Navbar } from '../../Components'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

import profile from '../../Assets/Images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

function Home() {
    return (
        <div className='Home'>
            <Navbar />
            <section className={`${styles.content} h-100`}>
				{/* <div className="float-end p-2 fs-6 fw-bold">{time}</div> */}
				<div className="container m-auto">
					<div className="row row-cols-sm-1 row-cols-md-2 pt-3">
						<div className="col-8 col-sm-9 col-md-5 col-lg-5 col-xl-5 m-auto">
							<img
								src={profile}
								alt="profile"
								id="profile-image"
								className="w-100 float-end mt-5 py-5 rounded-circle"
							/>
						</div>
						<div
							className="
							col-10 col-sm-8 col-lg-7 col-xl-6
							m-auto
							text-center text-md-start
						"
						>
							<p className={`${styles.profileText1} fw-bold mb-0`}>
								Hi, my name is
							</p>
							<p className={`${styles.profileText2} fw-bold mb-0`}>
								Anne Sullivan
							</p>
							<p className={`${styles.profileText3} fw-bold mb-0`}>
								I build things for the web
							</p>
							<Link
								to="/contact_us"
								className="btn text-white px-4 mt-2 rounded-pill"
								style={{ backgroundColor: "#f47522" }}
							>
								Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}

export default Home
