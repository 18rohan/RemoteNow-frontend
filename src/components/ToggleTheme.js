import { MdDarkMode, MdLightMode } from "react-icons/md";
import { setDarkMode } from "../redux/actions/theme.actions.js";
import { useDispatch, useSelector } from "react-redux";
export const Toggle = () => {
  // const [isDark, setIsDark] = useDarkMode();
  const isDark = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(setDarkMode(isDark));
    if (isDark === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  console.log("IsDark: ", isDark);
  return (
    <div>
      {!isDark ? (
        <button onClick={handleToggle} className="focus:outline-none">
          <MdDarkMode size={32} color="#F4F6F0" />
        </button>
      ) : (
        <button onClick={handleToggle} className="focus:outline-none">
          <MdLightMode color="#FDB813" size={32} />
        </button>
      )}
    </div>
  );
};
