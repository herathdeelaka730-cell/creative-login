import { useEffect, useMemo, useRef, useState } from 'react';
import GirlMascot from './components/GirlMascot';
import {
  AppleIcon,
  ArrowIcon,
  EyeIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
  SparkleIcon,
} from './components/Icons';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [peekPassword, setPeekPassword] = useState(false);
  const [submitState, setSubmitState] = useState('idle');
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState('');
  const noticeTimer = useRef(null);

  const isEmailValid = emailPattern.test(email);
  const passwordActive = focusedField === 'password' && submitState === 'idle';

  useEffect(() => {
    if (!passwordActive || !password || showPassword) {
      setPeekPassword(showPassword && passwordActive);
      return undefined;
    }

    setPeekPassword(false);
    const timer = window.setTimeout(() => setPeekPassword(true), 1050);
    return () => window.clearTimeout(timer);
  }, [password, passwordActive, showPassword]);

  useEffect(() => () => window.clearTimeout(noticeTimer.current), []);

  useEffect(() => {
    const updatePageVisibility = () => {
      document.documentElement.classList.toggle('page-is-hidden', document.hidden);
    };
    document.addEventListener('visibilitychange', updatePageVisibility);
    return () => document.removeEventListener('visibilitychange', updatePageVisibility);
  }, []);

  const mascotMode = useMemo(() => {
    if (submitState === 'success') return 'idle';
    if (submitState === 'submitting') return 'thinking';
    if (passwordActive) return showPassword || peekPassword ? 'peeking' : 'covering';
    if (focusedField === 'email') return 'thinking';
    return 'idle';
  }, [focusedField, passwordActive, peekPassword, showPassword, submitState]);

  const showNotice = (message) => {
    window.clearTimeout(noticeTimer.current);
    setNotice(message);
    noticeTimer.current = window.setTimeout(() => setNotice(''), 2600);
  };

  const validate = () => {
    const nextErrors = {};
    if (!email.trim()) nextErrors.email = 'Pop in your email so I know it’s you.';
    else if (!isEmailValid) nextErrors.email = 'That email needs one tiny finishing touch.';
    if (!password) nextErrors.password = 'Your secret word is still hiding.';
    else if (password.length < 6) nextErrors.password = 'Use at least 6 characters, sweet and safe.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitState !== 'idle' || !validate()) return;

    document.activeElement?.blur();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFocusedField(null);
    setSubmitState('submitting');
    window.setTimeout(() => setSubmitState('success'), 1150);
    window.setTimeout(() => {
      setSubmitState('idle');
      showNotice('Demo complete — welcome to your little daydream!');
    }, 3400);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (errors.email) setErrors((current) => ({ ...current, email: undefined }));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPeekPassword(false);
    if (errors.password) setErrors((current) => ({ ...current, password: undefined }));
  };

  const togglePassword = () => {
    setShowPassword((visible) => !visible);
    setPeekPassword(true);
  };

  return (
    <main className="app-shell">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />

      <div className="mobile-canvas">
        <div className="sky-decor" aria-hidden="true">
          <span className="cloud cloud-one"><i /><i /><i /></span>
          <span className="cloud cloud-two"><i /><i /><i /></span>
          <span className="star star-one">✦</span>
          <span className="star star-two">✧</span>
          <span className="star star-three">✦</span>
        </div>

        <header className="welcome-copy">
          <div className="eyebrow"><SparkleIcon size={14} /> your cozy little corner</div>
          <h1>Welcome back,<br /><span>sunshine!</span></h1>
          <p>A tiny hello, then you’re home.</p>
        </header>

        <GirlMascot
          mode={mascotMode}
          email={email}
          isEmailValid={isEmailValid}
          passwordActive={passwordActive}
          peeking={peekPassword || showPassword}
        />

        <section className={`login-card ${submitState === 'success' ? 'is-success' : ''}`}>
          <div className="card-shine" aria-hidden="true" />
          <form onSubmit={handleSubmit} noValidate>
            <div className={`field-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email">Email address</label>
              <div className={`input-wrap ${focusedField === 'email' ? 'is-focused' : ''} ${isEmailValid ? 'is-valid' : ''}`}>
                <span className="input-icon"><MailIcon /></span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="username"
                  placeholder="hello@daydream.com"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {isEmailValid && <span className="valid-dot" aria-label="Valid email">✓</span>}
              </div>
              {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
            </div>

            <div className={`field-group ${errors.password ? 'has-error' : ''}`}>
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <button type="button" className="text-link" onClick={() => showNotice('Password reset is ready to connect.')}>Forgot?</button>
              </div>
              <div className={`input-wrap ${focusedField === 'password' ? 'is-focused' : ''}`}>
                <span className="input-icon"><LockIcon /></span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Your secret word"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  className="visibility-toggle"
                  onClick={togglePassword}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
              {errors.password && <p className="field-error" id="password-error">{errors.password}</p>}
            </div>

            <button className="login-button" type="submit" disabled={submitState !== 'idle'}>
              <span className="button-glow" aria-hidden="true" />
              {submitState === 'submitting' ? (
                <span className="loading-hearts" aria-label="Signing in"><i>♥</i><i>♥</i><i>♥</i></span>
              ) : submitState === 'success' ? (
                <span className="success-label">You’re in! <span aria-hidden="true">♡</span></span>
              ) : (
                <span className="button-label">Let me in <ArrowIcon /></span>
              )}
            </button>
          </form>

          <div className="divider"><span>or float in with</span></div>

          <div className="social-row">
            <button type="button" className="social-button" onClick={() => showNotice('Google sign-in is ready to connect.')}>
              <GoogleIcon /> <span>Google</span>
            </button>
            <button type="button" className="social-button" onClick={() => showNotice('Apple sign-in is ready to connect.')}>
              <AppleIcon /> <span>Apple</span>
            </button>
          </div>

          <p className="signup-copy">New to the daydream? <button type="button" onClick={() => showNotice('Sign-up flow is ready for your next screen.')}>Create an account</button></p>
        </section>

        <div className="garden" aria-hidden="true">
          <span className="leaf leaf-one" />
          <span className="leaf leaf-two" />
          <span className="leaf leaf-three" />
          <span className="flower"><i /><b /></span>
        </div>

        <div className={`toast ${notice ? 'is-visible' : ''}`} role="status" aria-live="polite">{notice}</div>
        <div className="sr-only" aria-live="polite">
          {submitState === 'submitting' && 'Signing in.'}
          {submitState === 'success' && 'Success. Welcome back.'}
        </div>

        {submitState === 'success' && (
          <div className="celebration" aria-hidden="true">
            {[
              ['✦', '-132px', '-168px', '-48deg'],
              ['♥', '-88px', '-224px', '34deg'],
              ['✧', '24px', '-214px', '86deg'],
              ['●', '124px', '-154px', '150deg'],
              ['♥', '142px', '62px', '205deg'],
              ['✦', '54px', '173px', '255deg'],
              ['●', '-74px', '168px', '310deg'],
              ['✧', '-145px', '55px', '355deg'],
            ].map(([shape, x, y, rotation], index) => (
              <span
                key={`${shape}-${index}`}
                style={{ '--i': index, '--x': x, '--y': y, '--rotation': rotation }}
              >
                {shape}
              </span>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
