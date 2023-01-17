import { FC } from 'react'

interface Props {
  className?: string
}

export const Blob: FC<Props> = ({ className = '' }) => {
  return (
    <svg
      width='479'
      height='1042'
      viewBox='0 0 479 1042'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g opacity='0.1' filter='url(#filter0_f_1_6)'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M-434.997 522.373C-435.521 448.45 -361.453 402.594 -310.08 349.436C-252.788 290.152 -205.986 189.927 -124.268 200.845C-42.2716 211.8 225.7 227.888 271.68 296.658C306.221 348.32 188.731 503.152 195.42 564.936C203.261 637.364 205.846 818.5 122.42 818.5C69.3469 871.334 -79.0285 820.123 -152.821 807.364C-219.415 795.85 -260.125 736.826 -307.675 688.802C-358.764 637.203 -434.483 594.983 -434.997 522.373Z'
          fill='#CB60E2'
        />
      </g>
    </svg>
  )
}
