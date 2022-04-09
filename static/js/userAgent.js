export default function getUserAgent() {
	let userAgent = navigator.userAgent;

	console.log(userAgent);

	if (userAgent.match(/opr\//i)) {
		return "Opera";
	}

	if (userAgent.match(/edg/i)) {
		return "Edge";
	}

	if (userAgent.match(/chrome|chromium|crios/i)) {
		return "Chrome";
	}

	if (userAgent.match(/safari/i)) {
		return "Safari";
	}

	if (userAgent.match(/firefox|fxios/i)) {
		return "Firefox";
	}

	return "Could not detect the browser";
}
