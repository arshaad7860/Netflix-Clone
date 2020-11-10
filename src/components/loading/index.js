import React from "react";
import { Spinner, Picture, LockBody, ReleaseBody } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody></LockBody>
      <Picture src={`/images/users/${src}.png`}></Picture>
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody></ReleaseBody>;
};
