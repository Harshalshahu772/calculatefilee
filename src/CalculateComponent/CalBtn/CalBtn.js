import "./CalBtn.css";

const CalBtn = (props) => {
  const { textButn, onClickExp , id} = props;
  // console.log("id",id)
  return (
    <>
      <button className="Btn-class" onClick={() => onClickExp(textButn)} key={id}>
        {textButn}
      </button>
    </>
  );
};
export default CalBtn;
