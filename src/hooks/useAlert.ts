import { useState } from 'react';

function useAlert() {
	const [alertState, setAlertState] = useState<{
		show: boolean;
		text: string;
		type: 'danger' | 'success';
	}>({
		show: false,
		text: '',
		type: 'danger',
	});

	const showAlert = (params: {
		show: boolean;
		text: string;
		type?: 'danger' | 'success';
	}) => {
		setAlertState({ show: true, text: params.text, type: params.type ?? 'danger' });
	};

	const hideAlert = () => {
		setAlertState({ show: false, text: '', type: 'danger' });
	};

	return { alert: alertState, showAlert, hideAlert };
}

export default useAlert;
