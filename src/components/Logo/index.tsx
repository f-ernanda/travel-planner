import * as Styled from './styles'

export type LogoProps = {
  $size?: 'normal' | 'large'
}

const Logo = ({ $size = 'normal' }: LogoProps) => (
  <Styled.Wrapper $size={$size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 131 25"
      role="img"
      aria-label="Travel Ease"
    >
      <path
        fill="#565D5D"
        d="M5.425 19.184c-.359 0-.654-.112-.885-.336a1.114 1.114 0 0 1-.346-.833V6.898h2.5v11.117c0 .332-.118.61-.355.833-.237.224-.542.336-.914.336ZM1.174 7.97c-.334 0-.613-.102-.837-.307C.112 7.46 0 7.191 0 6.86c0-.332.112-.597.337-.795.224-.198.503-.297.837-.297h8.541c.334 0 .613.102.837.306.225.205.337.473.337.805 0 .333-.112.598-.337.796a1.22 1.22 0 0 1-.837.297H1.174Zm11.542 11.213c-.333 0-.61-.112-.827-.336a1.147 1.147 0 0 1-.327-.833v-7.917c0-.332.109-.61.327-.833.218-.224.494-.336.827-.336.334 0 .61.112.827.336.218.223.327.501.327.833V11.9l-.134-1.284c.14-.307.323-.578.548-.815a3.25 3.25 0 0 1 .76-.594 3.46 3.46 0 0 1 .904-.354c.32-.077.641-.115.962-.115.385 0 .709.108.971.325.264.218.395.473.395.767 0 .422-.11.725-.327.91a1.078 1.078 0 0 1-.712.278c-.244 0-.465-.044-.664-.134a1.649 1.649 0 0 0-.683-.134c-.23 0-.465.054-.702.163a1.932 1.932 0 0 0-.654.508c-.199.23-.359.514-.48.853-.123.339-.184.738-.184 1.198v4.543c0 .332-.109.61-.327.833a1.106 1.106 0 0 1-.827.336ZM28.01 8.738c.334 0 .61.108.828.325.218.218.327.499.327.844v8.108c0 .332-.11.61-.327.833a1.106 1.106 0 0 1-.828.336c-.333 0-.609-.112-.827-.336a1.147 1.147 0 0 1-.327-.833v-.94l.423.173c0 .166-.09.367-.269.604-.18.236-.423.47-.731.7-.308.23-.67.424-1.087.584-.417.16-.869.24-1.356.24a4.41 4.41 0 0 1-2.405-.681c-.718-.454-1.286-1.08-1.703-1.878-.417-.8-.625-1.716-.625-2.751 0-1.048.208-1.971.625-2.77.417-.798.978-1.424 1.684-1.878a4.25 4.25 0 0 1 2.347-.68 4.46 4.46 0 0 1 1.52.249c.461.166.862.377 1.202.632.34.256.603.515.789.777.186.261.279.482.279.66l-.693.25v-1.4c0-.331.11-.61.327-.833.218-.224.494-.335.827-.335Zm-3.886 8.529c.565 0 1.058-.14 1.482-.422a2.85 2.85 0 0 0 .99-1.15 3.66 3.66 0 0 0 .356-1.629c0-.613-.118-1.163-.356-1.648a2.85 2.85 0 0 0-.99-1.15c-.424-.282-.917-.422-1.482-.422-.551 0-1.039.14-1.462.422a2.85 2.85 0 0 0-.99 1.15c-.238.485-.357 1.035-.357 1.648 0 .6.12 1.144.356 1.63.238.485.568.868.991 1.15.423.28.91.421 1.462.421Zm7.772-8.338c.243 0 .468.061.673.182.205.122.36.304.462.547l2.828 6.44-.423.191 2.885-6.612c.218-.511.558-.754 1.02-.729.32 0 .58.1.78.298a1 1 0 0 1 .25 1.025 2.984 2.984 0 0 1-.107.287l-3.597 7.897c-.205.46-.532.703-.981.729a1.053 1.053 0 0 1-.703-.135 1.204 1.204 0 0 1-.51-.594l-3.578-7.896a3.565 3.565 0 0 1-.086-.25 1.225 1.225 0 0 1-.048-.364c0-.23.102-.457.308-.68.205-.224.48-.336.827-.336Zm15.006 10.446c-1.09 0-2.036-.227-2.838-.68a4.708 4.708 0 0 1-1.847-1.85c-.43-.78-.644-1.66-.644-2.645 0-1.15.234-2.13.702-2.942.468-.811 1.08-1.434 1.837-1.869a4.756 4.756 0 0 1 2.405-.651c.654 0 1.273.134 1.856.402.584.268 1.1.636 1.55 1.102a5.358 5.358 0 0 1 1.067 1.62 4.91 4.91 0 0 1 .394 1.955.983.983 0 0 1-.365.747c-.231.192-.5.288-.808.288h-7.35l-.576-1.917h7.06l-.423.383v-.517a1.745 1.745 0 0 0-.395-.997 2.574 2.574 0 0 0-.885-.7 2.528 2.528 0 0 0-1.125-.258 3.66 3.66 0 0 0-1.077.153 2.065 2.065 0 0 0-.866.518c-.244.243-.436.568-.577.977-.141.41-.212.927-.212 1.553 0 .69.144 1.274.433 1.754.289.479.66.843 1.116 1.092.455.25.94.374 1.452.374.475 0 .853-.038 1.135-.115.282-.077.51-.17.683-.278a8.9 8.9 0 0 1 .472-.278c.23-.115.449-.172.654-.172.282 0 .516.095.702.287a.934.934 0 0 1 .279.671c0 .345-.18.658-.539.94-.333.28-.801.526-1.404.737a5.614 5.614 0 0 1-1.866.316Zm8.907-1.36c0 .332-.112.61-.336.833a1.138 1.138 0 0 1-.837.336c-.32 0-.59-.112-.808-.336a1.147 1.147 0 0 1-.327-.833V6.169c0-.332.112-.61.337-.834.224-.223.503-.335.836-.335.334 0 .606.112.818.335.212.224.317.502.317.834v11.846Zm4.06-12.248h6.445c.333 0 .612.105.837.316.224.21.336.482.336.815 0 .319-.112.578-.336.776a1.22 1.22 0 0 1-.837.297h-5.387l.173-.326v3.738l-.154-.154h4.502c.334 0 .613.106.837.317.224.21.337.482.337.814 0 .32-.113.578-.337.776a1.219 1.219 0 0 1-.837.298h-4.444l.096-.154v3.872l-.154-.173h5.368c.333 0 .612.112.837.336.224.223.336.482.336.776 0 .32-.112.581-.336.786a1.197 1.197 0 0 1-.837.307h-6.445c-.334 0-.612-.112-.837-.336a1.13 1.13 0 0 1-.336-.833V6.935c0-.331.112-.61.336-.833.225-.224.504-.335.837-.335Zm17.969 2.97c.333 0 .61.11.827.326.218.218.327.499.327.844v8.108c0 .332-.109.61-.327.833a1.106 1.106 0 0 1-.827.336c-.334 0-.61-.112-.827-.336a1.147 1.147 0 0 1-.327-.833v-.94l.423.173c0 .166-.09.367-.27.604-.179.236-.423.47-.73.7-.308.23-.67.424-1.088.584-.416.16-.868.24-1.356.24a4.41 4.41 0 0 1-2.404-.681c-.719-.454-1.286-1.08-1.703-1.878-.417-.8-.625-1.716-.625-2.751 0-1.048.208-1.971.625-2.77.417-.798.978-1.424 1.683-1.878a4.25 4.25 0 0 1 2.347-.68 4.46 4.46 0 0 1 1.52.249c.462.166.863.377 1.203.632.34.256.602.515.788.777.186.261.28.482.28.66l-.693.25v-1.4c0-.331.109-.61.327-.833.218-.224.493-.335.827-.335Zm-3.886 8.53c.564 0 1.058-.14 1.481-.422a2.85 2.85 0 0 0 .99-1.15 3.66 3.66 0 0 0 .357-1.629c0-.613-.119-1.163-.356-1.648a2.85 2.85 0 0 0-.99-1.15c-.424-.282-.918-.422-1.482-.422-.552 0-1.04.14-1.462.422a2.852 2.852 0 0 0-.991 1.15c-.237.485-.356 1.035-.356 1.648 0 .6.119 1.144.356 1.63.237.485.568.868.99 1.15.424.28.911.421 1.463.421Zm6.945.326c-.129-.18-.186-.41-.174-.69.013-.281.18-.524.5-.729.206-.127.424-.182.655-.162.23.019.455.137.673.354.372.37.763.658 1.174.863.41.204.923.306 1.539.306.192-.012.404-.041.635-.086a1.22 1.22 0 0 0 .605-.307c.174-.16.26-.405.26-.738 0-.28-.096-.504-.288-.67a2.433 2.433 0 0 0-.76-.422 12.097 12.097 0 0 0-1.049-.326 29.256 29.256 0 0 1-1.221-.383 5.108 5.108 0 0 1-1.145-.546 2.63 2.63 0 0 1-.847-.892c-.218-.37-.327-.837-.327-1.399 0-.639.18-1.182.54-1.63.358-.446.823-.791 1.394-1.034a4.549 4.549 0 0 1 1.799-.364c.397 0 .814.048 1.25.143.436.096.853.25 1.25.46.398.211.732.49 1.001.834.141.192.224.422.25.69.026.268-.096.511-.365.729a.93.93 0 0 1-.674.2 1.02 1.02 0 0 1-.635-.258 2.273 2.273 0 0 0-.875-.67 3.017 3.017 0 0 0-1.26-.25c-.193 0-.4.022-.625.067-.225.045-.42.14-.587.288-.167.146-.25.38-.25.7 0 .293.096.526.288.699.193.172.453.313.78.421.327.109.676.214 1.048.317.385.102.776.223 1.173.364.398.14.764.326 1.097.556.334.23.603.527.808.891.205.364.308.827.308 1.39 0 .651-.192 1.207-.577 1.667-.385.46-.866.808-1.443 1.045a4.63 4.63 0 0 1-1.77.354 6.9 6.9 0 0 1-2.27-.393 3.928 3.928 0 0 1-1.885-1.39Zm14.62 1.782c-1.09 0-2.036-.227-2.837-.68a4.708 4.708 0 0 1-1.847-1.85c-.43-.78-.644-1.66-.644-2.645 0-1.15.234-2.13.702-2.942.468-.811 1.08-1.434 1.837-1.869a4.756 4.756 0 0 1 2.405-.651c.654 0 1.273.134 1.856.402.584.268 1.1.636 1.549 1.102a5.356 5.356 0 0 1 1.068 1.62 4.91 4.91 0 0 1 .394 1.955.983.983 0 0 1-.365.747c-.231.192-.5.288-.809.288h-7.348l-.578-1.917h7.06l-.422.383v-.517a1.744 1.744 0 0 0-.395-.997 2.574 2.574 0 0 0-.885-.7 2.528 2.528 0 0 0-1.125-.258c-.385 0-.744.051-1.078.153a2.064 2.064 0 0 0-.865.518c-.244.243-.436.568-.578.977-.14.41-.211.927-.211 1.553 0 .69.144 1.274.433 1.754.288.479.66.843 1.116 1.092.455.25.939.374 1.452.374.475 0 .853-.038 1.135-.115.282-.077.51-.17.683-.278a8.86 8.86 0 0 1 .471-.278c.231-.115.45-.172.654-.172.283 0 .517.095.703.287a.933.933 0 0 1 .279.671c0 .345-.18.658-.539.94-.334.28-.802.526-1.404.737a5.613 5.613 0 0 1-1.867.316Z"
      />
      <mask
        id="a"
        width="28"
        height="25"
        x="103"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M103 .095h28v24.046h-28V.095Z" />
      </mask>
      <g mask="url(#a)">
        <mask
          id="b"
          width="28"
          height="25"
          x="103"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M103 24.141h28V.095h-28v24.046Z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#BDC3C3"
            d="M127.135 12.118c0 6.64-5.403 12.023-12.067 12.023-6.665 0-12.068-5.383-12.068-12.023S108.403.095 115.068.095c6.664 0 12.067 5.383 12.067 12.023Z"
          />
        </g>
        <mask
          id="c"
          width="28"
          height="25"
          x="103"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M103 24.141h28V.095h-28v24.046Z" />
        </mask>
        <g mask="url(#c)">
          <path
            fill="#0D8C84"
            d="M105.627 14.914c.393.517 1.133.62 1.652.23l3.377-2.542 5.045 2.872 1.205-.907-3.218-4.246 1.783-1.341 1.993 1.08.709-.533-2.135-2.816-.533-.703-3.059 2.302-1.891-4.128-1.063.799.043 5.52-3.678 2.767a1.172 1.172 0 0 0-.23 1.646Z"
          />
        </g>
        <mask
          id="d"
          width="28"
          height="25"
          x="103"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M103 24.141h28V.095h-28v24.046Z" />
        </mask>
        <g mask="url(#d)">
          <path
            fill="#565D5D"
            d="m116.76 6.363.811 1.06c.416-.325.896-.688 1.447-1.082a33.98 33.98 0 0 1 3.302-2.094c1.244-.682 2.623-1.332 4.027-1.702.696-.181 1.409-.288 2.019-.219.619.071 1.032.314 1.233.765.21.459.184 1.111.065 1.705-.12.603-.327 1.178-.54 1.7-.438 1.046-.916 1.89-1.239 2.486-.326.597-.505.951-.439 1.002.064.048.37-.209.832-.728a14.296 14.296 0 0 0 1.677-2.356c.295-.53.591-1.128.806-1.825.199-.692.379-1.516.082-2.45-.15-.46-.467-.91-.883-1.216-.416-.31-.893-.48-1.349-.569-.921-.172-1.795-.081-2.627.07-1.663.322-3.187.939-4.566 1.591a34.095 34.095 0 0 0-3.628 2.034c-.542.348-1.076.708-1.602 1.08l.572.748Z"
          />
        </g>
      </g>
    </svg>
  </Styled.Wrapper>
)

export default Logo
