import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [myValue, setValue] = useState(0);

  return (
    <div className={styles.container}>
      <span>Current Value: { myValue }</span>
      <button onClick={() => setValue(myValue+1)}>+</button>
      <button onClick={() => setValue(myValue-1)}>-</button>
    </div>
  )
}
