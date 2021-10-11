import {ChatIcon} from "@heroicons/react/outline";
import {useState} from "react";
import {motion} from "framer-motion";

const Button = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <section className="flex flex-col items-end justify-end h-3/5 w-1/4 absolute bottom-12 right-12">
            <motion.button
                initial="initial"
                animate={`${clicked ? "animate" : "doNotAnimate"}`}
                variants={variants}
                onClick={() => {
                    setClicked(true)
                }}
                className={`flex flex-col ${clicked ? "pointer-events-none" : null} justify-center items-center bg-blue-600`}>
                {!clicked ? <ChatIcon className="text-white h-1/2 w-1/2" /> : null}
            </motion.button>
        </section>
    )
}
export default Button

const variants = {
        initial: {
            borderRadius:"9999px",
            height: "4rem",
            width: "4rem"
        },

        animate: {
            borderRadius: "0px",
            height: "100%",
            width: "100%"
        }
    }