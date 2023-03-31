import { useEffect, useState } from "react";
import Store from "/src/store";
import circles from "/src/assets/images/circles.svg";

export default function Loading() {
  const [state, setState] = useState({
    loadingClassname: "loading-screen hide",
  });

  //   useEffect(
  //     () => {
  //       if (false) {
  //         setState({ loadingClassname: "loading-screen" });
  //       } else {
  //         setState({ loadingClassname: "loading-screen hide-loading" });
  //       }
  //     }
  //     //   [isResetLoading.status, isTicketLoading.status]
  //   );

  return (
    <div className={state.loadingClassname}>
      <div className="container">
        <h1 className="loud-voice">
          {/* {isResetLoading.status ? isResetLoading.message : ""}
          {isTicketLoading.status ? isTicketLoading.message : ""} */}
          g
        </h1>
        <div className="pictures">
          <picture>
            <img src={circles} alt="" />
          </picture>
          <picture>
            <img src={circles} alt="" />
          </picture>
          <picture>
            <img src={circles} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}
