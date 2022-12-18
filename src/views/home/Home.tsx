import React from 'react';
import banner from '@assets/banner.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// assets
import psykologiliitto from '@assets/psykologiliitto.png';
import jyu from '@assets/jyu.png';
import jyy from '@assets/jyy.png';
import cafeEuropa from '@assets/cafeEuropa.png';
import esc from '@assets/esc.png';

const Home = () => {
	return (
		<div
			className="h-100 w-100 d-flex flex-column"
			style={{ maxWidth: '1600px' }}
		>
			<img src={banner} />
			<div className="d-flex justify-content-center">
				<div
					className="text-center position-relative"
					style={{ width: '60%' }}
				>
					<div
						className="position-absolute w-100 h-100 rounded-bottom"
						style={{ backgroundColor: '#FFE15D' }}
					></div>
					<h3
						className="position-relative mt-4 p-3 pt-0"
						style={{ zIndex: '99' }}
					>
						Stimulus ry on psykologiaa Jyväskylän yliopistossa
						opiskelevien ainejärjestö, jonka tehtävänä on ajaa
						jäsentensä etuja opintojen saralla, edustaa alan
						opiskelijoita yliopiston piirissä ja järjestää
						jäsenilleen yhteistä tekemistä.
					</h3>
				</div>
			</div>
			<div className="d-flex justify-content-center mt-5 gap-2">
				<div className="w-25 text-center position-relative">
					<h2 className="position-relative" style={{ zIndex: '99' }}>
						Fukseille
					</h2>

					<h3>
						Mietitkö hakemista Jyväskylän yliopistoon tai oletko
						aloittamassa opintojasi?
					</h3>
					<Button
						className="px-3 py-2 mt-2"
						style={{
							backgroundColor: '#FFE15D',
							color: 'black',
							borderColor: 'black',
							width: '220px',
						}}
					>
						<b>Lue lisää</b>
					</Button>
					<div
						className="position-absolute start-50 translate-middle-x"
						style={{
							width: '250px',
							height: '20px',
							backgroundColor: '#FFE15D',
							top: '28px',
						}}
					></div>
				</div>
				<div className="w-25 text-center position-relative">
					<h2 className="position-relative" style={{ zIndex: '99' }}>
						Jäsenille
					</h2>
					<h3>
						Stimuluksen jäsenenä olet oikeutettu hyödyntämään
						yhteistyökumppaneidemme etuja.
					</h3>
					<Button
						className="px-3 py-2 mt-2"
						style={{
							backgroundColor: '#FFE15D',
							color: 'black',
							borderColor: 'black',
							width: '220px',
						}}
					>
						<b>Lue lisää</b>
					</Button>
					<div
						className="position-absolute start-50 translate-middle-x"
						style={{
							width: '250px',
							height: '20px',
							backgroundColor: '#FFE15D',
							top: '28px',
						}}
					></div>
				</div>
				<div className="w-25 text-center position-relative">
					<h2 className="position-relative" style={{ zIndex: '99' }}>
						Dumpparille
					</h2>
					<h3>
						Moro dumppareille!
					</h3>
					<Button
						className="px-3 py-2 mt-2"
						style={{
							backgroundColor: '#FFE15D',
							color: 'black',
							borderColor: 'black',
							width: '220px',
						}}
					>
						<b>Lue lisää</b>
					</Button>
					<div
						className="position-absolute start-50 translate-middle-x"
						style={{
							width: '250px',
							height: '20px',
							backgroundColor: '#FFE15D',
							top: '28px',
						}}
					></div>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center mt-5">
				<div className="d-flex justify-content-center">
					<div className="w-25 text-center position-relative">
						<h2
							className="position-relative"
							style={{ zIndex: '99' }}
						>
							Ajankohtaista
						</h2>

						<div
							className="position-absolute start-50 translate-middle-x"
							style={{
								width: '500px',
								height: '20px',
								backgroundColor: '#FFE15D',
								top: '28px',
							}}
						></div>
					</div>
				</div>
				<div className="d-flex justify-content-center mt-4 gap-5">
					<div className="w-25 text-center position-relative">
						<h3
							className="position-relative"
							style={{ zIndex: '99' }}
						>
							Stimuluksen hallitus vuodelle 2023 on nyt valittu
						</h3>
						<p>
							Kokoonpano on seuraavanlainen: Puheenjohtaja Micaela
							Meriläinen, varapuheenjohtaja Tuulia Mäntymaa,
							sihteeri Joonas Lähteenmäki, taloudenhoitaja Jukka
							Lopmeri, tiedotusvastaava Iida Reina,
							kulttuurivastaava Saga Friberg, sosiaalipoliittinen
							vastaava Inka Kauppinen, tapahtumavastaavat Milja
							Halmesaari ja Lotta Fågel, koulutusvastaava Yasmin
							Goran, yrityssuhdevastaavat Jarkko Rahja ja Nina
							Leino, liikuntavastaava Kai Stenius ja
							koulutuspoliittinen vastaava Viivi Varanka
						</p>
					</div>{' '}
					<div className="w-25 text-center position-relative">
						<h3
							className="position-relative"
							style={{ zIndex: '99' }}
						>
							Onnea uusille fukseille ja tervetuloa Stimulukseen!
						</h3>
						<p>
							Ohjeet Stimuluksen jäseneksi liittymiseen löydät
							täältä. Tutustu tuleviin tutoreihisi ja hyödyllisiin
							linkkeihin täällä. Orientaatioviikko alkaa
							22.8.2022. Liity fuksien Telegram-ryhmään ja seuraa
							tutorien viestintää orientaatioviikon aikataulusta.
							Kevään 2022 valinnoissa opiskelupaikan saaneiden
							uusien tutkinto-opiskelijoiden on ilmoittauduttava
							joko läsnä tai poissa oleviksi 19.8.2022 klo 15.00
							mennessä. Ohjeet ja lisätietoa ilmoittautumisesta
							löydät täältä.
						</p>
					</div>{' '}
					<div className="w-25 text-center position-relative">
						<h3
							className="position-relative"
							style={{ zIndex: '99' }}
						>
							Stimuluksen hallitus vuodelle 2022 on nyt valittu
						</h3>
						<p>
							Kokoonpano on seuraavanlainen: Puheenjohtaja Asta
							Laurikainen, varapuheenjohtaja Annina Jormanainen,
							sihteeri Riikka Ingerö, taloudenhoitaja Marja
							Filatova, koulutuspoliittinen vastaava Juhani
							Ikäläinen, koulutusvastaava Tuulia Mäntymaa,
							liikuntavastaava Valtteri Bergman,
							tapahtumavastaavat Veeti Majoinen ja Sonja Kokkonen,
							tiedotusvastaava Micaela Meriläinen,
							yrityssuhdevastaavat Kaisa Kalttila ja Piatta
							Pynnönen sekä kulttuurivastaava Bea Hirvonen. Onnea
							uusille pestinhaltijoille!
						</p>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center mt-5">
				<div className="d-flex justify-content-center">
					<div className="w-25 text-center position-relative">
						<h2
							className="position-relative"
							style={{ zIndex: '99' }}
						>
							Yhteistyökumppanit
						</h2>

						<div
							className="position-absolute start-50 translate-middle-x"
							style={{
								width: '500px',
								height: '20px',
								backgroundColor: '#FFE15D',
								top: '28px',
							}}
						></div>
					</div>
				</div>
				<div className="d-flex justify-content-center mt-4 gap-5 mx-2 mb-3">
					<div className="w-25 text-center position-relative align-self-center">
						<img
							src={psykologiliitto}
							alt="psykologiliitto"
							style={{ maxHeight: '100px', maxWidth: '100%' }}
						/>
					</div>
					<div className="w-25 text-center position-relative">
						<img
							src={jyu}
							alt="psykologiliitto"
							style={{ maxHeight: '100px' }}
						/>
					</div>
					<div className="w-25 text-center position-relative">
						<img
							src={jyy}
							alt="psykologiliitto"
							style={{ maxHeight: '100px' }}
						/>
					</div>
					<div className="w-25 text-center position-relative">
						<img
							src={esc}
							alt="psykologiliitto"
							style={{ maxHeight: '100px' }}
						/>
					</div>
					<div className="w-25 text-center position-relative">
						<img
							src={cafeEuropa}
							alt="psykologiliitto"
							style={{ maxHeight: '100px' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
