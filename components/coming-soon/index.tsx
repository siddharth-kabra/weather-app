import { FaCloudBolt } from "react-icons/fa6";

const ComingSoonComponent = () => (
  <div className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center">
    <FaCloudBolt className="text-[90px] text-blue-700 mb-5 animate-pulse" />
    <h1 className="text-5xl text-blue-700 font-bold mb-8 animate-pulse">
      Coming Soon...
    </h1>
    <p className="text-blue-700 text-lg mb-8">
      We're working hard to bring you something amazing. Stay tuned!
    </p>
  </div>
);

export default ComingSoonComponent;
