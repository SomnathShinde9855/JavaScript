let eventBubling = document.getElementsByClassName("table-data");

eventBubling.addEventListener(
  "click",
  function ($event) {
    console.log($event.nativeElement.target);
  },
  { capture: true }
);
