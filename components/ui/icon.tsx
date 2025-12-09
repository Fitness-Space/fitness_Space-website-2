import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  opacity?: number;
  bgColor?: string;
}

/* ------------------------------------------------------- */

export const TargetIcon = ({ size = 20, color = "#141414" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99858 18.3307C14.6003 18.3307 18.3307 14.6003 18.3307 9.99858C18.3307 5.3969 14.6003 1.6665 9.99858 1.6665C5.3969 1.6665 1.6665 5.3969 1.6665 9.99858C1.6665 14.6003 5.3969 18.3307 9.99858 18.3307Z"
      stroke={color}
      strokeWidth="1.66641"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99827 14.9978C12.7593 14.9978 14.9975 12.7595 14.9975 9.99851C14.9975 7.23751 12.7593 4.99927 9.99827 4.99927C7.23726 4.99927 4.99902 7.23751 4.99902 9.99851C4.99902 12.7595 7.23726 14.9978 9.99827 14.9978Z"
      stroke={color}
      strokeWidth="1.66641"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99845 11.6649C10.9188 11.6649 11.6649 10.9188 11.6649 9.99845C11.6649 9.07811 10.9188 8.33203 9.99845 8.33203C9.07811 8.33203 8.33203 9.07811 8.33203 9.99845C8.33203 10.9188 9.07811 11.6649 9.99845 11.6649Z"
      stroke={color}
      strokeWidth="1.66641"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CalendarIcon = ({
  size = 30,
  color = "#141414",
  opacity = 0.8,
  bgColor = "#FCFCFC",
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="30" height="30" rx="10" fill={bgColor} fillOpacity="0.2" />

    <path
      d="M13.3247 6.66797V8.33438"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="1.66641"
      strokeLinecap="round"
    />
    <path
      d="M16.6577 6.66797V8.33438"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="1.66641"
      strokeLinecap="round"
    />
    <path
      d="M18.3239 11.6672C18.5449 11.6672 18.7568 11.755 18.9131 11.9113C19.0693 12.0675 19.1571 12.2795 19.1571 12.5004V19.1661C19.1571 20.05 18.806 20.8977 18.1809 21.5228C17.5559 22.1478 16.7082 22.4989 15.8243 22.4989H10.825C9.9411 22.4989 9.09338 22.1478 8.46835 21.5228C7.84332 20.8977 7.49219 20.05 7.49219 19.1661V12.5004C7.49219 12.2795 7.57997 12.0675 7.73623 11.9113C7.89248 11.755 8.10441 11.6672 8.32539 11.6672H19.9903C21.7219 11.6672 23.3231 13.2684 23.3231 15.0001C23.3231 16.7317 21.7219 18.3329 19.9903 18.3329H19.1571"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="1.66641"
      strokeLinecap="round"
    />
  </svg>
);

const WeightScaleIcon = ({
  size = 30,
  color = "#141414",
  opacity = 0.8,
  bgColor = "#FCFCFC",
}: {
  size?: number;
  color?: string;
  opacity?: number;
  bgColor?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="30" height="30" rx="10" fill={bgColor} fillOpacity="0.2" />

    <g clipPath="url(#clip0_1592_152)">
      <path
        d="M19.654 15.6398C19.9666 15.9524 20.3905 16.128 20.8326 16.128C21.2746 16.128 21.6986 15.9524 22.0111 15.6398C22.3237 15.3272 22.4993 14.9033 22.4993 14.4612C22.4993 14.0192 22.3237 13.5953 22.0111 13.2827L20.538 11.8104C20.8506 12.1229 21.2745 12.2984 21.7165 12.2983C21.9353 12.2982 22.152 12.2551 22.3542 12.1713C22.5563 12.0875 22.74 11.9648 22.8948 11.81C23.0495 11.6552 23.1722 11.4715 23.2559 11.2693C23.3396 11.0671 23.3827 10.8504 23.3826 10.6315C23.3826 10.4127 23.3395 10.196 23.2557 9.99383C23.1719 9.79166 23.0491 9.60797 22.8943 9.45326L20.538 7.09695C20.2256 6.78437 19.8017 6.60872 19.3597 6.60864C18.9178 6.60856 18.4939 6.78406 18.1813 7.09653C17.8687 7.40899 17.6931 7.83283 17.693 8.27481C17.6929 8.71678 17.8684 9.14068 18.1809 9.45326L16.7086 7.98014C16.5538 7.82537 16.3701 7.7026 16.1679 7.61884C15.9657 7.53508 15.7489 7.49196 15.53 7.49196C15.3112 7.49196 15.0944 7.53508 14.8922 7.61884C14.69 7.7026 14.5062 7.82537 14.3515 7.98014C14.1967 8.13492 14.0739 8.31866 13.9902 8.52088C13.9064 8.7231 13.8633 8.93984 13.8633 9.15872C13.8633 9.3776 13.9064 9.59434 13.9902 9.79656C14.0739 9.99878 14.1967 10.1825 14.3515 10.3373L19.654 15.6398Z"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.66641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7.07568 22.9155L8.24217 21.749"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.66641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M21.7402 8.25096L22.9067 7.08447"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.66641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9.44471 22.9029C9.75718 23.2155 10.181 23.3911 10.623 23.3912C10.8418 23.3912 11.0585 23.3482 11.2607 23.2644C11.4629 23.1807 11.6467 23.058 11.8014 22.9033C11.9562 22.7486 12.079 22.5649 12.1628 22.3627C12.2466 22.1606 12.2897 21.9439 12.2897 21.725C12.2898 21.5062 12.2467 21.2895 12.163 21.0873C12.0793 20.8851 11.9566 20.7013 11.8019 20.5466L13.2741 22.0197C13.5867 22.3323 14.0107 22.5079 14.4527 22.5079C14.8948 22.5079 15.3187 22.3323 15.6313 22.0197C15.9439 21.7071 16.1195 21.2832 16.1195 20.8411C16.1195 20.3991 15.9439 19.9751 15.6313 19.6625L10.3287 14.36C10.174 14.2052 9.99023 14.0825 9.78801 13.9987C9.58579 13.9149 9.36905 13.8718 9.15017 13.8718C8.93129 13.8718 8.71455 13.9149 8.51233 13.9987C8.31011 14.0825 8.12637 14.2052 7.9716 14.36C7.81683 14.5148 7.69406 14.6985 7.61029 14.9007C7.52653 15.103 7.48342 15.3197 7.48342 15.5386C7.48342 15.7575 7.52653 15.9742 7.61029 16.1764C7.69406 16.3786 7.81683 16.5624 7.9716 16.7171L9.44471 18.1894C9.13213 17.877 8.70823 17.7015 8.26626 17.7015C7.82429 17.7016 7.40045 17.8773 7.08798 18.1898C6.77552 18.5024 6.60002 18.9263 6.6001 19.3683C6.60018 19.8103 6.77582 20.2341 7.0884 20.5466L9.44471 22.9029Z"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.66641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12.9917 16.9996L16.9911 13.0002"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.66641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_1592_152">
        <rect
          width="19.997"
          height="19.997"
          fill="white"
          transform="translate(4.99268 5.00146)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default WeightScaleIcon;

export const CheckCircleIcon = ({
  size = 30,
  color = "#141414",
  opacity = 0.8,
  bgColor = "#FCFCFC",
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="30" height="30" rx="10" fill={bgColor} fillOpacity="0.1" />

    <path
      d="M23.1663 13.3335C23.5468 15.201 23.2756 17.1425 22.398 18.8342C21.5203 20.5259 20.0892 21.8656 18.3433 22.6299C16.5974 23.3942 14.6423 23.5368 12.804 23.034C10.9656 22.5313 9.35522 21.4135 8.2413 19.8671C7.12737 18.3207 6.57725 16.4391 6.68269 14.5362C6.78812 12.6333 7.54274 10.824 8.82069 9.41011C10.0986 7.99622 11.8227 7.06318 13.7053 6.76657C15.5879 6.46997 17.5153 6.82774 19.1661 7.78021"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="1.66641"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5005 14.1667L15.0001 16.6663L23.3322 8.33423"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="1.66641"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PaperPlaneIcon = ({ size = 18, color = "white" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4363 8.23711L3.67729 0.457031L13.5492 6.12422L11.4363 8.23711ZM1.65229 0C1.19526 0.239062 0.889404 0.675 0.889404 1.24102V16.7555C0.889404 17.3215 1.19526 17.7574 1.65229 17.9965L10.6734 8.99648L1.65229 0ZM16.6007 7.93125L14.53 6.73242L12.2203 9L14.53 11.2676L16.6429 10.0687C17.2757 9.56601 17.2757 8.43398 16.6007 7.93125ZM3.67729 17.543L13.5492 11.8758L11.4363 9.76289L3.67729 17.543Z"
      fill={color}
    />
  </svg>
);

export const HeartIcon = ({ size = 24, color = "white" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9391 12.5953C14.9297 10.875 15.7078 9.57656 17.2828 8.62031C16.4016 7.35938 15.0703 6.66563 13.3125 6.52969C11.6484 6.39844 9.82969 7.5 9.16406 7.5C8.46094 7.5 6.84844 6.57656 5.58281 6.57656C2.96719 6.61875 0.1875 8.6625 0.1875 12.8203C0.1875 14.0484 0.4125 15.3172 0.8625 16.6266C1.4625 18.3469 3.62812 22.5656 5.8875 22.4953C7.06875 22.4672 7.90312 21.6563 9.44062 21.6563C10.9312 21.6563 11.7047 22.4953 13.0219 22.4953C15.3 22.4625 17.2594 18.6281 17.8312 16.9031C14.775 15.4641 14.9391 12.6844 14.9391 12.5953ZM12.2859 4.89844C13.5656 3.37969 13.4484 1.99688 13.4109 1.5C12.2812 1.56563 10.9734 2.26875 10.2281 3.13594C9.40781 4.06406 8.925 5.2125 9.02813 6.50625C10.2516 6.6 11.3672 5.97188 12.2859 4.89844Z"
      fill={color}
    />
  </svg>
);

export const CheckCircleMiniIcon = ({
  size = 16,
  color = "#058E2D",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125C11.825 6.2375 11.825 5.7625 11.5312 5.47188C11.2375 5.18125 10.7625 5.17813 10.4719 5.47188L7.00313 8.94063L5.53438 7.47188C5.24063 7.17813 4.76562 7.17813 4.475 7.47188C4.18437 7.76562 4.18125 8.24063 4.475 8.53125L6.475 10.5312C6.76875 10.825 7.24375 10.825 7.53438 10.5312L11.5312 6.53125Z"
      fill={color}
    />
  </svg>
);
export const CloseCircleMiniIcon = ({
  size = 16,
  color = "#FF0000",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM5.46875 5.46875C5.175 5.7625 5.175 6.2375 5.46875 6.52812L6.9375 7.99687L5.46875 9.46562C5.175 9.75937 5.175 10.2344 5.46875 10.525C5.7625 10.8156 6.2375 10.8187 6.52812 10.525L7.99687 9.05625L9.46562 10.525C9.75937 10.8187 10.2344 10.8187 10.525 10.525C10.8156 10.2312 10.8187 9.75625 10.525 9.46562L9.05625 7.99687L10.525 6.52812C10.8187 6.23438 10.8187 5.75938 10.525 5.46875C10.2312 5.17812 9.75625 5.175 9.46562 5.46875L7.99687 6.9375L6.52812 5.46875C6.23438 5.175 5.75938 5.175 5.46875 5.46875Z"
      fill={color}
    />
  </svg>
);

export const ProfileGradientIcon = ({ size = 22 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
  >
    <circle
      cx="10.8786"
      cy="10.8786"
      r="10.1987"
      fill="url(#pattern0_1592_232)"
      stroke="url(#paint0_linear_1592_232)"
      strokeWidth="1.35983"
    />
    <defs>
      <pattern
        id="pattern0_1592_232"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1592_232" transform="scale(0.003125)" />
      </pattern>
      <linearGradient
        id="paint0_linear_1592_232"
        x1="16.9979"
        y1="1.01987"
        x2="5.43931"
        y2="21.7573"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BE3BA0" />
        <stop offset="1" stopColor="#FBB25D" />
      </linearGradient>
      <image
        id="image0_1592_232"
        width="320"
        height="320"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAIAAABC8jL9AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABQKADAAQAAAABAAABQAAAAABiXyf0AABAAElEQVR4Aey9CbRl11nfuc85Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041Q5Wvqqd6pVUSSSXJkmwNtjzINjbYxg7ghARCk4EASYde0EmvNN0J3VlZnTTptTrT6rVCNytkAR3SNBBIQsAxhA5gx8hYwgOSZVnWYM0qlWqueu/Ve3c60+3f/9/emf3ct041\"
      />{" "}
    </defs>{" "}
  </svg>
);
