import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Img,
  Section,
  Row,
  Column,
  Preview,
  Font,
} from "@react-email/components";
import * as React from "react";

interface RivalsWelcomeEmailProps {
  fullName: string;
  interest: string;
}

// 1. SET YOUR BASE URL
// We now exclusively use the CDN for both local dev and production.
const baseUrl = "https://cdn.jsdelivr.net/gh/gochuicod/r1vals@staging/public";

export const RivalsWelcomeEmail = ({
  fullName,
  interest,
}: RivalsWelcomeEmailProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>
      <Preview>Welcome to the R1VALS Protocol</Preview>
      <Body style={main}>
        <Container style={container}>
          
          {/* HEADER IMAGE */}
          <Section>
            <Link href="https://r1vals.com" target="_blank">
              <Img
                src={`${baseUrl}/email/rivals-header-full.png`}
                width="100%"
                alt="R1VALS - More Than Football"
                style={headerImage}
              />
            </Link>
          </Section>

          {/* MAIN CONTENT */}
          <Section style={contentSection}>
            <Text style={greeting}>Hi {fullName},</Text>

            <Text style={paragraph}>
              Thank you for reaching out regarding the R1VALS Protocol. We have
              successfully received your submission.
            </Text>

            <Text style={paragraph}>
              Whether you are looking to dominate the pitch as a player, lead a
              powerhouse squad, or partner with us as a sponsor, we are excited
              to have you on our radar. Our team is currently reviewing your
              details to ensure the best fit for Asia's largest winner-take-all
              tournament.
            </Text>

            <Text style={paragraph}>
              What happens next? Our team will reach out to you shortly via
              email or phone with more information and the specific next steps
              for your application.
            </Text>

            <Text style={paragraph}>
              Have questions in the meantime? If you have additional information
              to share or questions about the protocol, please don't hesitate to
              reply directly to this email. We're here to help.
            </Text>

            <Text style={stayTuned}>Stay tuned—the hunt is on.</Text>

            <Text style={signature}>
              Best,
              <br />
              {/* R1VALS Team Signature with Logo */}
              <Img 
                 src={`${baseUrl}/email/rivals-logo.png`}
                 width="107" 
                 height="34"
                 alt="R1VALS"
                 style={{ display: 'inline-block', marginTop: '10px' }}
              /> 
              <span style={{ color: "#FFFFFF", fontSize: "24px", marginLeft: "8px", verticalAlign: "middle" }}>Team</span>
            </Text>
          </Section>

          {/* FOOTER SECTION */}
          <Section style={footerSection}>
            <Row>
                {/* LEFT COLUMN: Contact Details */}
              <Column style={{ width: "50%", verticalAlign: "bottom" }}>
                
                {/* Website */}
                <Row style={contactRow}>
                   <Column style={{ width: '30px', verticalAlign: 'middle' }}>
                     <Img src={`${baseUrl}/email/web-icon.png`} width="21" height="21" alt="Web" style={{ display: 'block' }} />
                   </Column>
                   <Column style={{ verticalAlign: 'middle' }}>
                     <Link href="https://r1vals.com" style={contactText}>r1vals.com</Link>
                   </Column>
                </Row>

                {/* Instagram */}
                <Row style={contactRow}>
                   <Column style={{ width: '30px', verticalAlign: 'middle' }}>
                     <Img src={`${baseUrl}/email/ig-icon.png`} width="21" height="21" alt="IG" style={{ display: 'block' }} />
                   </Column>
                   <Column style={{ verticalAlign: 'middle' }}>
                     <Link href="https://instagram.com/r1vals.sports" style={contactText}>@r1vals.sports</Link>
                   </Column>
                </Row>

                {/* Email */}
                <Row style={contactRow}>
                   <Column style={{ width: '30px', verticalAlign: 'middle' }}>
                     <Img src={`${baseUrl}/email/email-icon.png`} width="21" height="21" alt="Mail" style={{ display: 'block' }} />
                   </Column>
                   <Column style={{ verticalAlign: 'middle' }}>
                     <Link href="mailto:info@r1vals.com" style={contactText}>info@r1vals.com</Link>
                   </Column>
                </Row>

                {/* Phone */}
                <Row style={contactRow}>
                   <Column style={{ width: '30px', verticalAlign: 'middle' }}>
                     <Img src={`${baseUrl}/email/phone-icon.png`} width="21" height="21" alt="Phone" style={{ display: 'block' }} />
                   </Column>
                   <Column style={{ verticalAlign: 'middle' }}>
                     <Link href="tel:+639175074014" style={contactText}>+63 917 507 4014</Link>
                   </Column>
                </Row>

              </Column>

              {/* RIGHT COLUMN: Player Collage */}
              <Column style={{ width: "50%", verticalAlign: "bottom" }}>
                <Img
                  src={`${baseUrl}/email/players-collage.png`}
                  width="100%"
                  style={{ display: "block", maxWidth: '100%' }}
                  alt="Players"
                />
              </Column>
            </Row>

            {/* LEGAL / COPYRIGHT ROW */}
            <Row style={legalRow}>
              <Column>
                <Text style={legalText}>© 2026 R1VALS</Text>
              </Column>
              <Column>
                <Link href="https://www.r1vals.com/en/privacy-policy" style={{ ...legalText, fontWeight: 700 }}>PRIVACY</Link>
              </Column>
              <Column>
                 <Link href="https://www.r1vals.com/en/terms-of-service" style={{ ...legalText, fontWeight: 700 }}>TERMS</Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default RivalsWelcomeEmail;

const main = {
  backgroundColor: "#1E1E1E",
  fontFamily: "Inter, Helvetica, Arial, sans-serif",
};


const container = {
  margin: "0 auto",
  padding: "0",
  width: "600px", // Standard email width (Figma was 800px, scaled down for inbox safety)
  maxWidth: "100%",
  backgroundColor: "#1E1E1E",
};

const headerImage = {
  display: "block" as const,
  maxWidth: "100%",
};

const contentSection = {
  padding: "40px 40px 20px 40px",
  color: "#FFFFFF",
};

const greeting = {
  fontSize: "20px",
  lineHeight: "30px",
  fontWeight: 500,
  color: "#FFFFFF",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "20px", 
  lineHeight: "30px",
  fontWeight: 500,
  color: "#FFFFFF",
  textAlign: "justify" as const,
  marginBottom: "25px",
  letterSpacing: "0.04em",
};

const stayTuned = {
  fontSize: "20px",
  fontWeight: "bold", // Emphasized
  color: "#FFFFFF",
  marginTop: "30px",
  marginBottom: "30px",
  letterSpacing: "0.04em",
};

const signature = {
  fontSize: "20px",
  color: "#FFFFFF",
  lineHeight: "30px",
};

const footerSection = {
  padding: "0 40px 40px 40px",
  borderTop: "1px solid #1E1E1E", // Subtle separator matching gradients
};

const contactRow = {
  marginBottom: "12px",
};

const contactText = {
  fontFamily: "'Inter', Helvetica, Arial, sans-serif", 
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#FFFFFF", 
  textDecoration: "none",
  letterSpacing: "0.04em",
};

const legalRow = {
  marginTop: "40px",
  borderTop: "1px solid #333",
  paddingTop: "20px",
  textAlign: "center" as const,
};

const legalText = {
  fontFamily: "Orbitron, sans-serif",
  fontSize: "12px", // Scaled down for mobile safety
  lineHeight: "20px",
  color: "#FFFFFF",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
  margin: "0 10px",
};