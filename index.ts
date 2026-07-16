import { portfolioItems as allPortfolioItems } from "./portfolio";

export * from "./user";
export * from "./resume";
export * from "./experiences";
export * from "./education";
export * from "./skills"; // Supondo que este arquivo exista
export * from "./success-cases";
export * from "./profile"; // Supondo que este arquivo exista

export const portfolioItems = allPortfolioItems.filter((item) => item.show);