import { getSql } from "@/lib/db";

/** Row shape for `migrations/0002_starts.sql`. */
export type StartProgram = "strength" | "conditioning" | "team" | "unsure";
export type StartMembership = "open" | "forge" | "crew";

export type StartRow = {
  program: StartProgram;
  membership: StartMembership;
};

export async function countStarts(): Promise<number> {
  const sql = await getSql();
  const rows = await sql<{ total: number }>`select count(*) as total from starts`;
  return Number(rows[0]?.total ?? 0);
}

export async function insertStart(row: StartRow): Promise<void> {
  const sql = await getSql();
  await sql`insert into starts (program, membership) values (${row.program}, ${row.membership})`;
}
