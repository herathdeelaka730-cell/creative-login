export function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6.75h16v10.5H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m4.6 7.4 6.25 5.05a1.8 1.8 0 0 0 2.3 0L19.4 7.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LockIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 10V7.7a3.5 3.5 0 0 1 7 0V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 14v2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function EyeIcon({ open = false, size = 21 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.8 12s3.3-5 9.2-5 9.2 5 9.2 5-3.3 5-9.2 5-9.2-5-9.2-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      {!open && <path d="m4.2 4.2 15.6 15.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />}
    </svg>
  );
}

export function CheckIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.02v2.53h3.24c1.9-1.75 2.98-4.33 2.98-7.39Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.63-2.38l-3.24-2.53c-.9.6-2.05.96-3.39.96-2.61 0-4.82-1.77-5.61-4.14H3.04v2.61A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.39 13.91A6 6 0 0 1 6.07 12c0-.66.11-1.3.32-1.91V7.48H3.04A10 10 0 0 0 2 12c0 1.61.38 3.14 1.04 4.52l3.35-2.61Z" />
      <path fill="#EA4335" d="M12 5.95c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.96 5.48l3.35 2.61C7.18 7.72 9.39 5.95 12 5.95Z" />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.54c-.03-2.03 1.66-3.02 1.74-3.07a3.75 3.75 0 0 0-2.95-1.6c-1.24-.13-2.45.74-3.08.74-.64 0-1.6-.73-2.65-.71a3.91 3.91 0 0 0-3.3 2c-1.43 2.48-.36 6.13 1 8.14.68.97 1.47 2.05 2.52 2.01 1.02-.04 1.4-.65 2.62-.65s1.57.65 2.63.62c1.1-.02 1.78-.97 2.43-1.95a8.14 8.14 0 0 0 1.11-2.26 3.51 3.51 0 0 1-2.07-3.27ZM15.03 6.56a3.57 3.57 0 0 0 .82-2.56 3.64 3.64 0 0 0-2.35 1.22 3.4 3.4 0 0 0-.85 2.46 3 3 0 0 0 2.38-1.12Z" />
    </svg>
  );
}

export function SparkleIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.8c.7 5.5 3 7.8 8.5 8.5-5.5.7-7.8 3-8.5 8.5-.7-5.5-3-7.8-8.5-8.5C9 10.6 11.3 8.3 12 2.8Z" fill="currentColor" />
    </svg>
  );
}
