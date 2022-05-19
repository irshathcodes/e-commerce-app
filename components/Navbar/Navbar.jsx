import { useState } from "react";
import styles from "./Navbar.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBagIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navLinks = [
	{
		id: 1,
		name: "T-Shirts",
		link: "t-shirts and tanks",
	},
	{
		id: 2,
		name: "Hoodies",
		link: "hoodies",
	},
	{
		id: 3,
		name: "Shirts",
		link: "shirts",
	},
];

function Navbar() {
	const [showNav, setShowNav] = useState(false);

	const cn = classNames.bind(styles);

	return (
		<header className={cn("center_content")}>
			<nav className={cn("nav")}>
				<div className={cn("brand_container")}>
					<Image src={"/brand_logo.png"} width={40} height={40} />
					<h1>Cloth Zone</h1>
				</div>

				<ul className={cn("nav_links_container", { show_nav: showNav })}>
					{navLinks.map(({ name, id, link }) => (
						<Link href={`/products?category=${link}`} key={id}>
							<li>{name}</li>
						</Link>
					))}
				</ul>

				<div className={cn("icons_container")}>
					<ShoppingBagIcon className={cn("icon_size")} />
					<div
						className={cn("icon_size", "menu_icon")}
						onClick={() => setShowNav(!showNav)}
					>
						{showNav ? <XIcon className={cn("close_icon")} /> : <MenuIcon />}
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
