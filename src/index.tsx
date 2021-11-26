import * as React from "react";
import { PiletApi } from "my-coding-zone-piral-app";
import { Link } from "react-router-dom";
import { IframeResizer } from "./IframeResizer";

export function setup(app: PiletApi) {
  app.showNotification("Check out the RxFruits Page", {
    autoClose: 5000,
  });

  app.registerMenu(() => <Link to="/rxfruits">RxFruits</Link>);

  app.registerPage("/rxfruits", () => {
    return (
      <IframeResizer
        heightCalculationMethod="max"
        style={{ width: "1px", minWidth: "100%", minHeight: '600px' }}
        src="https://www.rxjs-fruits.com/"
      />
    );
  });
}
