import ContactForm from "../components/basic/ContactForm";

const ContactUs = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="alert alert-primary">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </section>

            <ContactForm />
        </>
    );
};

export default ContactUs;