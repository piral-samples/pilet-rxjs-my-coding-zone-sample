import iframeResize from "iframe-resizer/js/iframeResizer";
import * as React from "react";
import { useEffect, useImperativeHandle, useRef } from "react";

function filterIframeAttribs(props: any) {
  const {
    autoResize,
    bodyBackground,
    bodyMargin,
    bodyPadding,
    checkOrigin,
    inPageLinks,
    heightCalculationMethod,
    interval,
    log,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    resizeFrom,
    scrolling,
    sizeHeight,
    sizeWidth,
    warningTimeout,
    tolerance,
    widthCalculationMethod,
    onClosed,
    onInit,
    onMessage,
    onResized,
    ...iframeProps
  } = props;

  return iframeProps;
}

export const IframeResizer = (props) => {
  const { title, forwardRef, ...rest } = props;
  const iframeProps = filterIframeAttribs(rest);
  const iframeRef = useRef(null);

  const onClose = () => {
    return !iframeRef.current;
  };

  // This hook is only run once, as once iframeResizer is bound, it will
  // deal with changes to the element and does not need recalling
  useEffect(() => {
    const iframe = iframeRef.current;

    setTimeout(() => {
      iframeResize({ ...rest, onClose }, iframe);
    }, 2000);

    return () => iframe.iFrameResizer && iframe.iFrameResizer.removeListeners();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useImperativeHandle(forwardRef, () => ({
    resize: () => iframeRef.current.iFrameResizer.resize(),
    moveToAnchor: (anchor) =>
      iframeRef.current.iFrameResizer.moveToAnchor(anchor),
    sendMessage: (message, targetOrigin) => {
      iframeRef.current.iFrameResizer.sendMessage(message, targetOrigin);
    },
  }));

  return <iframe title={title} {...iframeProps} ref={iframeRef} />;
};
