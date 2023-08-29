import * as brandTheme from "src/styles/brand.css"
import * as styles from "./social-followers-card.css"

import { Brand } from "src/types"
import { Chevron } from "./chevron"
import Link from "next/link"
import { Logo } from "src/components/logo"
import { formatNumber } from "src/number-format"
import { screenReaderOnly } from "src/styles/accessibility.css"
import { useId } from "@react-aria/utils"

const brandThemes: Record<Brand, string> = {
  facebook: brandTheme.facebook,
  twitter: brandTheme.twitter,
  instagram: brandTheme.instagram,
  youtube: brandTheme.youtube,
}

type Props = {
  brand: Brand
  username: string
  value: number
  metric?: string
  change: number
  period?: string
}
export function SocialFollowersCard({
  brand,
  username,
  value,
  metric = "followers",
  change,
  period = "today",
}: Props): JSX.Element {
  const headingId = useId()

  const formattedValue = formatNumber(value)

  const changeDirection = change >= 0 ? "up" : "down"
  return (
    <article
      aria-labelledby={headingId}
      className={`${styles.card} ${brandThemes[brand]}`}
    >
      <header className={styles.header}>
        <h2 id={headingId} className={screenReaderOnly}>
          {brand}
        </h2>
        <Logo brand={brand} aria-hidden />
        <p>
          <Link href="/">
            <a className={styles.socialHandle}>{username}</a>
          </Link>
        </p>
      </header>
      <p className={styles.followers}>
        <span className={styles.value}>{formattedValue}</span>
        <span className={styles.metric}>{metric}</span>
      </p>
      <footer className={styles.footer({ direction: changeDirection })}>
        <span className={screenReaderOnly}>{changeDirection}</span>
        <Chevron direction={changeDirection} aria-hidden />
        {Math.abs(change)} {period}
      </footer>
    </article>
  )
}
