import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import PropTypes from 'prop-types'
import Image from '../Image/Image'

const Carousell = ({images}) => {
    return(
        <Carousel
        next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
        prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}>
        {
            images && images.map((theImage, i) => <Item key={i} theImageUrl={theImage} />)
        }
    </Carousel>
    )
    function Item({ theImageUrl }) {
        return (
            <Paper>
                <Image src={theImageUrl} />
            </Paper>
        )
    }
}

Carousel.propTypes = {
   Images: PropTypes.array.isRequired
}
export default Carousell; 