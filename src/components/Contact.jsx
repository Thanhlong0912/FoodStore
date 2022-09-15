import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container py-5 my-5">
          <div className="col-md-4">
            <h1 className="text-primary fw-bold mb-4">Contact</h1>
            <p className="lead mb-4">
                <img
                src="/assets/contact.png"
                alt="Contact Us"
                height="300px"
                width="300px"
                />
            </p>
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Đinh Thành Long"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="dtl@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                Example text area
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
