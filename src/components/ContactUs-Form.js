import React from 'react'

export default function ContactForm() {
    return (
        <div className="col-6 right">
            <div className="container">
                <form action="./review_message.html" id="form" className="form needs-validation" novalidate>
                    <h3>Contact Us</h3>
                    <div className="mb-3 mt-3 has-validation">
                        <label for="fullname" className="form-label">Full Name<span> *</span></label>
                        <input type="text" className="form-control" id="fullname" placeholder="Your Full Name Here..." required/>
                        <div className="invalid-feedback">Full name cannot be empty</div>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email Address<span> *</span></label>
                        <input type="email" className="form-control" id="email" placeholder="example@domain.com" required/>
                        <div className="invalid-feedback">Email address cannot be empty</div>
                    </div>
                    <div className="mb-3">
                        <label for="phone-number" className="form-label">Phone Number<span> *</span></label>
                        <input type="number" className="form-control" id="phone-number" placeholder="08573890xxxxx" required/>
                        <div className="invalid-feedback">Phone number cannot be empty</div>
                    </div>
                    <div className="mb-3">
                        <label for="nationality" className="form-label">Nationality</label>
                        <select id="nationality" className="form-select" required>
                            <option selected disabled value="">Selected</option>
                            <option value="Indonesian">Indonesian</option>
                            <option value="Indonesian">England</option>
                        </select>
                        <div className="invalid-feedback">Please select a valid Nationality</div>
                    </div>
                    <div className="mb-5">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" required></textarea>
                        <div className="invalid-feedback">Message is Empty</div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary" onclick="passValues()">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}