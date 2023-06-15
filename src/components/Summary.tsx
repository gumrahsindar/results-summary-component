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
      <ul>
        {items &&
          items.map((item, index: number) => (
            <li
              key={index}
              style={{
                color: item.color,
                backgroundColor: `${item.color}10`,
              }}
            >
              <h4>
                <img src={item.icon} alt={item.category} />
                <span>{item.category}</span>
              </h4>
              <p>
                {item.score}
                <span> / 100</span>
              </p>
            </li>
          ))}
      </ul>
      <button>Continue</button>
    </section>
  )
}
export default Summary
