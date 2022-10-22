import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { View, Text } from 'react-native';
import LeadsLLCIcon from "../Images/LeadsLLCIcon10x10.jpg";
import "./Layout.css";

function Layout() {
	return (
	
	
	<div>
		<div class="container">
			<img src={LeadsLLCIcon} alt="LeadsLLCIcon" style={{ marginLeft: '.5rem', marginRight:'.5rem' }} />
			<div class="col-lg-5">
				<p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
				</p>
			</div>
		</div>
		<div class="container">
			<Sidebar style={{top:'0rem'}}>
				<Menu>
				<SubMenu label="About">
					<MenuItem> Pie charts </MenuItem>
					<MenuItem> Line charts </MenuItem>
						</SubMenu>
					<MenuItem> Request Service </MenuItem>
					<MenuItem> Demolition </MenuItem>
					<MenuItem> Gut Renovation </MenuItem>
					<MenuItem> Rebuilding </MenuItem>
					<MenuItem> Flooring </MenuItem>
					<MenuItem> Roofing </MenuItem>
					<MenuItem> Tree removal </MenuItem>
					<MenuItem> Property assistance </MenuItem>
					<MenuItem> Insurance </MenuItem>
					<MenuItem> Contact </MenuItem>
				</Menu>
			</Sidebar>
			<div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">About</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Demolition</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Gut Renovation</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Rebuilding</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Flooring</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Roofing</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Tree removal</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Property assistance</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Insurance</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div class="col-lg-5">
					<h1 class="font-weight-light">Contact</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
			</div>
		</div>
	</div>
);
}
export default Layout;