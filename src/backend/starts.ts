import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { countStarts, insertStart } from "@/database/starts";

const startInput = z.object({
  program: z.enum(["strength", "conditioning", "team", "unsure"]),
  membership: z.enum(["open", "forge", "crew"]),
});

export type StartInput = z.infer<typeof startInput>;

export const boardCount = createServerFn({ method: "GET" }).handler(async () => {
  return { total: await countStarts() };
});

export const recordStart = createServerFn({ method: "POST" })
  .validator((input: unknown) => startInput.parse(input))
  .handler(async ({ data }) => {
    await insertStart(data);
    return {
      total: await countStarts(),
      program: data.program,
      membership: data.membership,
    };
  });
