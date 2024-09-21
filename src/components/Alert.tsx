const Alert = ({
	text,
	type,
}: {
	text: string;
	type: 'danger' | 'success';
}): JSX.Element => {
	return (
		<div className='fixed z-50 flex items-center justify-center bottom-5 right-5'>
			<div
				className={`p-2 ${
					type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
				} items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5`}
				role='alert'
			>
				<p
					className={`flex rounded-full ${
						type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
					} uppercase px-2 py-1 text-xs font-semibold mr-3`}
				>
					{type === 'danger' ? 'Failed' : 'Success'}
				</p>
				<p className='mr-2 text-left'>{text}</p>
			</div>
		</div>
	);
};

export default Alert;
