import * as React from "react";

const HeaderLogo = (props) => (
  <svg
    width={46}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M34.267 25.735a.5.5 0 0 0 .328-.853L20.618 10.905a.5.5 0 0 0-.853.328l-.776 14.752a.5.5 0 0 0 .526.526l14.752-.776Z"
      stroke="#fff"
      strokeLinejoin="round"
    />
    <path
      d="m34.63 25.623 10.87-10.87M19.876 10.87 29.971.776"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path stroke="#fff" strokeLinecap="round" d="M43.484 1.707 31.842 12.828" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m22.268 6.5 1-1H4.5A4.5 4.5 0 0 0 0 10v20a4.5 4.5 0 0 0 4.5 4.5h5.08l-2.047 5.32a.5.5 0 0 0 .698.624L19.66 34.5H36.5A4.5 4.5 0 0 0 41 30v-8.674l-1 1V30a3.5 3.5 0 0 1-3.5 3.5H19.538a.5.5 0 0 0-.23.056L8.94 38.947l1.833-4.768a.5.5 0 0 0-.466-.679H4.5A3.5 3.5 0 0 1 1 30V10a3.5 3.5 0 0 1 3.5-3.5h17.768Z"
      fill="#fff"
    />
    <path
      d="M6.5 13a1 1 0 1 0 0 2v-2Zm12 2h1v-2h-1v2Zm-12 0h12v-2h-12v2ZM6.5 19a1 1 0 1 0 0 2v-2Zm12 2h1v-2h-1v2Zm-12 0h12v-2h-12v2Z"
      fill="#fff"
    />
    <path d="M6.5 26h10" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export default HeaderLogo;
