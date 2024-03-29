import { FlightLand, FlightTakeoff } from '@styled-icons/material-rounded'
import * as Styled from './styles'

type FlightStopsIconProps = {
  $stops?: number
}

const FlightStopsIcon = ({ $stops = 0 }: FlightStopsIconProps) => (
  <Styled.Wrapper>
    <FlightTakeoff className="flight-takeoff" />
    {$stops === 0 && (
      <svg
        className="zero-stops-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 267 3"
        aria-hidden
      >
        <path
          stroke="#0D8C84"
          strokeLinecap="round"
          strokeWidth="20"
          d="M2 1.5h263"
        />
      </svg>
    )}
    {$stops === 1 && (
      <svg
        className="one-stop-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 267 16"
        aria-hidden
      >
        <path
          stroke="#0D8C84"
          strokeLinecap="round"
          strokeWidth="20"
          d="M2 7.5h263"
        />
        <circle cx="133" cy="8" r="30" fill="#0D8C84" />
      </svg>
    )}
    {$stops >= 2 && (
      <svg
        className="two-or-more-stops-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 267 16"
        aria-hidden
      >
        <path
          stroke="#0D8C84"
          strokeLinecap="round"
          strokeWidth="20"
          d="M2 7.5h263"
        />
        <circle cx="107" cy="8" r="30" fill="#0D8C84" />
        <circle cx="160" cy="8" r="30" fill="#0D8C84" />
      </svg>
    )}
    <FlightLand className="flight-land" />
  </Styled.Wrapper>
)

export default FlightStopsIcon
