import * as styles from "./metric-card.css"

import { useCallback, useRef } from "react"

import { Brand } from "src/types"
import { Chevron } from "./chevron"
import Link from "next/link"
import { Logo } from "src/components/logo"
import { formatNumber } from "src/number-format"
import { screenReaderOnly } from "src/styles/accessibility.css"
import { useId } from "@react-aria/utils"

type Props = {
  metric: string
  brand: Brand
  value: number
  changePercent: number
}
export function MetricCard({
  metric,
  brand,
  value,
  changePercent,
}: Props): JSX.Element {
  const headingId = useId()
  const changeDirection = changePercent >= 0 ? "up" : "down"

  const linkRef = useRef<HTMLAnchorElement>(null)

  const clickLink = useCallback(() => {
    linkRef.current?.click()
  }, [])

  return (
    <article
      aria-labelledby={headingId}
      className={styles.card}
      onClick={clickLink}
    >
      <h3 id={headingId} className={styles.metric}>
        <Link href="/">
          <a ref={linkRef}>
            <span>{metric}</span>
            <span className={screenReaderOnly}> {brand}</span>
          </a>
        </Link>
      </h3>
      <Logo brand={brand} aria-hidden />
      <p className={styles.value}>{formatNumber(value)}</p>
      <p className={styles.change({ direction: changeDirection })}>
        <span className={screenReaderOnly}>{changeDirection}</span>
        <Chevron direction={changeDirection} aria-hidden />
        <span>{Math.abs(changePercent)}%</span>
      </p>
    </article>
  )
}
