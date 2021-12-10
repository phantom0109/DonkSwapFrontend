import "./styles.css";
import EmbedCasino from "./embedCasino";

export default function Casino() {
  return (
    <div className="vid-container">
      <EmbedCasino embedId="h-vkM3ONxTA" />
    </div>

    <div className="vid-container">
      <EmbedCasino embedId="GaUw4aCw3QU" />
    </div>

    <div className="vid-container">
      <EmbedCasino embedId="nam7L4Z-hUc" />
    </div>
  );
}
