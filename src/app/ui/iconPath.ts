export const SearchIcon = {
  path: 'M15.9375 17.5L10.9583 12.5208C10.5417 12.8264 10.0848 13.066 9.58771 13.2396C9.09062 13.4132 8.5616 13.5 8.00063 13.5C6.61132 13.5 5.43056 13.0139 4.45833 12.0417C3.48611 11.0694 3 9.88889 3 8.5C3 7.11111 3.48611 5.93056 4.45833 4.95833C5.43056 3.98611 6.61111 3.5 8 3.5C9.38889 3.5 10.5694 3.98611 11.5417 4.95833C12.5139 5.93056 13 7.11132 13 8.50063C13 9.0616 12.9132 9.59062 12.7396 10.0877C12.566 10.5848 12.3264 11.0417 12.0208 11.4583L17 16.4375L15.9375 17.5ZM8 12C8.97222 12 9.79861 11.6597 10.4792 10.9792C11.1597 10.2986 11.5 9.47222 11.5 8.5C11.5 7.52778 11.1597 6.70139 10.4792 6.02083C9.79861 5.34028 8.97222 5 8 5C7.02778 5 6.20139 5.34028 5.52083 6.02083C4.84028 6.70139 4.5 7.52778 4.5 8.5C4.5 9.47222 4.84028 10.2986 5.52083 10.9792C6.20139 11.6597 7.02778 12 8 12Z',
  width: 20,
  height: 21,
  fill: 'none',
  options: {
    stroke: 'currentColor',
  },
};

export const SideNavIcon = (path: string) =>
  ({
    path,
    width: 24,
    height: 24,
    fill: 'none',
    options: {
      stroke: '#737373',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  }) as const;

export const SideNavSelectedIcon = (path: string) =>
  ({
    path,
    width: 24,
    height: 24,
    fill: 'none',
    options: {
      stroke: '#49AA19',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  }) as const;

export const StarIcon = SideNavIcon(
  'M11.4799 3.49897C11.5222 3.3958 11.5942 3.30755 11.6868 3.24543C11.7794 3.18331 11.8884 3.15015 11.9999 3.15015C12.1114 3.15015 12.2204 3.18331 12.313 3.24543C12.4056 3.30755 12.4776 3.3958 12.5199 3.49897L14.6449 8.60997C14.6847 8.70561 14.7501 8.78841 14.8339 8.84928C14.9177 8.91015 15.0167 8.94672 15.1199 8.95497L20.6379 9.39697C21.1369 9.43697 21.3389 10.06 20.9589 10.385L16.7549 13.987C16.6764 14.0542 16.6178 14.1417 16.5857 14.2399C16.5536 14.3382 16.5492 14.4434 16.5729 14.544L17.8579 19.929C17.8837 20.037 17.877 20.1503 17.8385 20.2545C17.8 20.3587 17.7314 20.4491 17.6416 20.5144C17.5517 20.5797 17.4445 20.6168 17.3335 20.6212C17.2225 20.6256 17.1127 20.597 17.0179 20.539L12.2929 17.654C12.2047 17.6001 12.1033 17.5715 11.9999 17.5715C11.8965 17.5715 11.7951 17.6001 11.7069 17.654L6.98192 20.54C6.88718 20.598 6.77737 20.6266 6.66638 20.6222C6.55538 20.6178 6.44817 20.5807 6.35829 20.5154C6.26841 20.4501 6.19988 20.3597 6.16137 20.2555C6.12286 20.1513 6.11609 20.038 6.14192 19.93L7.42692 14.544C7.45075 14.4434 7.44637 14.3381 7.41426 14.2399C7.38215 14.1416 7.32355 14.0541 7.24492 13.987L3.04092 10.385C2.95626 10.3128 2.89493 10.2171 2.86468 10.1101C2.83443 10.003 2.83664 9.88942 2.87101 9.78362C2.90538 9.67782 2.97038 9.58461 3.05777 9.51578C3.14516 9.44695 3.25101 9.4056 3.36192 9.39697L8.87992 8.95497C8.98317 8.94672 9.08214 8.91015 9.16595 8.84928C9.24975 8.78841 9.31514 8.70561 9.35492 8.60997L11.4799 3.49897Z',
);

export const OrderIcon = SideNavIcon(
  'M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M12 11.25V17.25M15 14.25H9M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z',
);

export const QuotationIcon = SideNavIcon(
  'M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z',
);

export const ProductsIcon = SideNavIcon(
  'M21 11.25V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H5.25C4.85218 21 4.47064 20.842 4.18934 20.5607C3.90804 20.2794 3.75 19.8978 3.75 19.5V11.25M12 4.875C12 4.35583 11.846 3.84831 11.5576 3.41663C11.2692 2.98495 10.8592 2.6485 10.3795 2.44982C9.89989 2.25114 9.37209 2.19915 8.86289 2.30044C8.35369 2.40173 7.88596 2.65173 7.51884 3.01885C7.15173 3.38596 6.90172 3.85369 6.80044 4.36289C6.69915 4.87209 6.75114 5.39989 6.94982 5.87954C7.1485 6.3592 7.48495 6.76917 7.91663 7.05761C8.34831 7.34605 8.85582 7.5 9.375 7.5H12M12 4.875V7.5M12 4.875C12 4.35583 12.154 3.84831 12.4424 3.41663C12.7308 2.98495 13.1408 2.6485 13.6205 2.44982C14.1001 2.25114 14.6279 2.19915 15.1371 2.30044C15.6463 2.40173 16.114 2.65173 16.4812 3.01885C16.8483 3.38596 17.0983 3.85369 17.1996 4.36289C17.3008 4.87209 17.2489 5.39989 17.0502 5.87954C16.8515 6.3592 16.5151 6.76917 16.0834 7.05761C15.6517 7.34605 15.1442 7.5 14.625 7.5H12M12 7.5V21M3.375 11.25H21.375C21.996 11.25 22.5 10.746 22.5 10.125V8.625C22.5 8.004 21.996 7.5 21.375 7.5H3.375C2.754 7.5 2.25 8.004 2.25 8.625V10.125C2.25 10.746 2.754 11.25 3.375 11.25Z',
);

export const SelectedStarIcon = SideNavSelectedIcon(
  'M11.4799 3.49897C11.5222 3.3958 11.5942 3.30755 11.6868 3.24543C11.7794 3.18331 11.8884 3.15015 11.9999 3.15015C12.1114 3.15015 12.2204 3.18331 12.313 3.24543C12.4056 3.30755 12.4776 3.3958 12.5199 3.49897L14.6449 8.60997C14.6847 8.70561 14.7501 8.78841 14.8339 8.84928C14.9177 8.91015 15.0167 8.94672 15.1199 8.95497L20.6379 9.39697C21.1369 9.43697 21.3389 10.06 20.9589 10.385L16.7549 13.987C16.6764 14.0542 16.6178 14.1417 16.5857 14.2399C16.5536 14.3382 16.5492 14.4434 16.5729 14.544L17.8579 19.929C17.8837 20.037 17.877 20.1503 17.8385 20.2545C17.8 20.3587 17.7314 20.4491 17.6416 20.5144C17.5517 20.5797 17.4445 20.6168 17.3335 20.6212C17.2225 20.6256 17.1127 20.597 17.0179 20.539L12.2929 17.654C12.2047 17.6001 12.1033 17.5715 11.9999 17.5715C11.8965 17.5715 11.7951 17.6001 11.7069 17.654L6.98192 20.54C6.88718 20.598 6.77737 20.6266 6.66638 20.6222C6.55538 20.6178 6.44817 20.5807 6.35829 20.5154C6.26841 20.4501 6.19988 20.3597 6.16137 20.2555C6.12286 20.1513 6.11609 20.038 6.14192 19.93L7.42692 14.544C7.45075 14.4434 7.44637 14.3381 7.41426 14.2399C7.38215 14.1416 7.32355 14.0541 7.24492 13.987L3.04092 10.385C2.95626 10.3128 2.89493 10.2171 2.86468 10.1101C2.83443 10.003 2.83664 9.88942 2.87101 9.78362C2.90538 9.67782 2.97038 9.58461 3.05777 9.51578C3.14516 9.44695 3.25101 9.4056 3.36192 9.39697L8.87992 8.95497C8.98317 8.94672 9.08214 8.91015 9.16595 8.84928C9.24975 8.78841 9.31514 8.70561 9.35492 8.60997L11.4799 3.49897Z',
);

export const SelectedOrderIcon = SideNavSelectedIcon(
  'M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M12 11.25V17.25M15 14.25H9M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z',
);

export const SelectedQuotationIcon = SideNavSelectedIcon(
  'M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z',
);

export const SelectedProductsIcon = SideNavSelectedIcon(
  'M21 11.25V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H5.25C4.85218 21 4.47064 20.842 4.18934 20.5607C3.90804 20.2794 3.75 19.8978 3.75 19.5V11.25M12 4.875C12 4.35583 11.846 3.84831 11.5576 3.41663C11.2692 2.98495 10.8592 2.6485 10.3795 2.44982C9.89989 2.25114 9.37209 2.19915 8.86289 2.30044C8.35369 2.40173 7.88596 2.65173 7.51884 3.01885C7.15173 3.38596 6.90172 3.85369 6.80044 4.36289C6.69915 4.87209 6.75114 5.39989 6.94982 5.87954C7.1485 6.3592 7.48495 6.76917 7.91663 7.05761C8.34831 7.34605 8.85582 7.5 9.375 7.5H12M12 4.875V7.5M12 4.875C12 4.35583 12.154 3.84831 12.4424 3.41663C12.7308 2.98495 13.1408 2.6485 13.6205 2.44982C14.1001 2.25114 14.6279 2.19915 15.1371 2.30044C15.6463 2.40173 16.114 2.65173 16.4812 3.01885C16.8483 3.38596 17.0983 3.85369 17.1996 4.36289C17.3008 4.87209 17.2489 5.39989 17.0502 5.87954C16.8515 6.3592 16.5151 6.76917 16.0834 7.05761C15.6517 7.34605 15.1442 7.5 14.625 7.5H12M12 7.5V21M3.375 11.25H21.375C21.996 11.25 22.5 10.746 22.5 10.125V8.625C22.5 8.004 21.996 7.5 21.375 7.5H3.375C2.754 7.5 2.25 8.004 2.25 8.625V10.125C2.25 10.746 2.754 11.25 3.375 11.25Z',
);

export const leftAngle = {
  path: 'M9.99967 10L13.833 13.8333L12.6663 15L7.66634 10L12.6663 5L13.833 6.16667L9.99967 10Z',
  fill: '#333333',
  width: 21,
  height: 20,
} as const;

export const rightAngle = {
  path: 'M11.0003 10L7.16699 6.16667L8.33366 5L13.3337 10L8.33366 15L7.16699 13.8333L11.0003 10Z',
  fill: '#333333',
  width: 21,
  height: 20,
} as const;

// >> 아이콘
export const doubleRightAngle = {
  path: 'M9.52505 12.5L4.80005 7.775L6.07505 6.5L12.075 12.5L6.07505 18.5L4.80005 17.225L9.52505 12.5ZM16.65 12.5L11.925 7.775L13.2 6.5L19.2 12.5L13.2 18.5L11.925 17.225L16.65 12.5Z',
  fill: '#333333',
  width: 21,
  height: 24,
} as const;

export const HeaderSearchIcon = {
  path: 'M15.9375 17L10.9583 12.0208C10.5417 12.3264 10.0848 12.566 9.58771 12.7396C9.09062 12.9132 8.5616 13 8.00063 13C6.61132 13 5.43056 12.5139 4.45833 11.5417C3.48611 10.5694 3 9.38889 3 8C3 6.61111 3.48611 5.43056 4.45833 4.45833C5.43056 3.48611 6.61111 3 8 3C9.38889 3 10.5694 3.48611 11.5417 4.45833C12.5139 5.43056 13 6.61132 13 8.00063C13 8.5616 12.9132 9.09062 12.7396 9.58771C12.566 10.0848 12.3264 10.5417 12.0208 10.9583L17 15.9375L15.9375 17ZM8 11.5C8.97222 11.5 9.79861 11.1597 10.4792 10.4792C11.1597 9.79861 11.5 8.97222 11.5 8C11.5 7.02778 11.1597 6.20139 10.4792 5.52083C9.79861 4.84028 8.97222 4.5 8 4.5C7.02778 4.5 6.20139 4.84028 5.52083 5.52083C4.84028 6.20139 4.5 7.02778 4.5 8C4.5 8.97222 4.84028 9.79861 5.52083 10.4792C6.20139 11.1597 7.02778 11.5 8 11.5Z',
  width: 20,
  height: 20,
  fill: '#306317',
};

export const HeaderHeartIcon = {
  path: 'M14.5002 24.5001L12.8085 22.9835C10.8446 21.214 9.221 19.6876 7.93766 18.4043C6.65433 17.121 5.6335 15.9689 4.87516 14.948C4.11683 13.9272 3.58697 12.989 3.28558 12.1335C2.98419 11.2779 2.8335 10.4029 2.8335 9.50846C2.8335 7.68069 3.446 6.1543 4.671 4.9293C5.896 3.7043 7.42238 3.0918 9.25016 3.0918C10.2613 3.0918 11.2238 3.30569 12.1377 3.73346C13.0516 4.16124 13.8391 4.76402 14.5002 5.5418C15.1613 4.76402 15.9488 4.16124 16.8627 3.73346C17.7766 3.30569 18.7391 3.0918 19.7502 3.0918C21.5779 3.0918 23.1043 3.7043 24.3293 4.9293C25.5543 6.1543 26.1668 7.68069 26.1668 9.50846C26.1668 10.4029 26.0161 11.2779 25.7147 12.1335C25.4134 12.989 24.8835 13.9272 24.1252 14.948C23.3668 15.9689 22.346 17.121 21.0627 18.4043C19.7793 19.6876 18.1557 21.214 16.1918 22.9835L14.5002 24.5001ZM14.5002 21.3501C16.3668 19.6779 17.9029 18.2439 19.1085 17.048C20.3141 15.8522 21.2668 14.8119 21.9668 13.9272C22.6668 13.0425 23.1529 12.255 23.4252 11.5647C23.6974 10.8744 23.8335 10.189 23.8335 9.50846C23.8335 8.3418 23.4446 7.36957 22.6668 6.5918C21.8891 5.81402 20.9168 5.42513 19.7502 5.42513C18.8363 5.42513 17.9904 5.68277 17.2127 6.19805C16.4349 6.71332 15.9002 7.36957 15.6085 8.1668H13.3918C13.1002 7.36957 12.5654 6.71332 11.7877 6.19805C11.0099 5.68277 10.1641 5.42513 9.25016 5.42513C8.0835 5.42513 7.11127 5.81402 6.3335 6.5918C5.55572 7.36957 5.16683 8.3418 5.16683 9.50846C5.16683 10.189 5.30294 10.8744 5.57516 11.5647C5.84739 12.255 6.3335 13.0425 7.0335 13.9272C7.7335 14.8119 8.68627 15.8522 9.89183 17.048C11.0974 18.2439 12.6335 19.6779 14.5002 21.3501',
  width: 28,
  height: 28,
  fill: '#6E6E6E',
};

export const HeaderProfileIcon = {
  path: 'M15.5 14.9786C14.125 14.9786 12.9826 14.5238 12.0728 13.6143C11.1632 12.7045 10.7084 11.5621 10.7084 10.1871C10.7084 8.81207 11.1632 7.66968 12.0728 6.75988C12.9826 5.8503 14.125 5.39551 15.5 5.39551C16.875 5.39551 18.0174 5.8503 18.9272 6.75988C19.8368 7.66968 20.2916 8.81207 20.2916 10.1871C20.2916 11.5621 19.8368 12.7045 18.9272 13.6143C18.0174 14.5238 16.875 14.9786 15.5 14.9786ZM5.5 24.9996V21.8746C5.5 21.1106 5.69271 20.4422 6.07813 19.8693C6.46354 19.2963 6.96531 18.8606 7.58344 18.5621C8.94448 17.9302 10.2743 17.4562 11.5728 17.1402C12.8716 16.8242 14.1806 16.6661 15.5 16.6661C16.8194 16.6661 18.1249 16.8276 19.4166 17.1505C20.7082 17.4734 22.0341 17.9453 23.3941 18.5661C24.0303 18.8666 24.5403 19.3021 24.9241 19.8727C25.308 20.4433 25.5 21.1106 25.5 21.8746V24.9996H5.5ZM7.58344 22.9161H23.4166V21.8746C23.4166 21.576 23.3316 21.2948 23.1616 21.0308C22.9914 20.7669 22.7778 20.5689 22.5209 20.4371C21.257 19.8189 20.0659 19.3832 18.9478 19.1299C17.8299 18.8763 16.6806 18.7496 15.5 18.7496C14.3194 18.7496 13.1631 18.8763 12.0313 19.1299C10.8994 19.3832 9.70844 19.8189 8.45844 20.4371C8.20135 20.5689 7.99125 20.7669 7.82813 21.0308C7.665 21.2948 7.58344 21.576 7.58344 21.8746V22.9161ZM15.5 12.8955C16.2708 12.8955 16.9149 12.6368 17.4322 12.1193C17.9497 11.602 18.2084 10.9579 18.2084 10.1871C18.2084 9.41624 17.9497 8.77217 17.4322 8.25488C16.9149 7.73738 16.2708 7.47863 15.5 7.47863C14.7292 7.47863 14.0851 7.73738 13.5678 8.25488C13.0503 8.77217 12.7916 9.41624 12.7916 10.1871C12.7916 10.9579 13.0503 11.602 13.5678 12.1193C14.0851 12.6368 14.7292 12.8955 15.5 12.8955Z',
  width: 31,
  height: 30,
  fill: '#6E6E6E',
};

export const HeaderCartIcon = {
  path: 'M8.6665 25.6663C8.02484 25.6663 7.47553 25.4379 7.01859 24.9809C6.56164 24.524 6.33317 23.9747 6.33317 23.333C6.33317 22.6913 6.56164 22.142 7.01859 21.6851C7.47553 21.2281 8.02484 20.9997 8.6665 20.9997C9.30817 20.9997 9.85748 21.2281 10.3144 21.6851C10.7714 22.142 10.9998 22.6913 10.9998 23.333C10.9998 23.9747 10.7714 24.524 10.3144 24.9809C9.85748 25.4379 9.30817 25.6663 8.6665 25.6663ZM20.3332 25.6663C19.6915 25.6663 19.1422 25.4379 18.6853 24.9809C18.2283 24.524 17.9998 23.9747 17.9998 23.333C17.9998 22.6913 18.2283 22.142 18.6853 21.6851C19.1422 21.2281 19.6915 20.9997 20.3332 20.9997C20.9748 20.9997 21.5241 21.2281 21.9811 21.6851C22.438 22.142 22.6665 22.6913 22.6665 23.333C22.6665 23.9747 22.438 24.524 21.9811 24.9809C21.5241 25.4379 20.9748 25.6663 20.3332 25.6663ZM7.67484 6.99967L10.4748 12.833H18.6415L21.8498 6.99967H7.67484ZM6.5665 4.66634H23.7748C24.2221 4.66634 24.5623 4.86565 24.7957 5.26426C25.029 5.66287 25.0387 6.06634 24.8248 6.47467L20.6832 13.9413C20.4693 14.3302 20.1825 14.6316 19.8228 14.8455C19.463 15.0594 19.0693 15.1663 18.6415 15.1663H9.94984L8.6665 17.4997H22.6665V19.833H8.6665C7.7915 19.833 7.13039 19.449 6.68317 18.6809C6.23595 17.9129 6.2165 17.1497 6.62484 16.3913L8.19984 13.533L3.99984 4.66634H1.6665V2.33301H5.45817L6.5665 4.66634Z',
  width: 29,
  height: 28,
  fill: '#6E6E6E',
};

export const AddIcon = {
  path: 'M11.5 13H5.5V11H11.5V5H13.5V11H19.5V13H13.5V19H11.5V13Z',
  width: 25,
  height: 24,
  fill: '#6E6E6E',
};

export const HalfCircleIcon = {
  path: 'M32 16C32 13.8989 31.5861 11.8183 30.7821 9.87706C29.978 7.93586 28.7994 6.17203 27.3137 4.68629C25.828 3.20055 24.0641 2.022 22.1229 1.21793C20.1817 0.413852 18.1011 -9.18442e-08 16 0C13.8988 9.18442e-08 11.8183 0.413852 9.87706 1.21793C7.93585 2.022 6.17203 3.20055 4.68629 4.68629C3.20055 6.17203 2.022 7.93586 1.21793 9.87707C0.413852 11.8183 -1.83688e-07 13.8989 0 16H16H32Z',
  width: 32,
  height: 16,
  fill: '#E0E0E0',
};

export const WhiteCloseIcon = {
  path: 'M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z',
  width: 14,
  height: 14,
  fill: 'white',
};

export const ArrowDownIcon = {
  path: 'm19.5 8.25-7.5 7.5-7.5-7.5',
  width: 24,
  height: 24,
  fill: '#6E6E6E',
};

export const PhotoCameraIcon = {
  path: 'M10.0003 14.5833C11.042 14.5833 11.9274 14.2188 12.6566 13.4896C13.3857 12.7604 13.7503 11.875 13.7503 10.8333C13.7503 9.79167 13.3857 8.90625 12.6566 8.17708C11.9274 7.44792 11.042 7.08333 10.0003 7.08333C8.95866 7.08333 8.07324 7.44792 7.34408 8.17708C6.61491 8.90625 6.25033 9.79167 6.25033 10.8333C6.25033 11.875 6.61491 12.7604 7.34408 13.4896C8.07324 14.2188 8.95866 14.5833 10.0003 14.5833ZM10.0003 12.9167C9.41699 12.9167 8.92394 12.7153 8.52116 12.3125C8.11838 11.9097 7.91699 11.4167 7.91699 10.8333C7.91699 10.25 8.11838 9.75694 8.52116 9.35417C8.92394 8.95139 9.41699 8.75 10.0003 8.75C10.5837 8.75 11.0767 8.95139 11.4795 9.35417C11.8823 9.75694 12.0837 10.25 12.0837 10.8333C12.0837 11.4167 11.8823 11.9097 11.4795 12.3125C11.0767 12.7153 10.5837 12.9167 10.0003 12.9167ZM3.33366 17.5C2.87533 17.5 2.48296 17.3368 2.15658 17.0104C1.83019 16.684 1.66699 16.2917 1.66699 15.8333V5.83333C1.66699 5.375 1.83019 4.98264 2.15658 4.65625C2.48296 4.32986 2.87533 4.16667 3.33366 4.16667H5.95866L7.50033 2.5H12.5003L14.042 4.16667H16.667C17.1253 4.16667 17.5177 4.32986 17.8441 4.65625C18.1705 4.98264 18.3337 5.375 18.3337 5.83333V15.8333C18.3337 16.2917 18.1705 16.684 17.8441 17.0104C17.5177 17.3368 17.1253 17.5 16.667 17.5H3.33366ZM3.33366 15.8333H16.667V5.83333H13.292L11.7712 4.16667H8.22949L6.70866 5.83333H3.33366V15.8333Z',
  width: 20,
  height: 20,
  fill: 'white',
};

export const SearchProductIcon = {
  path: 'M15.9375 17L10.9583 12.0208C10.5417 12.3264 10.0848 12.566 9.58771 12.7396C9.09062 12.9132 8.5616 13 8.00063 13C6.61132 13 5.43056 12.5139 4.45833 11.5417C3.48611 10.5694 3 9.38889 3 8C3 6.61111 3.48611 5.43056 4.45833 4.45833C5.43056 3.48611 6.61111 3 8 3C9.38889 3 10.5694 3.48611 11.5417 4.45833C12.5139 5.43056 13 6.61132 13 8.00063C13 8.5616 12.9132 9.09062 12.7396 9.58771C12.566 10.0848 12.3264 10.5417 12.0208 10.9583L17 15.9375L15.9375 17ZM8 11.5C8.97222 11.5 9.79861 11.1597 10.4792 10.4792C11.1597 9.79861 11.5 8.97222 11.5 8C11.5 7.02778 11.1597 6.20139 10.4792 5.52083C9.79861 4.84028 8.97222 4.5 8 4.5C7.02778 4.5 6.20139 4.84028 5.52083 5.52083C4.84028 6.20139 4.5 7.02778 4.5 8C4.5 8.97222 4.84028 9.79861 5.52083 10.4792C6.20139 11.1597 7.02778 11.5 8 11.5Z',
  width: 20,
  height: 20,
  fill: '#4B4B4B',
};

export const TrashBinIcon = {
  path: 'M3.5 18C2.95 18 2.47917 17.8042 2.0875 17.4125C1.69583 17.0208 1.5 16.55 1.5 16V3H0.5V1H5.5V0H11.5V1H16.5V3H15.5V16C15.5 16.55 15.3042 17.0208 14.9125 17.4125C14.5208 17.8042 14.05 18 13.5 18H3.5ZM13.5 3H3.5V16H13.5V3ZM5.5 14H7.5V5H5.5V14ZM9.5 14H11.5V5H9.5V14Z',
  width: 17,
  height: 18,
  fill: '#6E6E6E',
};

export const DropDownIcon = {
  path: 'M9 11.25L5.25 7.5H12.75L9 11.25Z',
  width: 18,
  height: 18,
  fill: '#333333',
};

// 뒤로가기 아이콘
export const GoBackIcon = {
  path: 'M5.86875 10.25L10.0688 14.45L9 15.5L3 9.5L9 3.5L10.0688 4.55L5.86875 8.75H15V10.25H5.86875Z',
  width: 18,
  height: 19,
  fill: '#6E6E6E',
};

// 오른쪽 화살표 아이콘
export const ArrowRightIcon = {
  path: 'M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z',
  width: 24,
  height: 24,
  fill: '#999999',
};

// 가게 아이콘
export const ShopIcon = {
  path: 'M31.5375 16.575V28.5C31.5375 29.325 31.2437 30.0313 30.6562 30.6188C30.0687 31.2063 29.3625 31.5 28.5375 31.5H7.53745C6.71245 31.5 6.0062 31.2063 5.4187 30.6188C4.8312 30.0313 4.53745 29.325 4.53745 28.5V16.575C3.96245 16.05 3.5187 15.375 3.2062 14.55C2.8937 13.725 2.88745 12.825 3.18745 11.85L4.76245 6.75C4.96245 6.1 5.3187 5.5625 5.8312 5.1375C6.3437 4.7125 6.93745 4.5 7.61245 4.5H28.4625C29.1375 4.5 29.725 4.70625 30.225 5.11875C30.725 5.53125 31.0875 6.075 31.3125 6.75L32.8875 11.85C33.1875 12.825 33.1812 13.7125 32.8687 14.5125C32.5562 15.3125 32.1125 16 31.5375 16.575ZM21.3375 15C22.0125 15 22.525 14.7688 22.875 14.3063C23.225 13.8438 23.3624 13.325 23.2875 12.75L22.4625 7.5H19.5375V13.05C19.5375 13.575 19.7125 14.0312 20.0625 14.4188C20.4125 14.8063 20.8375 15 21.3375 15ZM14.5875 15C15.1624 15 15.6312 14.8063 15.9937 14.4188C16.3562 14.0312 16.5374 13.575 16.5374 13.05V7.5H13.6124L12.7874 12.75C12.6875 13.35 12.8187 13.875 13.1812 14.325C13.5437 14.775 14.0125 15 14.5875 15ZM7.91245 15C8.36245 15 8.7562 14.8375 9.0937 14.5125C9.4312 14.1875 9.63745 13.775 9.71245 13.275L10.5374 7.5H7.61245L6.11245 12.525C5.96245 13.025 6.0437 13.5625 6.3562 14.1375C6.6687 14.7125 7.18745 15 7.91245 15ZM28.1625 15C28.8875 15 29.4125 14.7125 29.7375 14.1375C30.0625 13.5625 30.1375 13.025 29.9625 12.525L28.3875 7.5H25.5375L26.3624 13.275C26.4375 13.775 26.6437 14.1875 26.9812 14.5125C27.3187 14.8375 27.7125 15 28.1625 15ZM7.53745 28.5H28.5375V17.925C28.4125 17.975 28.3312 18 28.2937 18H28.1625C27.4875 18 26.8937 17.8875 26.3812 17.6625C25.8687 17.4375 25.3624 17.075 24.8624 16.575C24.4125 17.025 23.9 17.375 23.325 17.625C22.75 17.875 22.1375 18 21.4874 18C20.8125 18 20.1812 17.875 19.5937 17.625C19.0062 17.375 18.4875 17.025 18.0374 16.575C17.6125 17.025 17.1187 17.375 16.5562 17.625C15.9937 17.875 15.3875 18 14.7374 18C14.0125 18 13.3562 17.875 12.7687 17.625C12.1812 17.375 11.6624 17.025 11.2124 16.575C10.6874 17.1 10.1687 17.4688 9.6562 17.6813C9.1437 17.8938 8.56245 18 7.91245 18H7.7437C7.6812 18 7.61245 17.975 7.53745 17.925V28.5Z',
  width: 36,
  height: 36,
  fill: '#FFF',
};

export const RightArrowIcon = {
  path: 'M12.1312 8.75L7.93125 4.55L9 3.5L15 9.5L9 15.5L7.93125 14.45L12.1312 10.25L3 10.25V8.75L12.1312 8.75Z',
  width: 18,
  height: 20,
  fill: '#333333',
};
