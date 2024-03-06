import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface MyNewPageProps {}

export default function MyNewPage(props: MyNewPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyNewPage!</h1>
    </div>
  );
}
