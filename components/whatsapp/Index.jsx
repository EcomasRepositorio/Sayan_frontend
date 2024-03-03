import Link from 'next/link'

import styles from './Style.module.css'

const Whatsapp = () => {
  return (
    <div className={styles.container}>
      <Link href='https://api.whatsapp.com/send?phone=51978490739' target='_blank'>
        <img
          className={styles.boton}
          src='icons/whatsapp.png'
          alt=''/>
      </Link>
    </div>
  )
};

export default Whatsapp;