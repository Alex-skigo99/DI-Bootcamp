import { useTheme } from "./ThemeContext";

const Card = (props) => {
    const { theme } = useTheme();
    const classNames = `card ${theme}`;
    return (
    <div className={classNames}>
        <h1>Theme: {theme}</h1>
    </div>
    )
};

export default Card;