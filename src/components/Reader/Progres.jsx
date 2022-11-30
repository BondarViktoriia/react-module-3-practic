import PropTypes from 'prop-types';
import {ProgresInfo} from './Progres.styled'

export const Progres = ({total,current}) => {
    return (
        <ProgresInfo>{current}/{ total}</ProgresInfo>
    )
}

Progres.propType = {
    total: PropTypes.number.isRequired,
    current:PropTypes.number.isRequired,
}