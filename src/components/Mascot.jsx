export default function Mascot({ width = 80, height = 80, className = "" }) {
  return (
    <img
      src="/english-pocket-lab.png"
      alt="English Pocket Lab mascot"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
