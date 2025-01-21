import React from "react";
import useCounterStore from "./store/useStore";

const Counter: React.FC = () => {
  const { count, increase, decrease } = useCounterStore();

  return (
    <div className="text-center bg-gray-50/5 p-8 rounded-xl">
      <h2 className="text-2xl font-bold">Count: {count}</h2>
      <div className="mt-4 flex justify-center gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white" onClick={increase}>
          Increase
        </button>
        <button className="px-4 py-2 bg-rose-500 text-white" onClick={decrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
