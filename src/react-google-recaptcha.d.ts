declare module 'react-google-recaptcha' {
  interface ReCAPTCHAProps {
    sitekey: string;
    onChange: (value: string | null) => void;
  }

  export default function ReCAPTCHA(props: ReCAPTCHAProps): JSX.Element;
} 