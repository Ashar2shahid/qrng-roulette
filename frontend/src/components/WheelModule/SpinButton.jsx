export default function SpinButton(props) {
  return (
    <svg
      id="spin-button"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1000 1000"
    >
      <defs>
        <style></style>
        <filter id="outer-glow-23" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur" stdDeviation="15" />
          <feFlood floodColor="#fff" floodOpacity="1" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="outer-glow-24" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-2" stdDeviation="15" />
          <feFlood floodColor="#55addc" floodOpacity="1" />
          <feComposite in2="blur-2" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="outer-glow-25" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur-3" stdDeviation="15" />
          <feFlood floodColor="#e9529a" floodOpacity="1" />
          <feComposite in2="blur-3" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g>
        <path
          id="blue-circle"
          d="M500.27,0c275.96,.15,499.88,224.31,499.73,500.27-.15,275.96-224.31,499.88-500.27,499.73C223.78,999.85-.15,775.69,0,499.73,.15,223.78,224.31-.15,500.27,0h0Z"
        />
      </g>
      <g className={props.className}>
        <circle
          id="outline-stroke"
          className="cls-3"
          cx="500"
          cy="500"
          r="462.96"
        />
        <path
          id="blue-arrow"
          d="M636.39,242.56c-.34-4.25-.95-8.5-.97-12.76-.04-9.13,5.63-15.29,13.84-15.41,8.29-.13,14.23,6.23,14.27,15.49,.07,15.52,.07,31.04,0,46.56-.05,10.07-5.61,15.65-15.57,15.68-15.52,.05-31.04,.05-46.56,0-9.24-.03-15.69-5.98-15.61-14.23,.08-8.36,6.36-13.92,15.84-13.96,4.14-.02,8.28,.05,12.42,.07,.22-.4,.44-.81,.66-1.21-6.84-6.14-13.35-12.71-20.59-18.35-31.08-24.21-66.41-36.93-105.86-37.41-39.92-.48-76.05,11.16-107.89,35.41-6.15,4.68-11.9,9.92-17.62,15.14-6.72,6.15-15.19,6.33-21.08,.14-5.57-5.87-5.01-14.5,1.63-20.61,63.62-58.53,136.31-73.09,217.49-43.95,27.07,9.71,50.1,26.25,70.38,46.59,1.06,1.06,2.21,2.03,3.32,3.04,.63-.08,1.26-.16,1.89-.23Z"
        />
        <path
          id="red-arrow"
          d="M365.08,757.44c.34,4.25,.95,8.5,.97,12.76,.04,9.13-5.63,15.29-13.84,15.41-8.29,.13-14.23-6.23-14.27-15.49-.07-15.52-.07-31.04,0-46.56,.05-10.07,5.61-15.65,15.57-15.68,15.52-.05,31.04-.05,46.56,0,9.24,.03,15.69,5.98,15.61,14.23-.08,8.36-6.36,13.92-15.84,13.96-4.14,.02-8.28-.05-12.42-.07-.22,.4-.44,.81-.66,1.21,6.84,6.14,13.35,12.71,20.59,18.35,31.08,24.21,66.41,36.93,105.86,37.41,39.92,.48,76.05-11.16,107.89-35.41,6.15-4.68,11.9-9.92,17.62-15.14,6.72-6.15,15.19-6.33,21.08-.14,5.57,5.87,5.01,14.5-1.63,20.61-63.62,58.53-136.31,73.09-217.49,43.95-27.07-9.71-50.1-26.25-70.38-46.59-1.06-1.06-2.21-2.03-3.32-3.04-.63,.08-1.26,.16-1.89,.23Z"
        />
      </g>
    </svg>
  );
}
