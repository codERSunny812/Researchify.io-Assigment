import { useContext } from "react";
import { InsightContext } from "../utils/GlobalVariable";

export const useInsight = () => useContext(InsightContext);