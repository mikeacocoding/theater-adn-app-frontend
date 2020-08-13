import React from 'react';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import styles from './back-button.module.css';

const BackButton = ({ url, text }) => (
  <Button className={styles.btnBack} size='large' variant='outlined' color='primary'>
    <Link href={url}>{text ? text : 'Volver'}</Link>
  </Button>
);

export default BackButton;