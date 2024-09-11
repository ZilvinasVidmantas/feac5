import styles from './styles.module.scss';

export function TextField({
  value,
  onChange,
  error,
  type,
  name,
  label,
}) {

  return (
    <div className={styles.fromGroup}>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type ?? 'text'}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      {error && <small>{error}</small>}
    </div>
  )
}