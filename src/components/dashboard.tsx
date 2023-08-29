import { dashboard, h1, h2, header } from "./dashboard.css"
import { followerData, metricData } from "src/data"
import { fullWidth, grid, stack } from "src/styles/layout.css"

import { ClientSideOnly } from "./client-side-only"
import { MetricCard } from "./metric-card"
import { SocialFollowersCard } from "./social-followers-card"
import { ThemeToggle } from "./theme-toggle"
import { formatNumber } from "src/number-format"
import { useId } from "@react-aria/utils"

export function Dashboard() {
  const totalFollowers = followerData
    .map((brand) => brand.value)
    .reduce((acc, cur) => acc + cur)
  const overviewHeadingId = useId()

  return (
    <main className={dashboard}>
      <header className={header}>
        <div>
          <h1 className={h1}>Social Media Dashboard</h1>
          <p>Total Followers: {totalFollowers.toLocaleString()}</p>
        </div>
        <ClientSideOnly>
          <ThemeToggle />
        </ClientSideOnly>
      </header>
      <div className={grid}>
        {followerData.map((f) => (
          <SocialFollowersCard
            key={f.brand}
            brand={f.brand}
            username={f.username}
            value={f.value}
            change={f.change}
            metric={f.metric}
            period={f.period}
          />
        ))}
      </div>
      <section
        className={stack({ size: "small" })}
        aria-labelledby={overviewHeadingId}
      >
        <h2 id={overviewHeadingId} className={h2}>
          Overview - Today
        </h2>
        <div className={grid}>
          {metricData.map((m) => (
            <MetricCard
              key={`${m.brand}-${m.metric}`}
              metric={m.metric}
              brand={m.brand}
              value={m.value}
              changePercent={m.changePercent}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
