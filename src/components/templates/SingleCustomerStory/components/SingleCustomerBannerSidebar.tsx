import Button from "~/components/elements/buttons/Button";
import WpImage from "~/components/elements/Wp";
import { WpPage } from "~/types/wp";

function SingleCustomerBannerSidebar(props: WpPage) {
	return (
		<div className="w-full md:max-w-[205px] lg:max-w-[265px]">
			{/* Columna izquierda - Información */}
			<div className="w-full space-y-6 rounded-tl-lg rounded-tr-lg bg-blue px-6 py-6 text-white">
				{/* Logo y tagline */}
				<div className="mb-8 flex items-center justify-center bg-[#ffffff33] p-4">
					<WpImage className="max-w-35 max-h-10 w-auto object-contain object-center md:max-h-13" image={props?.banner_sidebar?.logo} />
				</div>

				{/* Información de la empresa */}
				<div className="grid w-full grid-cols-2 items-start justify-start gap-4">
					<div>
						<h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-300 opacity-80">COMPANY</h3>
						<p className="text-xs">{props?.banner_sidebar?.company_name ?? "---"}</p>
					</div>

					<div>
						<h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-300 opacity-80">LOCATION</h3>
						<p className="text-xs">{props?.banner_sidebar?.location ?? "---"}</p>
					</div>

					<div>
						<h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-300 opacity-80">REVENUE</h3>
						<p className="text-xs">{props?.banner_sidebar?.revenue ?? "---"}</p>
					</div>

					<div>
						<h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-300 opacity-80">INDUSTRY</h3>
						<p className="text-xs">{props?.banner_sidebar?.industry ?? "---"}</p>
					</div>
				</div>

				<div className="column-start-1 column-end-2">
					<h3 className="text-xs font-bold uppercase tracking-wider text-sky-300 opacity-80">OBJECTIVE</h3>
					<p className="text-xs">{props?.banner_sidebar?.objective ?? "---"}</p>
				</div>

				{/* Botón de descarga */}
				{!!props?.banner_sidebar?.button_url && (
					<div className="mt-10 w-full">
						<Button
							className="font-semibold"
							onClick={() => window.open(props?.banner_sidebar?.button_url, "_blank")}
							button={{ background_color: "white", size: "huge", type: "slim" }}
							link={{ title: props?.banner_sidebar?.button_text ?? "Download Case Study", url: props?.banner_sidebar?.button_url }}
						/>
					</div>
				)}
			</div>

			<div className="mb-2 mt-2 h-[15px] w-full bg-blue" />
			<div className="mb-2 h-[10px] w-full bg-blue" />
			<div className="mb-2 h-[5px] w-full bg-blue" />
			<div className="mb-2 h-[3px] w-full bg-blue" />
			<div className="h-[1px] w-full bg-blue" />
		</div>
	);
}

export default SingleCustomerBannerSidebar;
