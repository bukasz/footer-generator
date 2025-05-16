import { forwardRef } from "react";

const FooterPreview = forwardRef(
  ({ name, surname, position, telephone, emailAddress, more }, ref) => {
    return (
      <div ref={ref} style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <p style={{ margin: "15px 0", fontSize: "14px" }}>
          Serdecznie pozdrawiam / Best regards / mit freundlichen Grüßen,
        </p>
        {(name || surname || position) && (
          <div
            style={{
              height: "40px",
              fontSize: "13px",
              lineHeight: "15px",
              marginTop: "30px",
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/d/1oQ_11O2zFB0-PdFATqY69KkRkOXYtl0W"
              width="40"
              height="40"
              style={{ float: "left", marginRight: "5px" }}
            />
            <p
              style={{
                margin: "0",
                paddingTop: "5px",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              {name} {surname}
              <br />
            </p>
            <p style={{ margin: "0", color: "#8c8c8c" }}>{position}</p>
          </div>
        )}

        {telephone && (
          <div
            style={{
              height: "40px",
              fontSize: "13px",
              lineHeight: "15px",
              marginTop: "3px",
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/d/12tnBZ90fP6HTrKwmqcf8hr2GxCa9vt6I"
              width="40"
              height="40"
              style={{ float: "left", marginRight: "5px" }}
            />
            <a
              style={{
                display: "block",
                margin: "0",
                paddingTop: "12.5px",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#000",
              }}
              href={`tel:${telephone}`}
            >
              {telephone}
            </a>
          </div>
        )}

        {emailAddress && (
          <div
            style={{
              height: "40px",
              fontSize: "13px",
              lineHeight: "15px",
              marginTop: "3px",
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/d/1ahkKJ1uF-YcCtsWWZOSIsJRmAS7b__Us"
              width="40"
              height="40"
              style={{ float: "left", marginRight: "5px" }}
            />
            <a
              style={{
                display: "block",
                margin: "0",
                paddingTop: "12.5px",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#000",
              }}
              href={`mailto:${emailAddress}`}
            >
              {emailAddress}
            </a>
          </div>
        )}

        {more && (
        <p style={{ margin: '20px 0 15px',fontSize: "13px", color: "#8c8c8c" }}>
          {more}
        </p>
        )}

        <div style={{ margin: "4px 0 0", overflow: "hidden" }}>
          <img
            src="https://lh3.googleusercontent.com/d/1pcY5QzKtEVbCVu4gGqfyAqGfU-q6HKgE"
            style={{
              display: "block",
              minWidth: "603px",
              width: "100%",
              height: "39px",
            }}
          />
          <div
            style={{
              color: "#fff",
              background: "#232427",
              fontFamily: "Inter, Tahoma, sans-serif",
              overflow: "hidden",
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/d/1IlGgHHbV8lIBoIKC5qstCAH6O0zaEWaU"
              style={{
                width: "auto",
                height: "34px",
                fontSize: "0",
                marginTop: "10px",
                paddingLeft: "25px",
              }}
            />
            <p
              style={{
                margin: "0",
                padding: "20px 0 0 25px",
                fontSize: "12px",
                lineHeight: "15px",
              }}
            >
              creativestyle Polska Sp. z. o.o.
              <br />
              ul. Zabłocie 25/L1, 30-701 Kraków, Poland
            </p>
            <a
              style={{
                display: "block",
                margin: "0",
                padding: "20px 0 20px 25px",
                color: "#fff",
                fontSize: "12px",
                lineHeight: "15px",
              }}
              href="https://creativestyle.pl"
            >
              creativestyle.pl
            </a>
            <p
              style={{
                margin: "0",
                padding: "0 0 25px 25px",
                fontSize: "12px",
                lineHeight: "15px",
              }}
            >
              KRS&nbsp;0000331561, Sąd&nbsp;Rejonowy&nbsp;dla&nbsp;Krakowa-
              <wbr />
              Śródmieścia, XI&nbsp;Wydział&nbsp;Gospodarczy&nbsp;KRS,
              <br />
              NIP&nbsp;PL6751416000,
              Kapitał&nbsp;zakładowy&nbsp;50&nbsp;000&nbsp;zł
              wpłacony&nbsp;w&nbsp;całości.
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default FooterPreview;
