import "../css/Footer.css"
export default function Footer() {
  return (
    <footer>
        <section className="main">
        <div className="main-container">

        <li className="img-footer">
          <img
            src={require("../images/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        </div>
        <div className="main-container">
        
            <p>101 Wayoutthere Lane,</p>
            <p>Chicago Illinois</p>

            <p>(301)-555-1212</p>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>

      </div>
      </section>
    </footer>
  );
}
