import PropTypes from 'prop-types';
import {ControlsSection,ControlsButton } from './Controls.styled'

export const Controls = ({ onChange, current, total }) => {
  return (
    <ControlsSection>
      <ControlsButton
        type="button"
        onClick={() => onChange(-1)}
        disabled={current === 1}
      >
        Назад
      </ControlsButton>
      <ControlsButton
        type="button"
        onClick={() => onChange(+1)}
        disabled={current=== total}
      >
        Вперед
      </ControlsButton>
    </ControlsSection>
  );
};

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  total:PropTypes.number.isRequired,
}