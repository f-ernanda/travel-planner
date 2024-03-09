import * as Styled from './styles'

export type LogoIconProps = {
  $size?: 'normal' | 'large'
}

const LogoIcon = ({ $size = 'normal' }: LogoIconProps) => (
  <Styled.Wrapper $size={$size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 106 91"
      role="img"
      aria-label="Travel Ease"
    >
      <mask
        id="a"
        width="106"
        height="91"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M0 0h105.963v91H0V0Z" />
      </mask>
      <g mask="url(#a)">
        <mask
          id="b"
          width="106"
          height="91"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 91h105.963V0H0v91Z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#BAB9B4"
            d="M91.338 45.5c0 25.128-20.448 45.5-45.669 45.5C20.448 91 0 70.628 0 45.5S20.448 0 45.67 0c25.22 0 45.668 20.372 45.668 45.5Z"
          />
        </g>
        <mask
          id="c"
          width="106"
          height="91"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 91h105.963V0H0v91Z" />
        </mask>
        <g mask="url(#c)">
          <path
            fill="#4E888F"
            d="M9.942 56.08a4.476 4.476 0 0 0 6.252.868l12.778-9.616 19.092 10.869 4.563-3.435L40.447 38.7l6.746-5.077 7.546 4.089 2.68-2.018-8.08-10.656-2.016-2.661-11.576 8.713-7.156-15.625-4.024 3.025.164 20.888-13.918 10.474a4.433 4.433 0 0 0-.871 6.228Z"
          />
        </g>
        <mask
          id="d"
          width="106"
          height="91"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 91h105.963V0H0v91Z" />
        </mask>
        <g mask="url(#d)">
          <path
            fill="#404040"
            d="m52.074 23.722 3.068 4.008a167.34 167.34 0 0 1 5.475-4.091c3.546-2.53 7.783-5.326 12.499-7.926 4.704-2.581 9.926-5.04 15.238-6.442 2.634-.685 5.332-1.09 7.64-.827 2.345.269 3.907 1.186 4.668 2.892.793 1.738.695 4.206.245 6.455-.456 2.28-1.238 4.456-2.045 6.433-1.656 3.959-3.465 7.15-4.687 9.409-1.235 2.256-1.913 3.598-1.66 3.79.24.183 1.4-.79 3.145-2.755a54.021 54.021 0 0 0 6.349-8.917c1.117-2.006 2.238-4.267 3.051-6.906.751-2.617 1.432-5.736.31-9.271-.567-1.74-1.767-3.445-3.344-4.603-1.573-1.175-3.377-1.812-5.105-2.15-3.484-.652-6.792-.308-9.939.263-6.294 1.218-12.062 3.552-17.28 6.023-5.21 2.494-9.847 5.213-13.73 7.694a163.173 163.173 0 0 0-6.064 4.088l2.166 2.833Z"
          />
        </g>
      </g>
    </svg>
  </Styled.Wrapper>
)

export default LogoIcon
