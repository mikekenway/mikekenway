import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  details: string;
}

export const ContactFormEmail = ({
  firstName,
  lastName,
  email,
  phone,
  details,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={headerSection}>
            <Heading style={h1}>New Contact Form Submission</Heading>
            <Text style={subtitle}>
              You&apos;ve received a new inquiry from your website
            </Text>
          </Section>

          {/* Contact Information Card */}
          <Section style={cardSection}>
            <Heading style={cardTitle}>Contact Information</Heading>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Name</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>
                  {firstName} {lastName}
                </Text>
              </Column>
            </Row>

            <Hr style={divider} />

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Email</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>

            {phone && (
              <>
                <Hr style={divider} />
                <Row style={infoRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>Phone</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>{phone}</Text>
                  </Column>
                </Row>
              </>
            )}
          </Section>

          {/* Project Details Card */}
          <Section style={cardSection}>
            <Heading style={cardTitle}>Project Details</Heading>
            <Section style={detailsSection}>
              <Text style={detailsText}>{details}</Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footerSection}>
            <Hr style={footerDivider} />
            <Text style={footerText}>
              This message was sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#000000',
  fontFamily:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: '20px 0',
  minHeight: '100vh',
};

const container = {
  margin: '0 auto',
  padding: '0 20px',
  maxWidth: '600px',
};

const headerSection = {
  textAlign: 'center' as const,
  padding: '40px 0 32px',
  borderBottom: '1px solid #262626',
  marginBottom: '32px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 8px',
  letterSpacing: '-0.025em',
};

const subtitle = {
  color: '#a1a1aa',
  fontSize: '16px',
  margin: '0',
  fontWeight: '400',
};

const cardSection = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
  border: '1px solid #262626',
  padding: '24px',
  marginBottom: '24px',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
};

const cardTitle = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 20px',
  letterSpacing: '-0.025em',
};

const infoRow = {
  marginBottom: '16px',
};

const labelColumn = {
  width: '120px',
  verticalAlign: 'top' as const,
};

const valueColumn = {
  verticalAlign: 'top' as const,
};

const label = {
  color: '#71717a',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
};

const value = {
  color: '#ffffff',
  fontSize: '16px',
  margin: '0',
  fontWeight: '400',
  lineHeight: '1.5',
};

const divider = {
  border: 'none',
  borderTop: '1px solid #262626',
  margin: '16px 0',
};

const detailsSection = {
  backgroundColor: '#000000',
  borderRadius: '8px',
  border: '1px solid #262626',
  padding: '20px',
  marginTop: '16px',
};

const detailsText = {
  color: '#e4e4e7',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
  fontFamily:
    'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
};

const footerSection = {
  textAlign: 'center' as const,
  padding: '32px 0 20px',
};

const footerDivider = {
  border: 'none',
  borderTop: '1px solid #262626',
  margin: '0 0 20px',
};

const footerText = {
  color: '#71717a',
  fontSize: '14px',
  margin: '0',
  fontStyle: 'italic',
};

export default ContactFormEmail;
