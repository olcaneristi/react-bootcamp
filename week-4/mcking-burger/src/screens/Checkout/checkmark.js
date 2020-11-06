import * as React from "react"

function SvgCheckmark(props) {
  return (
    <svg viewBox="0 0 98.5 98.5" {...props}>
      <path
        className="checkmark"
        fill="none"
        d="M81.7 17.8C73.5 9.3 62 4 49.2 4 24.3 4 4 24.3 4 49.2s20.3 45.2 45.2 45.2 45.2-20.3 45.2-45.2c0-8.6-2.4-16.6-6.5-23.4L45.6 68.2 24.7 47.3"
      />
    </svg>
  )
}

export default SvgCheckmark
