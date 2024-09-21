import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';

function Contact() {
	const formRef = useRef<HTMLFormElement>(null!);
	const [form, setForm] = useState({
		name: 'anonymous',
		email: '',
		message:
			'Loved your work ping me back if your open to working on something awesome!',
	});
	const [loading, setLoading] = useState(false);
	const { alert, showAlert, hideAlert } = useAlert();

	function handleChange(e: { target: { name: string; value: string } }): void {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e: { preventDefault: () => void }) {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Aashish',
					from_email: form.email,
					// to_email: 'extry99@gmail.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					showAlert({
						show: true,
						text: 'Thank you for your message 😃',
						type: 'success',
					});

					setTimeout(() => {
						hideAlert();
						setForm({
							name: '',
							email: '',
							message: '',
						});
					}, 3000);
				},
				(error) => {
					setLoading(false);
					console.error(error);

					showAlert({
						show: true,
						text: "I didn't receive your message 😢",
						type: 'danger',
					});
				}
			);
	}
	return (
		<section className='my-20 c-space' id='contact'>
			{alert.show && <Alert {...alert} />}

			<div className='relative flex flex-col items-center justify-center min-h-screen'>
				<img
					src='/assets/terminal.png'
					alt='terminal-bg'
					className='absolute inset-0 min-h-full'
				/>

				<div className='contact-container'>
					<h3 className='head-text'>Let's talk</h3>
					<p className='mt-3 text-lg text-white-600'>
						building a new website, improve your existing platform, or bring a
						unique project to life, I’m here to help.
					</p>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='flex flex-col mt-12 space-y-7'
					>
						<label className='space-y-3'>
							<span className='field-label'>Full Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								required
								className='field-input'
								placeholder='ex., John Doe'
							/>
						</label>
						<label className='space-y-3'>
							<span className='field-label'>Email address</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								required
								className='field-input'
								placeholder='your email where i can reach you'
							/>
						</label>
						<label className='space-y-3'>
							<span className='field-label'>Your message</span>
							<textarea
								name='message'
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className='field-input'
								placeholder='your message'
							/>
						</label>
						<button className='field-btn' type='submit' disabled={loading}>
							{loading ? 'Sending...' : 'Send Message'}

							<img
								src='/assets/arrow-up.png'
								alt='arrow-up'
								className='field-btn_arrow'
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
