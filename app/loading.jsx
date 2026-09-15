import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-primary">
      <ThreeDot
        variant="bounce"
        color="#bac3ba"
        size="medium"
        text="Loading ...."
        textColor=""
      />
    </div>
  );
};export default Loading
