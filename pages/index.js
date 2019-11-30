import { useState } from 'react'

import Layout from '../components/Layout'
import ToggleButton from '../components/ToggleButton'

import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { motion, AnimatePresence } from 'framer-motion'

const itemVariants = {
	hidden: i => ({
		scale: 0,
		transition: {
			duration: 0.15,
			delay: i * 0.05,
		}
	}),
	visible: i => ({
		scale: 1,
		transition: {
			duration: 0.15,
			delay: i * 0.05,
		}
	}),
	hover: {
		scale: 1.1,
	},
}

const images = [
	'https://burst.shopify.com/photos/calm-water-in-european-city/download?c=sky',
	'https://burst.shopify.com/photos/long-exposure-of-neon-lights/download',
	'https://burst.shopify.com/photos/light-shines-from-shanghai-skyline/download',
	'https://burst.shopify.com/photos/boats-sailing-under-buildings-on-rock-face/download',
	'https://burst.shopify.com/photos/battling-soldier-toys-in-grass/download',
	'https://burst.shopify.com/photos/monochromatic-vintage-tv-on-simple-background/download',
	'https://burst.shopify.com/photos/fruit-in-a-cup-with-spoon/download',
	'https://burst.shopify.com/photos/western-fashion-in-desert-field/download',
	'https://burst.shopify.com/photos/autumn-baking-fun/download',
	'https://burst.shopify.com/photos/drone-photography-of-river-through-fall-trees/download',
	'https://burst.shopify.com/photos/person-working-on-laptop-with-phone-and-notebook-beside/download',
	'https://burst.shopify.com/photos/urban-highway-traffic-from-above/download',
	'https://burst.shopify.com/photos/basket-of-fresh-picked-apple/download',
	'https://burst.shopify.com/photos/hand-grabbing-a-hot-slice-of-pizza/download',
	'https://burst.shopify.com/photos/bright-green-gumball-candy-background/download',
	'https://burst.shopify.com/photos/street-lights-glow-in-iceland-winter/download',
]

const Index = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Layout>
			<AnimatePresence>
				<Grid container item xs={12} justify='center' style={{ marginTop: 32, }}>
					<Grid container item
							xs={12} md={10}
							spacing={4}
					>
						<Grid container item xs={12} justify='center'>
							<Grid item xs={6}>
								<motion.div
										variants={itemVariants}
										initial='hidden' animate='visible' exit='hidden'
										custom={1}
										whileHover='hover'
								>
									<ToggleButton setIsVisible={setIsVisible} isVisible={isVisible} />
								</motion.div>
							</Grid>
						</Grid>
						<AnimatePresence>
							{ isVisible && images.map((image, i) => (
								<Grid item xs={6} lg={3} xl={2} key={i}>
									<motion.div
											variants={itemVariants}
											initial='hidden'
											animate='visible'
											custom={i+1}
											exit='hidden'
											whileHover={{ scale: 1.1 }}
									>
										<img
											style={{ borderRadius: 4, maxWidth: '100%', }}
											src={image}
										/>
									</motion.div>
								</Grid>
							))}
						</AnimatePresence>
					</Grid>
				</Grid>
			</AnimatePresence>
		</Layout>
	)
};

export default Index
