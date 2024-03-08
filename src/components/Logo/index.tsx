import * as Styled from './styles'

export type LogoProps = {
  size?: 'normal' | 'large'
}

const Logo = ({ size = 'normal' }: LogoProps) => (
  <Styled.Wrapper size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 94"
      role="img"
      aria-label="Travel Ease"
    >
      <path
        fill="#565D5D"
        d="M5.425 93.45c-.359 0-.654-.11-.885-.335a1.114 1.114 0 0 1-.346-.833V81.165h2.5v11.117c0 .332-.118.61-.355.834-.237.223-.542.335-.914.335ZM1.174 82.239c-.334 0-.613-.102-.837-.306-.225-.205-.337-.473-.337-.806 0-.332.112-.597.337-.795a1.22 1.22 0 0 1 .837-.297h8.541c.334 0 .613.102.837.307.225.204.337.472.337.805 0 .332-.112.597-.337.795a1.22 1.22 0 0 1-.837.297H1.174Zm11.542 11.213c-.333 0-.61-.112-.827-.335a1.147 1.147 0 0 1-.327-.834v-7.916c0-.332.109-.61.327-.834.218-.224.494-.335.827-.335.334 0 .61.111.827.335.218.224.327.502.327.834v1.801l-.134-1.284c.14-.306.323-.578.548-.814.224-.237.478-.435.76-.594.282-.16.583-.278.904-.355.32-.077.641-.115.962-.115.385 0 .709.109.971.326.264.217.395.472.395.766 0 .422-.11.726-.327.91a1.077 1.077 0 0 1-.712.279 1.6 1.6 0 0 1-.664-.134 1.647 1.647 0 0 0-.683-.135c-.23 0-.465.055-.702.163a1.933 1.933 0 0 0-.654.508c-.199.23-.359.515-.48.853-.123.339-.184.738-.184 1.198v4.543c0 .332-.109.61-.327.834a1.107 1.107 0 0 1-.827.335ZM28.01 83.005c.334 0 .61.109.828.326.218.217.327.498.327.843v8.108c0 .332-.11.61-.327.834a1.106 1.106 0 0 1-.828.335c-.333 0-.609-.112-.827-.335a1.147 1.147 0 0 1-.327-.834v-.94l.423.173c0 .166-.09.367-.269.604-.18.236-.423.47-.731.7-.308.23-.67.424-1.087.584a3.76 3.76 0 0 1-1.356.24 4.41 4.41 0 0 1-2.405-.68c-.718-.454-1.286-1.08-1.703-1.88-.417-.798-.625-1.715-.625-2.75 0-1.047.208-1.97.625-2.77.417-.798.978-1.424 1.684-1.878a4.25 4.25 0 0 1 2.347-.68 4.46 4.46 0 0 1 1.52.249 4.55 4.55 0 0 1 1.202.632c.34.256.603.515.789.777.186.262.279.482.279.661l-.693.25v-1.4c0-.332.11-.61.327-.834.218-.223.494-.335.827-.335Zm-3.886 8.53c.565 0 1.058-.141 1.482-.422a2.85 2.85 0 0 0 .99-1.15 3.66 3.66 0 0 0 .356-1.63c0-.613-.118-1.162-.356-1.648a2.85 2.85 0 0 0-.99-1.15c-.424-.281-.917-.422-1.482-.422-.551 0-1.039.14-1.462.422a2.85 2.85 0 0 0-.99 1.15c-.238.486-.357 1.035-.357 1.648 0 .6.12 1.144.356 1.63.238.485.568.868.991 1.15.423.28.91.421 1.462.421Zm7.772-8.338c.243 0 .468.06.673.182.205.121.36.303.462.546l2.828 6.44-.423.192 2.885-6.613c.218-.511.558-.754 1.02-.728.32 0 .58.099.78.297a1 1 0 0 1 .25 1.025 2.964 2.964 0 0 1-.107.288l-3.597 7.897c-.205.46-.532.702-.981.728a1.053 1.053 0 0 1-.703-.134 1.204 1.204 0 0 1-.51-.594l-3.578-7.897a3.56 3.56 0 0 1-.086-.25 1.226 1.226 0 0 1-.048-.364c0-.23.102-.456.308-.68.205-.224.48-.335.827-.335Zm15.006 10.446c-1.09 0-2.036-.227-2.838-.68a4.708 4.708 0 0 1-1.847-1.85c-.43-.78-.644-1.662-.644-2.645 0-1.15.234-2.131.702-2.943.468-.811 1.08-1.434 1.837-1.869a4.756 4.756 0 0 1 2.405-.651 4.39 4.39 0 0 1 1.856.402c.584.269 1.1.636 1.55 1.103a5.358 5.358 0 0 1 1.067 1.62 4.91 4.91 0 0 1 .394 1.954.983.983 0 0 1-.365.748c-.231.191-.5.287-.808.287h-7.35l-.576-1.916h7.06l-.423.383v-.518a1.745 1.745 0 0 0-.395-.996 2.574 2.574 0 0 0-.885-.7 2.528 2.528 0 0 0-1.125-.259 3.66 3.66 0 0 0-1.077.154 2.065 2.065 0 0 0-.866.517c-.244.243-.436.569-.577.978-.141.409-.212.926-.212 1.552 0 .69.144 1.275.433 1.754.289.48.66.843 1.116 1.093.455.249.94.373 1.452.373.475 0 .853-.038 1.135-.115.282-.076.51-.17.683-.278.174-.108.33-.201.472-.278.23-.115.449-.172.654-.172.282 0 .516.096.702.287a.933.933 0 0 1 .279.671c0 .345-.18.658-.539.94-.333.28-.801.526-1.404.737a5.614 5.614 0 0 1-1.866.317Zm8.907-1.361c0 .332-.112.61-.336.834a1.138 1.138 0 0 1-.837.335c-.32 0-.59-.112-.808-.335a1.147 1.147 0 0 1-.327-.834V80.436c0-.332.112-.61.337-.833.224-.224.503-.336.836-.336.334 0 .606.112.818.336.212.223.317.501.317.834v11.845Zm4.06-12.248h6.445c.333 0 .612.105.837.316.224.211.336.483.336.815 0 .32-.112.578-.336.776a1.22 1.22 0 0 1-.837.297h-5.387l.173-.326v3.738l-.154-.153h4.502c.334 0 .613.105.837.316.224.21.337.482.337.814 0 .32-.113.579-.337.777a1.219 1.219 0 0 1-.837.297h-4.444l.096-.153v3.871l-.154-.172h5.368c.333 0 .612.112.837.335.224.224.336.483.336.776 0 .32-.112.582-.336.786a1.196 1.196 0 0 1-.837.307h-6.445c-.334 0-.612-.112-.837-.335a1.13 1.13 0 0 1-.336-.834V81.203c0-.332.112-.61.336-.834.225-.223.504-.335.837-.335Zm17.969 2.97c.333 0 .61.11.827.327.218.217.327.498.327.843v8.108c0 .332-.109.61-.327.834a1.107 1.107 0 0 1-.827.335c-.334 0-.61-.112-.827-.335a1.147 1.147 0 0 1-.327-.834v-.94l.423.173c0 .166-.09.367-.27.604-.179.236-.423.47-.73.7-.308.23-.67.424-1.088.584a3.76 3.76 0 0 1-1.356.24 4.41 4.41 0 0 1-2.404-.68c-.719-.454-1.286-1.08-1.703-1.88-.417-.798-.625-1.715-.625-2.75 0-1.047.208-1.97.625-2.77.417-.798.978-1.424 1.683-1.878a4.25 4.25 0 0 1 2.347-.68 4.46 4.46 0 0 1 1.52.249 4.55 4.55 0 0 1 1.203.632c.34.256.602.515.788.777.186.262.28.482.28.661l-.693.25v-1.4c0-.332.109-.61.327-.834.218-.223.493-.335.827-.335Zm-3.886 8.53c.564 0 1.058-.14 1.481-.422a2.85 2.85 0 0 0 .99-1.15 3.66 3.66 0 0 0 .357-1.629c0-.613-.119-1.162-.356-1.648a2.85 2.85 0 0 0-.99-1.15c-.424-.281-.918-.422-1.482-.422-.552 0-1.04.14-1.462.422a2.851 2.851 0 0 0-.991 1.15c-.237.486-.356 1.035-.356 1.648 0 .6.119 1.144.356 1.63.237.485.568.868.99 1.15.424.28.911.421 1.463.421Zm6.945.326c-.129-.179-.186-.409-.174-.69.013-.281.18-.524.5-.728.206-.128.424-.182.655-.163.23.019.455.137.673.354.372.37.763.658 1.174.863.41.204.923.307 1.539.307.192-.013.404-.042.635-.087.23-.044.432-.147.605-.306.174-.16.26-.406.26-.738 0-.281-.096-.505-.288-.671a2.431 2.431 0 0 0-.76-.422 12.13 12.13 0 0 0-1.049-.326 29.251 29.251 0 0 1-1.221-.383 5.108 5.108 0 0 1-1.145-.546 2.63 2.63 0 0 1-.847-.891c-.218-.371-.327-.838-.327-1.4 0-.639.18-1.182.54-1.629.358-.447.823-.792 1.394-1.035a4.55 4.55 0 0 1 1.799-.364c.397 0 .814.048 1.25.144.436.095.853.249 1.25.46.398.21.732.488 1.001.833.141.192.224.422.25.69.026.269-.096.511-.365.729a.93.93 0 0 1-.674.201 1.02 1.02 0 0 1-.635-.259 2.27 2.27 0 0 0-.875-.67 3.017 3.017 0 0 0-1.26-.25c-.193 0-.4.023-.625.067-.225.045-.42.14-.587.288-.167.147-.25.38-.25.7 0 .293.096.526.288.699.193.172.453.313.78.422.327.108.676.214 1.048.316.385.102.776.224 1.173.364.398.14.764.326 1.097.556.334.23.603.527.808.891.205.364.308.828.308 1.39 0 .652-.192 1.207-.577 1.667-.385.46-.866.809-1.443 1.045a4.63 4.63 0 0 1-1.77.355 6.903 6.903 0 0 1-2.27-.393 3.93 3.93 0 0 1-1.885-1.39Zm14.62 1.783c-1.09 0-2.036-.227-2.837-.68a4.707 4.707 0 0 1-1.847-1.85c-.43-.78-.644-1.662-.644-2.645 0-1.15.234-2.131.702-2.943.468-.811 1.08-1.434 1.837-1.869a4.756 4.756 0 0 1 2.405-.651 4.39 4.39 0 0 1 1.856.402c.584.269 1.1.636 1.549 1.103a5.356 5.356 0 0 1 1.068 1.62 4.91 4.91 0 0 1 .394 1.954.983.983 0 0 1-.365.748c-.231.191-.5.287-.809.287h-7.348l-.578-1.916h7.06l-.422.383v-.518a1.744 1.744 0 0 0-.395-.996 2.574 2.574 0 0 0-.885-.7 2.529 2.529 0 0 0-1.125-.259c-.385 0-.744.051-1.078.154a2.064 2.064 0 0 0-.865.517c-.244.243-.436.569-.578.978-.14.409-.211.926-.211 1.552 0 .69.144 1.275.433 1.754.288.48.66.843 1.116 1.093.455.249.939.373 1.452.373.475 0 .853-.038 1.135-.115.282-.076.51-.17.683-.278.173-.108.33-.201.471-.278.231-.115.45-.172.654-.172.283 0 .517.096.703.287a.933.933 0 0 1 .279.671c0 .345-.18.658-.539.94-.334.28-.802.526-1.404.737a5.613 5.613 0 0 1-1.867.317Z"
      />
      <mask
        id="a"
        width="89"
        height="77"
        x="6"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M6.193.03H94.74v76.043H6.193V.03Z" />
      </mask>
      <g mask="url(#a)">
        <mask
          id="b"
          width="89"
          height="77"
          x="6"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M6.193 76.073H94.74V.03H6.193v76.043Z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#BDC3C3"
            d="M82.518 38.052c0 20.998-17.087 38.02-38.162 38.02-21.076 0-38.163-17.023-38.163-38.02C6.193 17.054 23.28.03 44.356.03c21.075 0 38.162 17.023 38.162 38.022Z"
          />
        </g>
        <mask
          id="c"
          width="89"
          height="77"
          x="6"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M6.193 76.073H94.74V.03H6.193v76.043Z" />
        </mask>
        <g mask="url(#c)">
          <path
            fill="#0D8C84"
            d="M14.501 46.892a3.74 3.74 0 0 0 5.225.726l10.677-8.035 15.954 9.082 3.813-2.87L39.99 32.368l5.638-4.242 6.306 3.417 2.239-1.687-6.752-8.904-1.684-2.224-9.674 7.28-5.98-13.056-3.362 2.528.137 17.455-11.63 8.752a3.704 3.704 0 0 0-.728 5.204Z"
          />
        </g>
        <mask
          id="d"
          width="89"
          height="77"
          x="6"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M6.193 76.073H94.74V.03H6.193v76.043Z" />
        </mask>
        <g mask="url(#d)">
          <path
            fill="#565D5D"
            d="m49.708 19.853 2.563 3.35a139.92 139.92 0 0 1 4.575-3.42c2.964-2.113 6.504-4.45 10.445-6.622 3.931-2.157 8.295-4.212 12.733-5.383 2.202-.573 4.456-.911 6.385-.692 1.96.225 3.265.991 3.9 2.417.663 1.452.58 3.515.205 5.393-.38 1.907-1.034 3.724-1.709 5.377-1.384 3.308-2.895 5.975-3.916 7.862-1.033 1.885-1.599 3.006-1.387 3.167.2.153 1.169-.66 2.628-2.302a45.13 45.13 0 0 0 5.305-7.451c.933-1.677 1.87-3.566 2.55-5.772.627-2.186 1.197-4.792.258-7.747-.474-1.454-1.476-2.878-2.794-3.846-1.314-.982-2.822-1.514-4.265-1.796-2.912-.545-5.676-.258-8.306.219-5.26 1.018-10.08 2.968-14.44 5.033-4.354 2.084-8.228 4.356-11.473 6.43-1.715 1.1-3.404 2.24-5.068 3.415l1.81 2.368Z"
          />
        </g>
      </g>
    </svg>
  </Styled.Wrapper>
)

export default Logo
