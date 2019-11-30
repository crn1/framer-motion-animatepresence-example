import Layout from '../components/Layout'

import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'

const ToggleButton = (props) => (
	<Button fullWidth
			startIcon={<PhotoLibrary />}
			size='large'
			color='primary'
			variant='contained'
			onClick={() => props.setIsVisible(!props.isVisible)}
	>
		Toggle Gallery
	</Button>
);

export default ToggleButton
