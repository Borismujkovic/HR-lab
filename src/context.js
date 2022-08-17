import { createContext } from "react";

export const adminCtx = createContext("app provider");
export const AdminProvider = adminCtx.Provider;

export const crpCtx = createContext("crp provider");
export const CrpProvider = crpCtx.Provider;
