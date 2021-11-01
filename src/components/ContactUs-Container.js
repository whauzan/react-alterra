import React from "react";
import SideImage from "./Side-Image";
import ContactForm from "./ContactUs-Form";

export default function ContactUsContainer() {
	return (
		<div className="row justify-content-between">
			<SideImage />
			<ContactForm />
		</div>
	)
}