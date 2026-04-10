import { useState, useEffect, useMemo } from "react";

const useIsClient = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const values = useMemo(
		() => ({
			isClient,
		}),
		[isClient]
	);

	return values;
};

export default useIsClient;
