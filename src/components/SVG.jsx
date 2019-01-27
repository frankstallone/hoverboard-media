import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { width as twWidth } from '../../tailwind'
import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  ${tw`absolute`};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },
  arrowUp: {
    shape: (
      <>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </>
    ),
    viewBox: '0 0 30 42',
  },
  upDown: {
    shape: (
      <>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </>
    ),
    viewBox: '0 0 30 44.58',
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  hoverboard: {
    shape: (
      <>
        <path d="M25.958,36.376c-9.025,3.291 -19.003,-1.372 -22.288,-10.416c-3.284,-9.045 1.368,-19.045 10.393,-22.337c9.024,-3.292 19.001,1.373 22.286,10.416c3.285,9.044 -1.368,19.046 -10.391,22.337m13.174,-18.123l0.23,-3.349l-1.871,-2.785l-0.867,-3.242l-2.672,-2.024l-1.871,-2.784l-3.183,-1.045l-2.671,-2.026l-3.349,0.048l-3.183,-1.046l-3.152,1.134l-3.348,0.048l-2.614,2.098l-3.153,1.134l-1.792,2.836l-2.614,2.099l-0.776,3.265l-1.793,2.836l0.324,3.34l-0.777,3.266l1.388,3.055l0.323,3.34l2.303,2.437l1.388,3.056l2.968,1.556l2.302,2.437l3.312,0.507l2.966,1.556l3.296,-0.599l3.311,0.506l2.923,-1.638l3.295,-0.599l2.234,-2.501l2.922,-1.639l1.303,-3.093l2.234,-2.501l0.229,-3.349l1.303,-3.093l-0.868,-3.241Z" />
        <path d="M23.662,17.157c-1.188,0.433 -1.854,1.088 -2.342,1.708c0.206,0.417 0.38,0.822 0.556,1.307l2.918,8.035l-0.037,0.014l-2.675,0.976l-0.038,0.013l-3.023,-8.325c-0.45,-1.238 -1.282,-1.568 -2.566,-1.099c-1.259,0.458 -2.007,1.118 -2.529,1.721l3.421,9.416l-2.713,0.99l-7.545,-20.775c-2.749,4.034 -3.588,9.289 -1.793,14.229c2.957,8.146 11.943,12.345 20.07,9.381c2.082,-0.759 3.903,-1.917 5.415,-3.353l-4.835,-13.312c-0.415,-1.141 -1.218,-1.315 -2.284,-0.926" />
        <path d="M14.654,5.251c-2.082,0.76 -3.903,1.917 -5.414,3.354l3.919,10.789c0.742,-0.903 1.684,-1.631 2.919,-2.081c0.072,-0.026 0.138,-0.045 0.208,-0.07l-0.001,-0.006c1.273,-0.464 2.243,-0.494 2.981,-0.213c0.21,0.065 0.407,0.149 0.592,0.254c0.809,-1.156 2.087,-2.106 3.402,-2.586c2.858,-1.042 4.561,0.096 5.397,2.402l4.274,11.767c2.749,-4.034 3.588,-9.289 1.794,-14.229c-2.958,-8.144 -11.944,-12.346 -20.071,-9.381" />
      </>
    ),
    viewBox: '0 0 40 40',
  }
}


const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
)

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['triangle', 'circle', 'arrowUp', 'upDown', 'box', 'hexa']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
