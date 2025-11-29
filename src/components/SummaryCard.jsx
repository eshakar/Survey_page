import "../styles/cards.scss";

export default function SummaryCard({ title, value, description }) {
  return (
    <div className="summary-card">
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{description}</p>
    </div>
  );
}
