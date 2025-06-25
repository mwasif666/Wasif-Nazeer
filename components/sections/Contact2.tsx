"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact2() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Form Data:", data);

    try {
      const response = await fetch(
        "https://next.innovationpixel.com/public/save_contact_form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Thanks for reaching out!",
          icon: "success",
        });
        setData({ name: "", phone: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section
      id="contact"
      className="section-contact-2 position-relative pb-60 overflow-hidden"
    >
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 pb-5 pb-lg-0">
            <div className="position-relative">
              <div className="position-relative z-2 mt-5">
                <h3 className="text-primary-2 mb-3">Let’s connect</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        onChange={handleChange}
                        value={data.name}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={data.phone}
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="email"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={data.email}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-3 border border-1 rounded-3"
                        id="message"
                        name="message"
                        placeholder="Message"
                        onChange={handleChange}
                        value={data.message}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary-2 rounded-2"
                      >
                        Send Message <i className="ri-arrow-right-up-line" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column ps-lg-8">
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                <i className="ri-phone-fill text-primary-2 fs-26" />
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Phone Number</span>
                <h6 className="mb-0">+92 301 3769247</h6>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                <i className="ri-mail-fill text-primary-2 fs-26" />
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Email</span>
                <h6 className="mb-0">info@innovationpixel.com</h6>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                <i className="ri-map-2-fill text-primary-2 fs-26" />
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Address</span>
                <h6 className="mb-0">
                  Plot 36F, Street 6, Block2 P.E.C.H.S Jamshaid, Town, Karachi,
                  Pakistan
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
