// emails/Newsletter.tsx
import { Html } from "@react-email/html";
import { PortableText } from "next-sanity";

const Newsletter = ({ subject, content, unsubscribeUrl }) => (
  <Html lang="en">
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>{subject}</h1>

      <PortableText
        value={content}
        components={{
          block: {
            h1: ({ children }) => (
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: "20px 0 10px",
                }}
              >
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "16px 0 8px",
                }}
              >
                {children}
              </h2>
            ),
            normal: ({ children }) => (
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  margin: "0 0 12px",
                }}
              >
                {children}
              </p>
            ),
          },
          marks: {
            strong: ({ children }) => (
              <strong style={{ fontWeight: "bold" }}>{children}</strong>
            ),
            em: ({ children }) => (
              <em style={{ fontStyle: "italic" }}>{children}</em>
            ),
            link: ({ value, children }) => (
              <a
                href={value?.href}
                style={{ color: "#1a73e8", textDecoration: "underline" }}
              >
                {children}
              </a>
            ),
          },
        }}
      />

      <hr
        style={{
          margin: "24px 0",
          border: "none",
          borderTop: "1px solid #ddd",
        }}
      />

      <p style={{ fontSize: "12px", color: "#666" }}>
        You are receiving this email because you subscribed to our newsletter.
        <br />
        <a href={unsubscribeUrl} style={{ color: "#1a73e8" }}>
          Unsubscribe
        </a>
      </p>
    </div>
  </Html>
);

export default Newsletter;
