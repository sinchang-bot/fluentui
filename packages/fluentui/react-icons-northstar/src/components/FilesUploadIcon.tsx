import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const FilesUploadIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M15 3.00122C15.2761 3.00122 15.5 2.77736 15.5 2.50122C15.5 2.25576 15.3231 2.05161 15.0899 2.00928L15 2.00122H4C3.72386 2.00122 3.5 2.22508 3.5 2.50122C3.5 2.74668 3.67688 2.95083 3.91012 2.99317L4 3.00122H15ZM9.50014 17.999C9.7456 17.999 9.9497 17.822 9.99197 17.5887L10 17.4989L9.996 5.70501L13.6414 9.35334C13.8148 9.52707 14.0842 9.5466 14.2792 9.41179L14.3485 9.354C14.5222 9.18059 14.5418 8.91118 14.407 8.71619L14.3492 8.64689L9.85745 4.14689C9.78495 4.07426 9.69568 4.02858 9.60207 4.00986L9.49608 4.00012C9.33511 4.00012 9.19192 4.07624 9.10051 4.19444L4.64386 8.64631C4.44846 8.84143 4.44823 9.15802 4.64336 9.35342C4.8168 9.52711 5.08621 9.54658 5.28117 9.41173L5.35046 9.35392L8.996 5.71301L9 17.4992C9.00008 17.7753 9.224 17.999 9.50014 17.999Z"
      />
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M4.5 2C4.08579 2 3.75 2.33579 3.75 2.75C3.75 3.16421 4.08579 3.5 4.5 3.5H15C15.4142 3.5 15.75 3.16421 15.75 2.75C15.75 2.33579 15.4142 2 15 2H4.5Z" />
        <path d="M10.4963 17.3493C10.4466 17.7154 10.1328 17.9976 9.75311 17.9976C9.3389 17.9976 9.00311 17.6618 9.00311 17.2476L9.00249 7.05856L6.02995 10.026L5.94578 10.0986C5.65202 10.3162 5.23537 10.2917 4.96929 10.0253C4.67661 9.73215 4.67695 9.25728 4.97005 8.96459L9.25962 4.67989C9.33377 4.61512 9.42089 4.56485 9.5169 4.53385L9.59777 4.51072C9.64749 4.50019 9.69837 4.4947 9.74849 4.4947L9.80855 4.49661L9.87781 4.50451L9.99828 4.53462L10.0895 4.57254L10.1259 4.59371L10.2169 4.6523L10.2875 4.71481L14.5303 8.96546L14.6029 9.04964C14.8205 9.34345 14.7959 9.7601 14.5294 10.0261L14.4452 10.0987C14.1514 10.3162 13.7347 10.2917 13.4687 10.0251L10.5025 7.05456L10.5031 17.2476L10.4963 17.3493Z" />
      </g>
    </svg>
  ),
  displayName: 'FilesUploadIcon',
});
