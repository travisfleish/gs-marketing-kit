import Link from "next/link";
import { TopRightArrowCircle } from "~/components/elements/Icons";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { useState } from "react";
import PostTag from "~/components/elements/PostTag";
import trackEvent from "~/utils/trackEvent";

interface RoleProps {
	job_role: string;
	category: string;
	location?: string;
	link?: {
		url?: string;
		target?: "_blank" | "";
	};
}

function RoleCard({ role }: { role: RoleProps }) {
	const { category, job_role, location, link } = role;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<LazyMotion features={domAnimation}>
			<Link
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				href={link?.url || "#"}
				target={link?.target}
				className="roles-of-the-week__role-card flex h-full flex-col items-start gap-10 rounded-xl bg-navy p-4 text-white transition-colors duration-300 ease-in-out hover:bg-purple"
				onClick={() => {
					trackEvent("job_trackevent", {
						job_name: job_role,
						city_name: location,
						exit_click: link?.url,
					});
				}}
			>
				<div className="flex w-full items-center justify-between">
					{!!category && <PostTag bgColor="white5" textColor="white" text={category} />}

					<m.div
						animate={{
							opacity: isHovered ? 1 : 0,
							transition: {
								duration: 0.4,
								ease: "easeInOut",
							},
						}}
					>
						<TopRightArrowCircle />
					</m.div>
				</div>

				{!!job_role && (
					<p
						className="text-20 font-medium"
						dangerouslySetInnerHTML={{
							__html: job_role,
						}}
					/>
				)}

				{!!location && (
					<p
						className="text-16 mt-auto font-body text-lightPurple"
						dangerouslySetInnerHTML={{
							__html: location,
						}}
					/>
				)}
			</Link>
		</LazyMotion>
	);
}

export default RoleCard;
