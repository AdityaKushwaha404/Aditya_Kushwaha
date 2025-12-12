import React from "react";

export default function Custom500() {
  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <h1>500 — Server error</h1>
          <p>Something went wrong on the server.</p>
        </div>
      </body>
    </html>
  );
}
