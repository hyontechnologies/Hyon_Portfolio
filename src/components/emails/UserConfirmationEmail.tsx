import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface UserConfirmationEmailProps {
  name: string;
}

export const UserConfirmationEmail = ({ 
  name 
}: UserConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>We received your request to book a call with Hyon Technologies</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Hyon Technologies</Heading>
          <Section style={content}>
            <Text style={greeting}>Hi {name},</Text>
            <Text style={paragraph}>
              Thank you for requesting to book a call with us. We have successfully received your details and are thrilled at the opportunity to speak with you.
            </Text>
            <Text style={paragraph}>
              One of our team members is reviewing your request and will reach out shortly to coordinate a time that works best for you. 
            </Text>
            <Hr style={hr} />
            <Text style={signOff}>
              Best regards,<br />
              <strong>The Hyon Team</strong>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles for React Email Elements
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '40px auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  maxWidth: '580px',
};

const heading = {
  color: '#000000',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
  letterSpacing: '-0.5px',
};

const content = {
  padding: '0 40px',
};

const greeting = {
  color: '#333333',
  fontSize: '18px',
  lineHeight: '26px',
};

const paragraph = {
  color: '#555555',
  fontSize: '16px',
  lineHeight: '26px',
  marginBottom: '20px',
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '30px 0',
};

const signOff = {
  color: '#555555',
  fontSize: '16px',
  lineHeight: '24px',
};
