import { sortBy } from "lodash";
import { Unit } from "./parseBattlefield";

export type SortEnemiesForAttack = (
  units: ReadonlyArray<Unit>
) => ReadonlyArray<Unit>;

const sortEnemiesForAttack: SortEnemiesForAttack = units =>
  sortBy(units, ["health", "position.row", "position.column"]);

export default sortEnemiesForAttack;
