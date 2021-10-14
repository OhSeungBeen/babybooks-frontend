/**
 * All Types
 */

import { AppProps } from "next/app";
import { ClassNameMap } from "@mui/styles";
import React from "react";

interface MyAppProps extends AppProps {}

export interface ComponentProps {
  children?: React.ReactNode | undefined;
  classes: ClassNameMap;
}
