function Bath(props) {
  return (
      <div className={"bathroom " + props.size + "-bath"}>
          <p>{props.size} Bath</p>
      </div>
  );
}
export default Bath;
