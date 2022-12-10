function Home() {
  return (
    <div>
      <div
        className="popup d-flex flex-row align-items-center justify-content-center"
        style={{ backgroundColor: "blue", height: "75px" }}
      >
        <p style={{ color: "white", marginRight: "25px" }}>
          Data Science or Product Management Which career is right for you ?
        </p>

        <button
          type="button"
          className="btn btn-warm"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Talk to an Expert
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="d-flex flex-column align-items-center">
                <h6 className="modal-title" id="exampleModalLabel" style={{marginTop:"10px"}}>
                  Schedule a 1-on-1 consultation
                </h6>
                <br />
                <h4 style={{ color: "blue" }}>Request a Call Back</h4>
                <form>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      id="mobile"
                      aria-describedby="mobile"
                      placeholder="Enter Mobile Number"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Enter Your E-mail"
                    />
                  </div>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Program</option>
                    <option value="1">Data Science</option>
                    <option value="2">Product Management</option>
                  </select>
                   <br/>
                   <p style={{margin:"5px"}}>Note: You Will recieve a call between Mon-Fri From 10 am - 6 pm </p>
                   
                  <button type="submit" class="btn btn-warning" style={{margin:"15px", marginBottom:"25px"}}>
                    Call Me Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ border: "1px solid black" }}>
        <div className="d-flex flex-row">
          <div style={{ marginRight: "200px", marginLeft: "50px" }}>
            <img
              src="https://www.insaid.co/wp-content/uploads/2021/05/insaid-text-logo-2x-150x69.png"
              alt="logo"
            />
          </div>
          <nav className="navbar  d-flex flex-wrap justify-content-end ">
            <div style={{ marginRight: "30px" }}>
              <p className="navbar-brand" href="#">
                Data Science
              </p>

              <p className="navbar-brand">
                <p className="nav-link" href="#">
                  Product Management
                </p>
              </p>
              <p className="navbar-brand">
                <p className="nav-link" href="#">
                  For Corporate
                </p>
              </p>
              <p className="navbar-brand">
                <p className="nav-link" href="#">
                  About INSAID
                </p>
              </p>
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </div>
          </nav>
        </div>
      </div>

      <body className="d-flex flex-row container">
        <div className="heading" style={{ marginTop: "75px" }}>
          <p style={{ fontSize: "32px" }}>Get your Dream Job with</p>
          <h2>Top Programs</h2>
          <p style={{ marginTop: "40px", marginBottom: "40px" }}>
            Learn with India's leading online school for working professionals
          </p>
          <button
            type="button"
            className="btn btn-primary pl-5 pr-5"
            style={{ fontWeight: "bold" }}
          >
            Talk to an Expert
          </button>
        </div>

        <div
          className="card"
          style={{
            width: "18rem",
            marginLeft: "200px",
            marginTop: "40px",
            boxShadow: "10px 10px 10px lightblue",
          }}
        >
          <img
            className="card-img-top"
            src="https://imageio.forbes.com/specials-images/dam/imageserve/1080529720/960x0.jpg?format=jpg&width=960"
            alt="profile-pic"
            style={{ borderRadius: "50%", padding: "10px" }}
          />
          <div className="card-body d-flex flex-column  align-items-center">
            <h5 className="card-title">Super Modell</h5>
            <h3 style={{ color: "blue", fontWeight: "bold" }}> PHILIPS </h3>
            <p> PGPDSAI, 12 Months Program</p>
          </div>
        </div>
      </body>

      <div className="bottom" style={{ marginLeft: "30%", marginTop: "40px" }}>
        <p>
          Need{" "}
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>help</span>{" "}
          choosing the right program ?{" "}
          <button type="button" className="btn btn-primary">
            Take a Short Quiz
          </button>
        </p>
      </div>
    </div>
  );
}

export default Home;
