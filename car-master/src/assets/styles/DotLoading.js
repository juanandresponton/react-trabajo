import styled from 'styled-components';
import { DotAnimationLoading } from './keyframes';

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const DotLoading = styled.div`
  background-color: green;
  border-radius: 100%;
  width:  0.65rem;
  height: 0.25rem;
  margin: 0 0.25rem;
  animation: ${DotAnimationLoading} 1.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`