import { Link } from 'react-router-dom'
import styles from "./App.module.css"
import Button from "./components/button"

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
        <Link to="#" className={styles.link}>
          Gadgetstore.id
        </Link>

        <div className={styles.link}>
          <Link to="/menu" className={styles.link}>
            Menu
          </Link>
          <Link to="/order" className={styles.link}>
            Order
          </Link>
          <Link to="/aboutus" className={styles.link}>
            About Us
          </Link>
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
