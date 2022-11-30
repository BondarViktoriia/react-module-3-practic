import PropTypes from 'prop-types';
import {PublicationArticle,PublicationTitle,PublicationText} from './Publication.styled'
export const Publication = ({ title, text }) => {
  return (
    <PublicationArticle>
      <PublicationTitle>{title}</PublicationTitle>
      <PublicationText>{text}</PublicationText>
    </PublicationArticle>
  );
};

Publication.propType = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
