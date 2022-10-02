// create react component
import React from "react";
import { motion } from "framer-motion";

// this is a renderable animated component to animate the styling content process
export const Images = () => {
	return (
		<div className="anim">
			<motion.div
				className="containerr container1"
				initial={{ opacity: 1, x: -500 }}
				animate={{
					opacity: 0.5,
					x: 0,
					transition: {
						duration: 1,
					},
				}}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
				}}
				style={{ display: "absolute" }}
			/>{" "}
			<motion.div
				className="containerr container2"
				initial={{ opacity: 1, x: 500 }}
				animate={{
					opacity: 0,
					x: 0,
					transition: {
						duration: 1,
					},
				}}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
				}}
				onAnimationComplete={() => {
					document.querySelector(".container1").className =
						"containerr container3";
					document.querySelector(".container2").className =
						"containerr container3";
					document.querySelector(".container2").style.opacity = 1;
					document.querySelector(".container1").style.opacity = 1;
				}}
			/>{" "}
		</div>
	);
};
