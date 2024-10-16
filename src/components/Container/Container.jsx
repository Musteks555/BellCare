import css from "./Container.module.css";

const Container = ({ children, image }) => {
    return (
        <div
            className={css.container}
            style={
                image
                    ? {
                          backgroundImage: `url(${image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                      }
                    : {}
            }
        >
            {children}
        </div>
    );
};

export default Container;
