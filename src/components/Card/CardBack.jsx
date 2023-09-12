import classes from './CardBack.module.css'

export default function CardBack(props) {
  return (
    <div className={classes.bg}>
      <div className={classes.swipe}></div>
      <div className={classes["cvv-area"]}>
        <p className={classes["cvv-text"]}>{props.cvv}</p>
      </div>
      <div className={[classes["line-area"]]}>
        <div className={classes["row-1"]}>
          <div className={classes.l1}></div>
          <div className={classes.l2}></div>
          <div className={classes.l3}></div>
          <div className={classes.l4}></div>
        </div>
        <div className={classes["row-2"]}>
          <div className={classes.l5}></div>
          <div className={classes.l6}></div>
          <div className={classes.l7}></div>
          <div className={classes.l8}></div>
        </div>
        <div className={`${classes["row-1"]} ${classes.reverse}`}>
          <div className={classes.l1}></div>
          <div className={classes.l2}></div>
          <div className={classes.l3}></div>
          <div className={classes.l4}></div>
        </div>
      </div>
    </div>
  )
}