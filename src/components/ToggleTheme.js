import { useDarkMode } from "./useDarkMode.js";
import { MdDarkMode, MdLightMode } from "react-icons/md";
export const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div>
      {isDark ? (
        <button
          onClick={(e) => setIsDark((prevValue) => !prevValue)}
          className="focus:outline-none"
        >
          <MdDarkMode size={32} color="#F4F6F0" />
        </button>
      ) : (
        <button
          onClick={(e) => setIsDark((Value) => !Value)}
          className="focus:outline-none"
        >
          <MdLightMode color="#FDB813" size={32} />
        </button>
      )}
    </div>
  );
};
