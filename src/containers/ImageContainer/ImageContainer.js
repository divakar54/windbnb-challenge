import React from 'react'
import styles from './ImageContainer.module.css'

export const ImageContainer = (props) => {
  return (
      <>
        <div className={styles.image}>{props.children}</div>
      </>
  )
}
