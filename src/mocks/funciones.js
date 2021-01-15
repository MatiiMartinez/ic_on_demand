import { teamMock } from "./teamMock";

export function deleteItem(id) {
  teamMock.filter((item) => item.id !== id);
}
