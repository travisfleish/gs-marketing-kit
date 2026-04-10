import clsx from "clsx";
import WpImage, { ImageProps } from "~/components/elements/Wp";

export type ProfileCardProps = {
	card: {
		avatar: ImageProps;
		job_role: string;
		logo: ImageProps;
		name: string;
	};
	variant?: "light" | "dark";
};

function ProfileCard({ card, variant = "light" }: ProfileCardProps) {
	// console.log("ProfileCard.props", card);

	const { logo, avatar, name, job_role } = card;

	const bgColorMap = {
		light: "bg-[#c2d1ff1a]",
		dark: "bg-lightGrey",
	};

	return (
		<div className="relative overflow-hidden rounded border-[0.481px] border-[#ffffff0d] p-6">
			<div className={clsx("absolute inset-0 backdrop-blur-[6px]", bgColorMap?.[variant])} />

			<div className="relative flex flex-col">
				<div className="mb-6 flex items-start justify-between">
					<WpImage image={avatar} className="h-14 w-14 rounded-full object-cover object-center" />
					<WpImage image={logo} className="h-auto w-[82px] rounded-full object-cover object-center" />
				</div>

				<p className={clsx("text-18 font-medium", variant === "light" ? "text-white" : "text-navy")} dangerouslySetInnerHTML={{ __html: name }} />
				<p
					className={clsx("text-16 font-body font-normal", variant === "light" ? "text-white/85" : "text-navy/85")}
					dangerouslySetInnerHTML={{ __html: job_role }}
				/>
			</div>
		</div>
	);
}

export default ProfileCard;
