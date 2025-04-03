import "./JournalItem.css";

function JournalItem() {
  const title = "Подготовка к обновлению курсов";
  const date = new Date();
  const text = "Горные походы открывают удивительные природные ландшафты";

  return (
    <div className="journal-item">
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__date">
          {JSON.stringify(date.toString())}
        </div>
        <div className="journal-item__text">{text}</div>
      </h2>
    </div>
  );
}

export default JournalItem;
