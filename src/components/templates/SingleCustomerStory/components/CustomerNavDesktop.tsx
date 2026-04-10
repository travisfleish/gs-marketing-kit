import { LayoutGroup, motion } from "framer-motion";

function CustomerNavDesktop(props) {
	const {
		activeSection,
		// onItemClick,
		asideNavLinks,
	} = props;

	return (
		<nav className="hidden flex-col items-start gap-5 md:flex">
			{asideNavLinks?.length > 0 &&
				asideNavLinks?.map((item, index) => {
					const isActive = activeSection === item.link;

					return (
						<div key={`aside-link-${index}`} className="flex items-center justify-start gap-3">
							<LayoutGroup>{isActive && <motion.span layoutId="nav-indicator" layout="position" className="h-2 w-2 rounded-full bg-blue" />}</LayoutGroup>

							<motion.a
								layout
								key={`aside-link-${index}`}
								href={`#${item.link}`}
								className="text-16 font-[450] capitalize text-navy/80 transition-colors duration-300 ease-in-out hover:text-blue"
							>
								{item.label}
							</motion.a>
						</div>
					);
				})}
		</nav>
	);
}

export default CustomerNavDesktop;
