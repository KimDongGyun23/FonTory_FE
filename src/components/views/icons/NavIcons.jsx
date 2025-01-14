import { colors } from '@/styles/palette'

const activeColor = (isActive) => (isActive ? colors.blue[500] : '#fff')

export const NavHomeIcon = ({ isActive }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.2"
      d="M20.25 10.9397V20.25H14.25V14.25H9.75V20.25H3.75V10.9397L11.4694 3.21935C11.539 3.14962 11.6217 3.0943 11.7128 3.05656C11.8038 3.01882 11.9014 2.99939 12 2.99939C12.0986 2.99939 12.1962 3.01882 12.2872 3.05656C12.3783 3.0943 12.461 3.14962 12.5306 3.21935L20.25 10.9397Z"
      fill={activeColor(isActive)}
    />
    <path
      d="M22.5 19.5H21V12.75L21.2194 12.9694C21.3604 13.1101 21.5515 13.1891 21.7507 13.1889C21.9499 13.1887 22.1408 13.1094 22.2816 12.9684C22.4223 12.8275 22.5013 12.6363 22.5011 12.4371C22.5009 12.2379 22.4216 12.047 22.2806 11.9062L13.0603 2.68875C12.779 2.40766 12.3977 2.24976 12 2.24976C11.6023 2.24976 11.221 2.40766 10.9397 2.68875L1.71938 11.9062C1.57877 12.047 1.49983 12.2378 1.49991 12.4367C1.5 12.6357 1.57911 12.8264 1.71984 12.967C1.86057 13.1076 2.0514 13.1866 2.25033 13.1865C2.44927 13.1864 2.64002 13.1073 2.78062 12.9666L3 12.75V19.5H1.5C1.30109 19.5 1.11032 19.579 0.96967 19.7197C0.829018 19.8603 0.75 20.0511 0.75 20.25C0.75 20.4489 0.829018 20.6397 0.96967 20.7803C1.11032 20.921 1.30109 21 1.5 21H22.5C22.6989 21 22.8897 20.921 23.0303 20.7803C23.171 20.6397 23.25 20.4489 23.25 20.25C23.25 20.0511 23.171 19.8603 23.0303 19.7197C22.8897 19.579 22.6989 19.5 22.5 19.5ZM4.5 11.25L12 3.75L19.5 11.25V19.5H15V14.25C15 14.0511 14.921 13.8603 14.7803 13.7197C14.6397 13.579 14.4489 13.5 14.25 13.5H9.75C9.55109 13.5 9.36032 13.579 9.21967 13.7197C9.07902 13.8603 9 14.0511 9 14.25V19.5H4.5V11.25ZM13.5 19.5H10.5V15H13.5V19.5Z"
      fill={activeColor(isActive)}
    />
  </svg>
)

export const NavFontDesignIcon = ({ isActive }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.2"
      d="M20.7806 8.46937L18 11.25L12.75 6L15.5306 3.21937C15.6713 3.07883 15.862 2.99988 16.0608 2.99988C16.2596 2.99988 16.4503 3.07883 16.5909 3.21937L20.7806 7.40625C20.8506 7.47594 20.9062 7.55877 20.9441 7.64999C20.982 7.74121 21.0015 7.83903 21.0015 7.93781C21.0015 8.0366 20.982 8.13441 20.9441 8.22563C20.9062 8.31685 20.8506 8.39968 20.7806 8.46937Z"
      fill={activeColor(isActive)}
    />
    <path
      d="M21.3113 6.87845L17.1216 2.68971C16.9823 2.55038 16.8169 2.43986 16.6349 2.36446C16.4529 2.28905 16.2578 2.25024 16.0608 2.25024C15.8638 2.25024 15.6687 2.28905 15.4867 2.36446C15.3047 2.43986 15.1393 2.55038 15 2.68971L3.4397 14.25C3.2998 14.3888 3.18889 14.554 3.11341 14.736C3.03792 14.9181 2.99938 15.1133 3.00001 15.3103V19.5C3.00001 19.8978 3.15804 20.2794 3.43935 20.5607C3.72065 20.842 4.10218 21 4.50001 21H20.25C20.4489 21 20.6397 20.921 20.7803 20.7803C20.921 20.6397 21 20.4489 21 20.25C21 20.0511 20.921 19.8603 20.7803 19.7197C20.6397 19.579 20.4489 19.5 20.25 19.5H10.8113L21.3113 9.00002C21.4506 8.86072 21.5611 8.69535 21.6365 8.51334C21.7119 8.33133 21.7507 8.13625 21.7507 7.93924C21.7507 7.74222 21.7119 7.54714 21.6365 7.36513C21.5611 7.18312 21.4506 7.01775 21.3113 6.87845ZM7.43626 17.625L15.375 9.68533L16.9397 11.25L9.00001 19.1897L7.43626 17.625ZM6.37501 16.5647L4.81032 15L12.75 7.06033L14.3147 8.62502L6.37501 16.5647ZM4.50001 16.8103L7.1897 19.5H4.50001V16.8103ZM18 10.1897L13.8113 6.00002L16.0613 3.75002L20.25 7.9397L18 10.1897Z"
      fill={activeColor(isActive)}
    />
  </svg>
)

export const NavFontSynthesisIcon = ({ isActive }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.2"
      d="M20.25 4.5V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5Z"
      fill={activeColor(isActive)}
    />
    <path
      d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM19.5 19.5H4.5V4.5H19.5V19.5ZM16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12Z"
      fill={activeColor(isActive)}
    />
  </svg>
)

export const NavExplorerIcon = ({ isActive }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.2"
      d="M19.5 9.74999C19.501 10.8864 19.2433 12.0081 18.7464 13.0301C18.2495 14.0521 17.5265 14.9476 16.6322 15.6487C16.3591 15.8604 16.1377 16.1315 15.9848 16.4414C15.832 16.7513 15.7517 17.0919 15.75 17.4375V18C15.75 18.1989 15.671 18.3897 15.5303 18.5303C15.3897 18.671 15.1989 18.75 15 18.75H8.99999C8.80108 18.75 8.61032 18.671 8.46966 18.5303C8.32901 18.3897 8.24999 18.1989 8.24999 18V17.4375C8.24963 17.0938 8.17092 16.7548 8.01984 16.4461C7.86876 16.1375 7.64929 15.8673 7.37812 15.6562C6.48653 14.9597 5.76437 14.0703 5.26588 13.0546C4.76739 12.039 4.50554 10.9235 4.49999 9.79217C4.47749 5.72717 7.75499 2.34374 11.8191 2.24999C12.8191 2.22585 13.8138 2.40202 14.7448 2.76811C15.6757 3.1342 16.524 3.68282 17.2397 4.38167C17.9554 5.08053 18.5241 5.9155 18.9123 6.83744C19.3005 7.75938 19.5003 8.74966 19.5 9.74999Z"
      fill={activeColor(isActive)}
    />
    <path
      d="M16.5 21.75C16.5 21.9489 16.421 22.1397 16.2803 22.2803C16.1397 22.421 15.9489 22.5 15.75 22.5H8.25C8.05109 22.5 7.86032 22.421 7.71967 22.2803C7.57902 22.1397 7.5 21.9489 7.5 21.75C7.5 21.5511 7.57902 21.3603 7.71967 21.2197C7.86032 21.079 8.05109 21 8.25 21H15.75C15.9489 21 16.1397 21.079 16.2803 21.2197C16.421 21.3603 16.5 21.5511 16.5 21.75ZM20.25 9.75001C20.2532 11.0003 19.9708 12.2348 19.4242 13.3593C18.8776 14.4838 18.0814 15.4686 17.0962 16.2385C16.912 16.3796 16.7626 16.5611 16.6592 16.7689C16.5559 16.9767 16.5014 17.2054 16.5 17.4375V18C16.5 18.3978 16.342 18.7794 16.0607 19.0607C15.7794 19.342 15.3978 19.5 15 19.5H9C8.60218 19.5 8.22064 19.342 7.93934 19.0607C7.65804 18.7794 7.5 18.3978 7.5 18V17.4375C7.49985 17.2082 7.44712 16.982 7.34587 16.7762C7.24462 16.5705 7.09754 16.3907 6.91594 16.2506C5.93338 15.4854 5.13774 14.5067 4.58925 13.3886C4.04075 12.2705 3.75376 11.0423 3.75 9.79689C3.72563 5.32783 7.33688 1.60783 11.8013 1.50001C12.9013 1.47351 13.9955 1.66731 15.0195 2.07003C16.0434 2.47275 16.9765 3.07624 17.7638 3.84497C18.551 4.61371 19.1766 5.53217 19.6035 6.54628C20.0305 7.5604 20.2503 8.64968 20.25 9.75001ZM18.75 9.75001C18.7503 8.8497 18.5704 7.95842 18.221 7.12866C17.8717 6.29889 17.3598 5.54741 16.7156 4.91843C16.0715 4.28946 15.308 3.7957 14.4701 3.46624C13.6322 3.13678 12.7369 2.97826 11.8369 3.00001C8.18063 3.08626 5.23031 6.13033 5.25 9.78658C5.25336 10.8053 5.4884 11.8098 5.93733 12.7243C6.38627 13.6387 7.03733 14.439 7.84125 15.0647C8.2026 15.3456 8.49489 15.7055 8.69574 16.1168C8.89658 16.528 9.00066 16.9798 9 17.4375V18H11.25V13.8103L8.46937 11.0306C8.32864 10.8899 8.24958 10.699 8.24958 10.5C8.24958 10.301 8.32864 10.1101 8.46937 9.96939C8.61011 9.82866 8.80098 9.7496 9 9.7496C9.19902 9.7496 9.38989 9.82866 9.53063 9.96939L12 12.4397L14.4694 9.96939C14.5391 9.89971 14.6218 9.84443 14.7128 9.80672C14.8039 9.76901 14.9015 9.7496 15 9.7496C15.0985 9.7496 15.1961 9.76901 15.2872 9.80672C15.3782 9.84443 15.4609 9.89971 15.5306 9.96939C15.6003 10.0391 15.6556 10.1218 15.6933 10.2128C15.731 10.3039 15.7504 10.4015 15.7504 10.5C15.7504 10.5986 15.731 10.6961 15.6933 10.7872C15.6556 10.8782 15.6003 10.961 15.5306 11.0306L12.75 13.8103V18H15V17.4375C15.0008 16.9785 15.1066 16.5257 15.3092 16.1138C15.5118 15.7019 15.8059 15.3418 16.1691 15.061C16.9754 14.4308 17.6271 13.6247 18.0744 12.7043C18.5217 11.7839 18.7528 10.7734 18.75 9.75001Z"
      fill={activeColor(isActive)}
    />
  </svg>
)

export const NavBookmarkIcon = ({ isActive }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.2"
      d="M18 4.5V21L12 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5Z"
      fill={activeColor(isActive)}
    />
    <path
      d="M17.25 3H6.75C6.35218 3 5.97064 3.15804 5.68934 3.43934C5.40804 3.72064 5.25 4.10218 5.25 4.5V21C5.25007 21.1338 5.28595 21.2652 5.35393 21.3805C5.42191 21.4958 5.5195 21.5908 5.63659 21.6557C5.75367 21.7206 5.88598 21.7529 6.01978 21.7494C6.15358 21.7458 6.284 21.7066 6.3975 21.6356L12 18.1341L17.6034 21.6356C17.7169 21.7063 17.8472 21.7454 17.9809 21.7488C18.1146 21.7522 18.2467 21.7198 18.3636 21.655C18.4806 21.5902 18.5781 21.4953 18.646 21.3801C18.7139 21.2649 18.7498 21.1337 18.75 21V4.5C18.75 4.10218 18.592 3.72064 18.3107 3.43934C18.0294 3.15804 17.6478 3 17.25 3ZM17.25 19.6472L12.3966 16.6144C12.2774 16.5399 12.1396 16.5004 11.9991 16.5004C11.8585 16.5004 11.7208 16.5399 11.6016 16.6144L6.75 19.6472V4.5H17.25V19.6472Z"
      fill={activeColor(isActive)}
    />
  </svg>
)

export const NavMyFontIcon = ({ isActive }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.2"
      d="M21 12C21.0013 13.2622 20.7365 14.5105 20.2228 15.6634C19.7091 16.8163 18.9581 17.8479 18.0188 18.691C17.454 17.5801 16.5927 16.6473 15.5304 15.9958C14.4681 15.3444 13.2462 14.9997 12 15C12.7417 15 13.4667 14.7801 14.0834 14.368C14.7001 13.956 15.1807 13.3703 15.4646 12.6851C15.7484 11.9999 15.8226 11.2459 15.6779 10.5184C15.5333 9.79101 15.1761 9.12282 14.6517 8.59837C14.1272 8.07393 13.459 7.71677 12.7316 7.57208C12.0042 7.42738 11.2502 7.50165 10.5649 7.78548C9.87972 8.0693 9.29405 8.54995 8.88199 9.16664C8.46994 9.78332 8.25 10.5083 8.25 11.25C8.25 12.2446 8.64509 13.1984 9.34835 13.9017C10.0516 14.6049 11.0054 15 12 15C10.7538 14.9997 9.5319 15.3444 8.46958 15.9958C7.40725 16.6473 6.54601 17.5801 5.98125 18.691C4.86586 17.6877 4.01896 16.4215 3.51756 15.0076C3.01615 13.5936 2.87615 12.0768 3.11028 10.595C3.34442 9.11314 3.94526 7.71335 4.85817 6.52287C5.77108 5.3324 6.9671 4.38902 8.33747 3.77851C9.70784 3.168 11.2091 2.90974 12.7047 3.02721C14.2003 3.14467 15.6428 3.63414 16.9011 4.4511C18.1593 5.26805 19.1934 6.38659 19.9093 7.70499C20.6251 9.02338 21.0001 10.4998 21 12Z"
      fill={activeColor(isActive)}
    />
    <path
      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM6.945 18.5156C7.48757 17.6671 8.23501 16.9688 9.11843 16.4851C10.0019 16.0013 10.9928 15.7478 12 15.7478C13.0072 15.7478 13.9982 16.0013 14.8816 16.4851C15.765 16.9688 16.5124 17.6671 17.055 18.5156C15.6097 19.6397 13.831 20.2499 12 20.2499C10.169 20.2499 8.39032 19.6397 6.945 18.5156ZM9 11.25C9 10.6567 9.17595 10.0766 9.5056 9.58329C9.83524 9.08994 10.3038 8.70542 10.852 8.47836C11.4001 8.2513 12.0033 8.19189 12.5853 8.30764C13.1672 8.4234 13.7018 8.70912 14.1213 9.12868C14.5409 9.54824 14.8266 10.0828 14.9424 10.6647C15.0581 11.2467 14.9987 11.8499 14.7716 12.3981C14.5446 12.9462 14.1601 13.4148 13.6667 13.7444C13.1734 14.0741 12.5933 14.25 12 14.25C11.2044 14.25 10.4413 13.9339 9.87868 13.3713C9.31607 12.8087 9 12.0456 9 11.25ZM18.165 17.4759C17.3285 16.2638 16.1524 15.3261 14.7844 14.7806C15.5192 14.2019 16.0554 13.4085 16.3184 12.5108C16.5815 11.6132 16.5582 10.6559 16.252 9.77207C15.9457 8.88825 15.3716 8.12183 14.6096 7.5794C13.8475 7.03696 12.9354 6.74548 12 6.74548C11.0646 6.74548 10.1525 7.03696 9.39044 7.5794C8.62839 8.12183 8.05432 8.88825 7.74805 9.77207C7.44179 10.6559 7.41855 11.6132 7.68157 12.5108C7.94459 13.4085 8.4808 14.2019 9.21563 14.7806C7.84765 15.3261 6.67147 16.2638 5.835 17.4759C4.77804 16.2873 4.0872 14.8185 3.84567 13.2464C3.60415 11.6743 3.82224 10.0658 4.47368 8.61478C5.12512 7.16372 6.18213 5.93192 7.51745 5.06769C8.85276 4.20346 10.4094 3.74367 12 3.74367C13.5906 3.74367 15.1473 4.20346 16.4826 5.06769C17.8179 5.93192 18.8749 7.16372 19.5263 8.61478C20.1778 10.0658 20.3959 11.6743 20.1543 13.2464C19.9128 14.8185 19.222 16.2873 18.165 17.4759Z"
      fill={activeColor(isActive)}
    />
  </svg>
)
