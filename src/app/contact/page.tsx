import Link from 'next/link'
import { MdOutlineEmail, MdFacebook  } from 'react-icons/md'
import { PiTelegramLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
	return (
		<main className="flex max-h-screen w-full flex-col items-center justify-between container">
			<h1 className="text-4xl font-semibold text-center text-neutral-900 dark:text-neutral-100 mb-5">Contact</h1>
			<p className='text-center mb-10'>
				{"We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us via email or join our Telegram group for the latest updates and support."}
			</p>

			<div className='text-left text-sm md:text-lg sm:px-5 '>
				<div className='flex sm:p-2 p-3 rounded-lg hover:bg-slate-500 hover:text-white'>
					<MdOutlineEmail className='h-10 w-10 mr-3 ' />
					<p className="font-semibold sm:py-0 py-2">
						Email: <span className="font-normal">admin@bitcoinpokertour.com</span>
					</p>
				</div>
				<Link href={"https://t.me/+4_ll8Wiu8zQ0MTE9"} target='_blank' rel="noopener noreferrer">
				<div className='flex sm:p-2 p-3 rounded-lg hover:bg-cyan-500 hover:text-white'>
					<PiTelegramLogo className='h-10 w-10 mr-3 ' />
					<p className="font-semibold py-2 hover:cursor-pointer">
						Telegram:
						<span className="font-normal ml-2">
							Join Our Channel!
						</span>
					</p>
				</div>
				</Link>
				<Link href={"https://x.com/BTC_PokerTour"} target='_blank' rel="noopener noreferrer">
				<div className='flex sm:p-2 p-3 rounded-lg hover:bg-black hover:text-white'>
					<RiTwitterXFill className='h-10 w-10 mr-3 ' />
					<p className="font-semibold py-2  hover:cursor-pointer">	
						X:
						<span className="font-normal ml-2">
							Follow us on X
						</span>
					</p>
				</div>
				</Link>
				<Link href={"https://www.instagram.com/bitcoinpokertour/"} target='_blank' rel="noopener noreferrer">
				<div className='flex sm:p-2 p-3 rounded-lg hover:bg-rose-500 hover:text-white'>
					<GrInstagram className='h-10 w-10 mr-3 ' />
					<p className="font-semibold sm:py-0 py-2  hover:cursor-pointer">
						Instagram:
						<span className="font-normal ml-2">
							Follow us on Instagram
						</span>
					</p>
				</div>
				</Link>
				<Link href={"https://www.facebook.com/profile.php?id=61561210327705"} target='_blank' rel="noopener noreferrer">
					<div className='flex sm:p-2 p-3 rounded-lg hover:bg-blue-700 hover:text-white'>
						<MdFacebook className='h-10 w-10 mr-3 ' />
						<p className="font-semibold sm:py-0 py-2  hover:cursor-pointer">
							Facebook:
							<span className="font-normal ml-2">
								Follow us on Facebook
							</span>
						</p>
					</div>
				</Link>
			</div>
		</main>
	);
};

export default Contact;
