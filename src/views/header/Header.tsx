import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, NavDropdown } from 'react-bootstrap';

// assets
import stimulusLogo from '@assets/stimppaukko.png';

const HeaderLink = ({ linkTo, label }) => (
	<Link to={`${linkTo}`} style={{ textDecoration: 'none' }}>
		<span
			style={{
				fontWeight: '700',
				color: 'black',
			}}
		>
			{label}
		</span>
	</Link>
);

const HeaderWrapper = styled.div`
	height: 90px;
	background-color: white;
`;

const HeaderContainer = styled.div`
	max-width: 1600px;
`;

const Header = () => {
	return (
		<HeaderWrapper className="w-100 d-flex justify-content-center align-items-center position-sticky top-0">
			<HeaderContainer className="w-100 d-flex justify-content-between align-items-center position-sticky top-0">
				<div className="ms-2">
					<Link
						to={'/koti'}
						style={{ textDecoration: 'none' }}
						className="d-flex"
					>
						<img
							className="h-100"
							style={{ width: '90px' }}
							src={stimulusLogo}
							alt="Stimulus ry"
						/>
						<h2
							style={{ fontWeight: '700', color: 'black' }}
							className="align-self-center ms-2"
						>
							Stimulus ry
						</h2>
					</Link>
				</div>
				<Navbar className="gap-5 d-flex me-2">
					<NavDropdown
						title="Yhdistys"
						style={{
							fontWeight: '700',
							color: 'black',
						}}
					>
						<NavDropdown.Item>
							<HeaderLink linkTo="hallitus" label="Hallitus" />
						</NavDropdown.Item>

						<NavDropdown.Item>
							<HeaderLink
								linkTo="toimihenkilot"
								label="Toimihenkilöt"
							/>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<HeaderLink
								linkTo="tehtavakuvaukset"
								label="Tehtäväkuvaukset"
							/>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<HeaderLink
								linkTo="dokumentit"
								label="Dokumentit"
							/>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<HeaderLink linkTo="saannot" label="Säännöt" />
						</NavDropdown.Item>
						<NavDropdown.Item>
							<HeaderLink linkTo="historia" label="Historia" />
						</NavDropdown.Item>
						<NavDropdown.Item>
							<HeaderLink
								linkTo="lomakkeetOppaat"
								label="Lomakkeet ja oppaat"
							/>
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown
						title="Jäsenille"
						style={{
							fontWeight: '700',
							color: 'black',
						}}
					>
						<NavDropdown.Item>
							<HeaderLink linkTo="yhdistys" label="Yhdistys" />
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown
						title="Toiminta"
						id="yhdistys-nav-dropdown"
						style={{
							fontWeight: '700',
							color: 'black',
						}}
					>
						<NavDropdown.Item>
							<HeaderLink linkTo="yhdistys" label="Yhdistys" />
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown
						title="Opiskelu"
						id="yhdistys-nav-dropdown"
						style={{
							fontWeight: '700',
							color: 'black',
						}}
					>
						<NavDropdown.Item>
							<HeaderLink linkTo="yhdistys" label="Yhdistys" />
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown
						title="Yhteistyö"
						id="yhdistys-nav-dropdown"
						style={{
							fontWeight: '700',
							color: 'black',
						}}
					>
						<NavDropdown.Item>
							<HeaderLink linkTo="yhdistys" label="Yhdistys" />
						</NavDropdown.Item>
					</NavDropdown>
				</Navbar>
			</HeaderContainer>
		</HeaderWrapper>
	);
};

export default Header;
