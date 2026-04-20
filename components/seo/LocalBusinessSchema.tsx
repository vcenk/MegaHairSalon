import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export function LocalBusinessSchema() {
  return <JsonLd data={localBusinessSchema} />;
}
