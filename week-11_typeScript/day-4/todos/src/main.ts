import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";
import { v4 as uuidv4 } from "uuid";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  // add listner to the form
  const itemEnteryFrom = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEnteryFrom.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    // get the value from the input
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEnteryText: string = input.value.trim();
    if (!newEnteryText) return;

    // create a ne ListItem
    const newItem = new ListItem(uuidv4(), newEnteryText);
    // add new item to the list // fullList
    fullList.addItem(newItem);
    // re-render the list of items
    template.render(fullList);
  });

  const clearList = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearList.addEventListener("click", () => {
    fullList.clearList();
    template.clear();
  });

  // load initial data
  fullList.load();
  // render first time on init
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
