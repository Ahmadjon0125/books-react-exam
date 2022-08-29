import "./MakePayment.scss"
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import useLang from "../../../hooks/useLang";
import ContentData from "../../../assets/content";


export const MakePayment = () => {
	let [lang, setLang] = useLang()

	const { theme, setTheme } = useContext(ThemeContext);

	const Languages = (evt)=>{
		evt.preventDefault()
		setLang(evt.target.value)
	}



  return (
    <div className={theme}>
			<div className="mt-5">
				<h3> {ContentData[lang].settings_settings} </h3>
				<p>{ContentData[lang].settings_language} </p>
				<select
					onChange={Languages}
					defaultValue={lang}
				
				>
					<option value="uz">O'zbekcha</option>
					<option value="ru">Русский</option>
					<option value="en">English</option>
				</select>
				<p>{ContentData[lang].settings_name}</p>


				<div
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
					 <div className="form-check form-switch">
            <input className="form-check-input input__checkbox" type="checkbox" />
          </div>
				</div>
    	</div>
		</div>
  );
};
