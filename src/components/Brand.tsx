type BrandProps = { light?: boolean }

export function Brand({ light = false }: BrandProps) {
  return (
    <span className={`brand ${light ? 'brand--light' : ''}`} aria-label="CPROTEC">
      <span className="brand__word">CPROTEC</span>
    </span>
  )
}
