import { Link } from 'react-router-dom'
import styles from "./App.module.css"
import Button from "./components/Button"

function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          backgroundColor: "yellow",
          justifyContent: "space-between",
        }}
      >
        <a href="#" className={styles.link}>
          Gadgetstore.id
        </a>

        <div className={styles.link}>
          <Link to="/menu" className={styles.link}>
            Menu
          </Link>
          <a href="/order" className={styles.link}>
            Order
          </a>
          <a href="/aboutus" className={styles.link}>
            About Us
          </a>
        </div>
      </nav>
      <h1
        className="text-2xl hover:font-bold 
        hover:cursor-pointer active:underline"
      >
        DIJUAL HAPE MURAH
      </h1>
      <Button className="bg-blue-400 text-white hover:bg-blue-500">
        Button 1
      </Button>
      <Button className="bg-red-400 text-white hover:bg-red-500">
        Button 2
      </Button>
    </>
  )
}

export default App
