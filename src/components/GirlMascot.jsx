import { CheckIcon, MailIcon, SparkleIcon } from './Icons';

const assetBase = `${import.meta.env.BASE_URL}assets/`;
const images = {
  idle: { webp: `${assetBase}girl-idle.webp`, png: `${assetBase}girl-idle.png` },
  thinking: { webp: `${assetBase}girl-thinking.webp`, png: `${assetBase}girl-thinking.png` },
  covering: { webp: `${assetBase}girl-covering.webp`, png: `${assetBase}girl-covering.png` },
  peeking: { webp: `${assetBase}girl-peeking.webp`, png: `${assetBase}girl-peeking.png` },
};

function ThoughtBubble({ email, isValid }) {
  const stage = !email ? 'ready' : !email.includes('@') ? 'name' : isValid ? 'valid' : 'domain';
  const copy = {
    ready: 'Who are we saying hi to?',
    name: 'Cute start… keep going!',
    domain: 'Where does the @ lead?',
    valid: 'Found you — lovely!',
  }[stage];

  return (
    <div className={`thought-bubble thought-${stage}`} aria-hidden="true">
      <span className="thought-tail thought-tail-one" />
      <span className="thought-tail thought-tail-two" />
      <span className="thought-icon">
        {isValid ? <CheckIcon size={15} /> : <MailIcon size={16} />}
      </span>
      <span>{copy}</span>
      {isValid && <SparkleIcon size={13} />}
    </div>
  );
}

export default function GirlMascot({ mode, email, isEmailValid, passwordActive, peeking }) {
  return (
    <section className={`mascot mascot-${mode}`} aria-hidden="true">
      <div className="mascot-spark mascot-spark-one">✦</div>
      <div className="mascot-spark mascot-spark-two">✧</div>

      {mode === 'thinking' && <ThoughtBubble email={email} isValid={isEmailValid} />}

      {passwordActive && (
        <div className={`secret-note ${peeking ? 'is-peeking' : ''}`}>
          <span>{peeking ? 'just one tiny peek…' : 'your secret is safe!'}</span>
          <span className="secret-emoji">{peeking ? '👀' : '🙈'}</span>
        </div>
      )}

      <div className="character-stage">
        {Object.entries(images).map(([name, sources]) => (
          <picture key={name}>
            <source srcSet={sources.webp} type="image/webp" />
            <img
              className={`character-image character-${name} ${mode === name ? 'is-active' : ''}`}
              src={sources.png}
              alt=""
              draggable="false"
              decoding="async"
            />
          </picture>
        ))}
        <span className="character-shadow" />
      </div>
    </section>
  );
}
