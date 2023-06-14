// styles
import { useState } from 'react'
import styles from './Summary.module.scss'

import data from '../../data/db.json'

type Item = {
  icon: string
  category: string
  score: number
  color: string
}

const Summary = () => {
  // fetch data from API using useEffect
  const [items] = useState<Item[]>(data)

  return (
    <section className={styles.summary}>
      <h3>Summary</h3>
      {items &&
        items.map((item, index: number) => (
          <ul key={index}>
            <li
              style={{
                color: item.color,
                backgroundColor: `${item.color}10`,
              }}
            >
              <h4>
                <img src={item.icon} />
                <span>{item.category}</span>
              </h4>
              <p>
                {item.score}
                <span> / 100</span>
              </p>
            </li>
          </ul>
        ))}
      <button>Continue</button>
    </section>
  )
}
export default Summary
