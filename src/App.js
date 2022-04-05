
function App() {
  return (
    <div className="App">
<header className="site-header sticky-top py-1">
  <nav className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
    </a>
    <a className="py-2 d-none d-md-inline-block navbar-link" href="#">Home</a>
    <a className="py-2 d-none d-md-inline-block navbar-link" href="#about-div">About</a>
    <a className="py-2 d-none d-md-inline-block navbar-link" href="#contact-div">Contact Us</a>
  </nav>
</header>

<main>
  <div className="main-div position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5 top-text-div">
      <h1 className="display-4 fw-normal main-head">Soft & Durable</h1>
      <p className="lead main-info fw-normal">All kinds of Slipper and Flip-Flops available.</p>
      <p className="lead main-info fw-normal"> For Men, Women & Kids .</p>
    </div>
    <a className="btn btn-outline-secondary" href="#contact-div">Get in Touch</a>
    <div className="top-slipper"><img className="slipper-right" src="slipper.png" alt="slipper"/></div>
    <div className="top-slipper-2"><img src="slipper3.png" className="slipper-left" alt="slipper3"/></div>
  </div>

  {/* <!-- About --> */}
  <div id="about-div" className="main-div position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5 top-text-div">
      <h1 className="display-4 fw-normal main-head">About</h1>
      <p className="lead main-info fw-normal">We at S&D pledge to deliver the best quality of footwear you'll ever Need!</p>
      <p className="lead main-info fw-normal">We sell footwear for everyone: Men , Women and the Lovely Kids</p>
      <p className="lead main-info fw-normal">Feel free to contact us for any Buisiness or Product related queries</p>
      <p className="lead main-info fw-normal">We are open for Buisines Collaborations</p>

 
    </div>
    <div className="about-slipper"><img src="slippers8.png"  alt="slippers8"/></div>
  </div>
  {/* <!-- Contact --> */}
  <div id="contact-div" className="main-div position-relative overflow-hidden p-3 -md-3 text-center bg-light">
    <div className="col-md-5  mx-auto top-text-div">
      <div className="contact-slipper"><img src="slipper5.png" alt="slipper5"/></div>
      <h1 className="display-4 fw-normal main-head">Contact Us</h1>
      <br/>
      <p className="lead main-info fw-normal">Business E-mail: <a className="email" href="syed.zaid.5454@gmail.com">syed.zaid.5454@gmail.com</a> </p>
      <p className="lead main-info fw-normal">Shop Location: <b>Buzurgdoar, Samastipur</b></p>
        <p className="lead main-info fw-normal">Shop Contact: +91 7909073391</p>
        <p className="lead main-info fw-normal">Founder: <b>Syed Zaid Hussain</b></p>
        <p className="lead main-info fw-normal">Location: Abul Fazal Enclave-1 , South Delhi </p>
        <p className="lead main-info fw-normal">Contact: +91 9507541483 </p>
      <p className="lead main-info fw-normal">We are expecting your call !</p>
      <br/>
      <br/>
    </div>

  </div>
  
</main>
<footer>
  <div className="footer-div">
    <br/>
   <center><p className="footer-para">Developed by <a className="footer-link" href="http://shahanone.wordpress.com/">Shahan.One</a></p></center> 
  <br/>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
      
    </div>
  );
}

export default App;
