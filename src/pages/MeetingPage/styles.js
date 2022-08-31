import styled from 'styled-components';

export const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 25em;
  height: 30em;
`;

export const ResetButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 0em;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const MainImage = styled.img`
  pointer-events: none;
  object-fit: cover;
  object-position: 8.7% 0%;
  height: 18em;
  width: 18em;
  margin-left: 3.3em;
  margin-top: 2em;
  border-radius: 100%;
  background-color: #eaeaea;
  align-self: center;
`;

export const SmallImage = styled.img`
  object-fit: cover;
  object-position: 8.7% 0%;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  margin-top: 2em;
  border-radius: 100%;
  background-color: #eaeaea;
  align-self: center;
  border: 3px solid #ffffff;
  background-color: #ffffff;
  margin: 13px;
  opacity: ${(props) => (props.fade ? 0.5 : 1)};
  transition: opacity 500ms ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
