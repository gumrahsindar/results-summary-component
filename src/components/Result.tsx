// styles
import styles from './Result.module.scss'

const Result = () => {
  return (
    <section className={styles.result}>
      <h2>Your Result</h2>
      <div className={styles.score}>
        <h3>
          <span>76</span> of 100
        </h3>
      </div>

      <h4>Great</h4>
      <p>Your performance exceed 65% of the people conducting the test here!</p>
    </section>
  )
}
export default Result
