function HeaderSpacer({ hasBanner }) {
	const spacerHeight = hasBanner ? "h-[125px] md:h-[150px] w-full" : "md:h-[104px] h-[68px] w-full";

	return <div className={spacerHeight} />;
}

export default HeaderSpacer;
