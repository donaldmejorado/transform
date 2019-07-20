import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";

let x;
if (IN_BROWSER) {
  require("flow-to-ts");
  // @ts-ignore
  x = window.flow2ts;
}
export default function() {
  const transformer = useCallback(async ({ value }) => {
    return x(value);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Flow"
      editorLanguage="flow"
      resultTitle="TypeScript"
      resultLanguage={"typescript"}
    />
  );
}
