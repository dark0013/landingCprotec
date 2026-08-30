import styles from './Brand.module.css'

const sources = {
  color: '/assets/brand/logo-horizontal-color.png',
  white: '/assets/brand/logo-horizontal-white.png',
  stacked: '/assets/brand/logo-vertical-color.png',
  stackedWhite: '/assets/brand/logo-vertical-white.png',
} as const

type BrandProps = {
  variant?: 'color' | 'white'
  size?: 'nav' | 'hero' | 'footer' | 'stacked'
}

export function Brand({ variant = 'color', size = 'nav' }: BrandProps) {
  const stacked = size === 'stacked'
  const src = stacked
    ? variant === 'white' ? sources.stackedWhite : sources.stacked
    : variant === 'white' ? sources.white : sources.color

  return (
    <span className={styles.brand}>
      <img
        className={`${styles.image} ${size === 'nav' ? '' : styles[size]}`}
        src={src}
        alt="CPROTEC"
      />
    </span>
  )
}
