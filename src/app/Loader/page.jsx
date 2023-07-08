import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-screen spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}
