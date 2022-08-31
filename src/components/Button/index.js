/**
 *
 * Text
 *
 */
import PropTypes from 'prop-types';
import UnstyledButton from '@material-ui/core/Button';
import FlexBox from 'components/FlexBox';
import styled from 'styled-components';

/* TODO:
1. use proper variants e.g primary, secondary, tertiary instead of doing this
2. use proper theme configs instead of hard coding like this
*/
const StyledButton = styled(UnstyledButton)({
  '&&': {
    marginRight: '1em',
    background: 'transparent',
    color: '#fff',
    border: '2px solid #393A6D',
    padding: '7px 14px',
    transition: 'background 500ms ease-in-out',
    backgroundColor: (props) =>
      props.background ? props.background : props.selected && '#393A6D',
    '&:hover': {
      background: (props) => (props.hoverBg ? props.hoverBg : '#393A6D'),
    },
    '&:selected': {
      background: (props) => (props.hoverBg ? props.hoverBg : '#393A6D'),
    },
    selected: {},
    disabled: {},
  },
});

const primary = {
  marginRight: '1em',
  color: '#fff',
  border: '2px solid #393A6D',
  padding: '7px 14px',
  transition: 'background 500ms ease-in-out',
  selected: {},
  disabled: {},
};

const Button = ({
  disabled,
  children,
  minWidth,
  minHeight,
  onClick,
  loading,
  startIcon,
  endIcon,
  border,
  ...props
}) => {
  return (
    <FlexBox>
      <StyledButton
        onClick={onClick}
        disabled={disabled || loading}
        style={{
          fontFamily: 'Lato',
          textTransform: 'none',
          ...primary,
          opacity: (disabled || loading) && 0.5,
          minWidth: minWidth || 200,
          minHeight: minHeight || 48,
          border: border,
        }}
        variant="outlined"
        startIcon={startIcon}
        endIcon={endIcon}
        {...props}
      >
        {children}
      </StyledButton>
    </FlexBox>
  );
};
Button.propTypes = {
  color: PropTypes.string,
  display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
};
export default Button;
