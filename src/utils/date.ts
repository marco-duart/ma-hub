import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatMonthYear(date: Date | undefined): string {
  if (!date) return "Atual";
  return format(date, "MMM yyyy", { locale: ptBR });
}

export function formatYear(date: Date): string {
  return format(date, "yyyy");
}

export function formatPeriod(start: Date, end?: Date): string {
  return `${formatMonthYear(start)} — ${formatMonthYear(end)}`;
}

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}