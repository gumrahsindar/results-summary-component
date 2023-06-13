// styles
import styles from '../styles/Result.module.scss'

const Result = () => {
  return (
    <div className={styles.result}>
      <p>Your Result</p>
      <h1>76</h1>
      <h3>of 100</h3>
      <h2>Great</h2>
      <p>Your performance exceed 65% of the people conducting the test here!</p>
    </div>
  )
}
export default Result
