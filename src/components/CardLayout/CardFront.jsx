import classes from './CardFront.module.css'

export default function CardFront(props) {
  return (
    <div className={classes.bg}>
      <div className={classes.padding}>
        <div className={classes["ellipse-orange"]}></div>
        <div
          className={`${classes["ellipse-pink"]} ${classes["ellipse-pink1"]}`}
        ></div>
        <div
          className={`${classes["ellipse-pink"]} ${classes["ellipse-pink2"]}`}
        ></div>
        <div className={classes["ellipse-blue"]}></div>
        <div
          className={`${classes["ellipse-violet"]} ${classes["ellipse-vio1"]}`}
        ></div>
        <div
          className={`${classes["ellipse-violet"]} ${classes["ellipse-vio2"]}`}
        ></div>

        <div className={classes.top}>
          <div className={classes["circle-full"]}></div>
          <div className={classes["circle-hollow"]}></div>
        </div>
        <div className={classes.bottom}>
          <p className={classes.acc}>{props.accNo}</p>
          <p className={classes.details}>{props.name}</p>
          <p className={classes.details}>{ `${props.validMonth} / ${props.validYear}`}</p>
        </div>
      </div>
      <div className={classes.shadow}></div>
    </div>
  )
}